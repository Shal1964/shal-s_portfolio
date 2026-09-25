import { motion, useReducedMotion } from "framer-motion";

type DoodleVariant = "sun" | "flower" | "star" | "swirl";

type DoodleProps = {
  variant: DoodleVariant;
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
};

function Doodle({ variant, className = "", color = "#000097", size = 36, delay = 0 }: DoodleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {variant === "sun" && (
        <g stroke={color} strokeWidth="2" strokeLinecap="round" fill="none">
          <circle cx="20" cy="20" r="7" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 8;
            return (
              <line
                key={i}
                x1={20 + Math.cos(a) * 11}
                y1={20 + Math.sin(a) * 11}
                x2={20 + Math.cos(a) * 16}
                y2={20 + Math.sin(a) * 16}
              />
            );
          })}
        </g>
      )}

      {variant === "flower" && (
        <g fill={color} opacity="0.85">
          {Array.from({ length: 5 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 5;
            const cx = 20 + Math.cos(a) * 8;
            const cy = 20 + Math.sin(a) * 8;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="6"
                ry="9"
                transform={`rotate(${(a * 180) / Math.PI} ${cx} ${cy})`}
              />
            );
          })}
          <circle cx="20" cy="20" r="4" fill="#FFE066" />
        </g>
      )}

      {variant === "star" && (
        <path
          d="M20 4 L23.5 15.8 L36 16 L26 23.6 L29.7 35.6 L20 28.4 L10.3 35.6 L14 23.6 L4 16 L16.5 15.8 Z"
          fill={color}
          opacity="0.85"
        />
      )}

      {variant === "swirl" && (
        <path
          d="M6 20 C6 10 16 6 22 10 C30 15 26 26 18 24 C12 22.5 14 14 20 15"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
        />
      )}
    </motion.svg>
  );
}

export default Doodle;
