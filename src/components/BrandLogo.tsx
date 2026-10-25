import React from 'react';

export interface BrandLogoProps {
  className?: string;
  title?: string;
}

const nodes = [
  { x: 178, y: 84, r: 7 },
  { x: 198, y: 99, r: 8 },
  { x: 218, y: 115, r: 9 },
  { x: 237, y: 134, r: 10 },
  { x: 254, y: 157, r: 13 },
  { x: 269, y: 190, r: 17 },
  { x: 274, y: 231, r: 19 },
  { x: 278, y: 275, r: 21 },
  { x: 280, y: 320, r: 19 },
  { x: 272, y: 361, r: 16 },
  { x: 256, y: 394, r: 13 },
  { x: 239, y: 421, r: 10 },
  { x: 222, y: 441, r: 9 },
  { x: 205, y: 457, r: 8 },
  { x: 189, y: 470, r: 7 },
];

/** A code-drawn vector interpretation of the supplied medical emblem. */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  title = 'الشعار الطبي',
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="brand-logo__arcs" stroke="#D1D4DA" strokeWidth="18" strokeLinecap="round">
      <path
        className="brand-logo__arc brand-logo__arc--left"
        pathLength="1"
        d="M142 45C69 83 28 151 25 234C20 326 62 407 137 448C158 460 179 469 204 476"
      />
      <path
        className="brand-logo__arc brand-logo__arc--top"
        pathLength="1"
        d="M211 25C285 10 371 29 434 75C445 83 455 91 464 100"
      />
      <path
        className="brand-logo__arc brand-logo__arc--bottom"
        pathLength="1"
        d="M282 474C360 470 424 440 468 390C476 381 482 373 488 365"
      />
    </g>

    <path
      className="brand-logo__figure"
      fill="#0750B5"
      d="M302 83C291 81 284 90 287 101C290 112 306 124 322 137C307 132 293 122 279 110C263 97 250 84 237 72C229 64 226 56 230 45C218 44 212 51 214 60C195 48 177 39 151 34C164 47 181 58 199 69C225 86 245 103 262 120C282 141 299 164 316 188C331 209 345 225 351 241C357 258 347 276 345 296C342 316 350 335 346 353C341 376 324 394 307 414C289 436 267 455 255 470C245 483 251 496 269 506C260 489 269 476 281 462C301 439 330 414 348 393C365 373 368 350 365 327C362 305 359 286 373 260C385 239 385 220 374 202C363 184 347 169 330 155C338 146 350 139 350 129C350 118 342 112 330 117C317 122 309 116 300 105C293 97 297 90 310 94C307 88 305 85 302 83Z"
    />

    <g className="brand-logo__nodes" fill="#0750B5">
      {nodes.map((node, index) => (
        <circle
          className="brand-logo__node"
          key={`${node.x}-${node.y}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          style={{ animationDelay: `${760 + index * 62}ms` }}
        />
      ))}
    </g>
  </svg>
);
