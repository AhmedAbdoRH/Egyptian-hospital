import React from 'react';
import { BrandLogo } from './BrandLogo';

interface LoadingScreenProps {
  isLeaving: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLeaving }) => (
  <div
    className={`brand-loader${isLeaving ? ' brand-loader--leaving' : ''}`}
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label="جارٍ تجهيز الموقع"
  >
    <div className="brand-loader__content">
      <BrandLogo className="brand-loader__logo" title="الشعار الطبي" />
    </div>
  </div>
);
