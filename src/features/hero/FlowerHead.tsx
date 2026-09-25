type FlowerHeadProps = {
  size: string;
  petalColor: string;
};

function FlowerHead({ size, petalColor }: FlowerHeadProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      style={{ width: size, aspectRatio: "1 / 1", display: "block" }}
    >
      <g fill={petalColor}>
        <circle cx="50" cy="28" r="17" />
        <circle cx="72" cy="42" r="17" />
        <circle cx="63" cy="68" r="17" />
        <circle cx="37" cy="68" r="17" />
        <circle cx="28" cy="42" r="17" />
      </g>
      <circle cx="50" cy="48" r="13" fill="#FBEFC8" />
    </svg>
  );
}

export default FlowerHead;
