const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 500 170"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle with checkmark/X */}
      <g>
        {/* Outer circle */}
        <circle
          cx="85"
          cy="85"
          r="75"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          className="text-foreground"
        />
        
        {/* Checkmark/X design in primary color */}
        <path
          d="M 50 65 L 75 90 L 120 45"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
        <path
          d="M 75 90 L 120 125"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
      </g>

      {/* "Virtua" text in primary color */}
      <text
        x="200"
        y="95"
        fontSize="72"
        fontWeight="500"
        fill="currentColor"
        className="text-primary"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Virtua
      </text>

      {/* "technologies" text in foreground color */}
      <text
        x="200"
        y="145"
        fontSize="48"
        fontWeight="400"
        fill="currentColor"
        className="text-foreground"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        technologies
      </text>
    </svg>
  );
};

export default Logo;
