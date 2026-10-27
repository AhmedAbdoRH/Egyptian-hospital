import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export const RevealReadyContext = createContext<boolean>(true);

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

type ObserverCallback = (isIntersecting: boolean) => void;

interface SharedObserverEntry {
  observer: IntersectionObserver;
  callbacks: Map<Element, ObserverCallback>;
}

const observerPool = new Map<string, SharedObserverEntry>();

function observeElement(
  element: Element,
  threshold: number,
  rootMargin: string,
  callback: ObserverCallback
): () => void {
  const key = `${threshold}|${rootMargin}`;
  let entry = observerPool.get(key);

  if (!entry) {
    const callbacks = new Map<Element, ObserverCallback>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ioEntry) => {
          const cb = callbacks.get(ioEntry.target);
          if (cb) {
            cb(ioEntry.isIntersecting);
          }
        });
      },
      { threshold, rootMargin }
    );
    entry = { observer, callbacks };
    observerPool.set(key, entry);
  }

  entry.callbacks.set(element, callback);
  entry.observer.observe(element);

  return () => {
    const current = observerPool.get(key);
    if (!current) return;
    current.observer.unobserve(element);
    current.callbacks.delete(element);
    if (current.callbacks.size === 0) {
      current.observer.disconnect();
      observerPool.delete(key);
    }
  };
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'up',
  delay = 0,
  duration = 680,
  className = '',
  threshold = 0.08,
  once = true,
  as: Component = 'div',
}) => {
  const isReady = useContext(RevealReadyContext);
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setInView(true);
      setRevealed(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      setRevealed(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    return observeElement(node, threshold, '0px 0px -40px 0px', (intersecting) => {
      if (intersecting) {
        setInView(true);
      } else if (!once) {
        setInView(false);
      }
    });
  }, [threshold, once]);

  useEffect(() => {
    if (inView && isReady) {
      setRevealed(true);
    } else if (!once && !inView) {
      setRevealed(false);
    }
  }, [inView, isReady, once]);

  const variantClass = `sr-${variant}`;
  const visibilityClass = revealed ? 'is-visible' : '';

  return (
    <Component
      ref={ref}
      className={`sr-element ${variantClass} ${visibilityClass} ${className}`.trim()}
      style={
        {
          '--sr-delay': `${delay}ms`,
          '--sr-duration': `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
};
