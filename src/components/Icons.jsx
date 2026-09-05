import React from 'react';

// 建立輕量專屬向量圖示庫，完全避開外部依賴與 Rollup 構建瓶頸
const createIcon = (svgContent) => ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {svgContent}
  </svg>
);

// 「酒肉朋友」專屬經典品牌徽章 Logo Icon
export const WineMeatBrandLogo = ({ className = "w-10 h-10", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient id="brandLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B1E1E" />
        <stop offset="100%" stopColor="#4A101B" />
      </linearGradient>
      <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D061" />
        <stop offset="50%" stopColor="#C58C36" />
        <stop offset="100%" stopColor="#E5A54B" />
      </linearGradient>
    </defs>

    {/* 圓形金屬雙環底盾 */}
    <circle cx="50" cy="50" r="48" fill="url(#brandLogoGrad)" stroke="url(#goldRing)" strokeWidth="3" />
    <circle cx="50" cy="50" r="44" stroke="#FAF8F5" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />

    {/* 背景交叉餐刀與侍酒開瓶叉 */}
    {/* 刀鋒 */}
    <path d="M 28,72 L 72,28 M 65,24 L 76,35 L 72,39 L 61,28 Z" stroke="url(#goldRing)" strokeWidth="2.2" strokeLinecap="round" />
    {/* 餐叉 */}
    <path d="M 72,72 L 28,28 M 24,24 L 28,32 M 32,28 L 36,36 M 28,28 L 22,34" stroke="url(#goldRing)" strokeWidth="2.2" strokeLinecap="round" />

    {/* 主角：古典水晶紅酒杯 */}
    <path
      d="M 38,32 C 38,48 48,54 50,56 C 52,54 62,48 62,32 L 38,32 Z"
      fill="#FAF8F5"
      stroke="#FAF8F5"
      strokeWidth="1.5"
    />
    {/* 酒液 (紅酒波紋) */}
    <path
      d="M 40,38 C 45,41 55,36 60,38 C 60,46 52,51 50,53 C 48,51 40,46 40,38 Z"
      fill="#8B1E1E"
    />
    {/* 杯梗與底座 */}
    <path d="M 50,56 L 50,74 M 39,74 L 61,74" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round" />

    {/* 星芒裝飾與香氣波紋 */}
    <circle cx="50" cy="24" r="2" fill="url(#goldRing)" />
    <path d="M 45,21 Q 50,17 55,21" stroke="url(#goldRing)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const Compass = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>
);

export const Wine = createIcon(
  <>
    <path d="M8 22h8" />
    <path d="M7 10h10" />
    <path d="M12 15v7" />
    <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
  </>
);

export const Utensils = createIcon(
  <>
    <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
    <path d="M15 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V2" />
    <path d="M6 2v20" />
  </>
);

export const UtensilsCrossed = createIcon(
  <>
    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z" />
    <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
    <path d="m2.1 21.8 6.4-6.3" />
    <path d="m19 5-7 7" />
  </>
);

export const Flame = createIcon(
  <>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </>
);

export const Soup = createIcon(
  <>
    <path d="M4 19h16" />
    <path d="M6 13h12" />
    <path d="M6 13a6 6 0 0 0 12 0" />
    <path d="M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2" />
  </>
);

export const Sparkles = createIcon(
  <>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </>
);

export const Droplets = createIcon(
  <>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </>
);

export const Clock = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>
);

export const HeartPulse = createIcon(
  <>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </>
);

export const Zap = createIcon(
  <>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </>
);

export const Wind = createIcon(
  <>
    <path d="M17.7 7.7A2.5 2.5 0 1 1 20 12H2" />
    <path d="M12.7 17.3A2.5 2.5 0 1 1 15 20H2" />
    <path d="M8.2 4.3A2 2 0 1 1 10 7H2" />
  </>
);

export const Layers = createIcon(
  <>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </>
);

export const Fish = createIcon(
  <>
    <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
    <path d="M18 12v.5" />
    <path d="M16 17.93a11 11 0 0 1-4-2.93" />
    <path d="M7 10.5a9 9 0 0 0 0 3" />
    <path d="M2 16l4.5-4L2 8" />
  </>
);

export const BookOpen = createIcon(
  <>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </>
);

export const HelpCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
);

export const Search = createIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </>
);

export const Check = createIcon(
  <>
    <polyline points="20 6 9 17 4 12" />
  </>
);

export const CheckCircle2 = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </>
);

export const ArrowRight = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>
);

export const ArrowLeft = createIcon(
  <>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </>
);

export const ArrowUp = createIcon(
  <>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </>
);

export const ChevronRight = createIcon(
  <>
    <polyline points="9 18 15 12 9 6" />
  </>
);

export const ChevronDown = createIcon(
  <>
    <polyline points="6 9 12 15 18 9" />
  </>
);

export const ChevronUp = createIcon(
  <>
    <polyline points="18 15 12 9 6 15" />
  </>
);

export const RotateCcw = createIcon(
  <>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </>
);

export const Menu = createIcon(
  <>
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </>
);

export const X = createIcon(
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>
);

export const Info = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </>
);

export const AlertCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </>
);

export const ExternalLink = createIcon(
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>
);

export const Key = createIcon(
  <>
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6" />
    <path d="m15.5 7.5 3 3L22 7l-3-3" />
  </>
);

export const Eye = createIcon(
  <>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </>
);

export const EyeOff = createIcon(
  <>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </>
);

