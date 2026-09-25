type SparkleProps = {
  size?: number;
  className?: string;
};

function Sparkle({ size = 12, className = "" }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="#FDE68A" />
    </svg>
  );
}

export default Sparkle;
