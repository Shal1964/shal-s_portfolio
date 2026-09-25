import "./Cloud.css";

type CloudProps = {
  width: string;
  top: string;
  opacity?: number;
  duration: number;
  delay?: number;
  hideOnMobile?: boolean;
};

function Cloud({ width, top, opacity = 0.95, duration, delay = 0, hideOnMobile = false }: CloudProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      aria-hidden="true"
      className={`cloud ${hideOnMobile ? "cloud--hide-mobile" : ""}`}
      style={{
        width,
        top,
        opacity,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <g fill="#FFFFFF">
        <ellipse cx="150" cy="260" rx="110" ry="90" />
        <ellipse cx="260" cy="150" rx="130" ry="120" />
        <ellipse cx="380" cy="190" rx="110" ry="100" />
        <ellipse cx="480" cy="260" rx="90" ry="80" />
        <ellipse cx="300" cy="280" rx="220" ry="100" />
      </g>
    </svg>
  );
}

export default Cloud;
