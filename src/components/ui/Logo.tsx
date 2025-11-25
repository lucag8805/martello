'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { circle: 32, text: 'text-lg' },
    md: { circle: 44, text: 'text-xl' },
    lg: { circle: 56, text: 'text-2xl' },
  };

  const { circle, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Circle with "m" */}
      <svg
        width={circle}
        height={circle}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Red Circle */}
        <circle cx="22" cy="22" r="22" fill="#E63329" />
        {/* White "m" letter */}
        <text
          x="22"
          y="29"
          textAnchor="middle"
          fill="white"
          fontSize="24"
          fontWeight="400"
          fontFamily="Georgia, serif"
          style={{ fontStyle: 'italic' }}
        >
          m
        </text>
      </svg>

      {/* Text "martello" */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${text} font-light tracking-wide text-gray-800`}>
            martello
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Immobilienmanagement
          </span>
        </div>
      )}
    </div>
  );
}
