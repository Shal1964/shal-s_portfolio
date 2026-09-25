import Cloud from "./Cloud";

function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Cloud
        width="clamp(90px, 9vw, 130px)"
        top="6%"
        opacity={1}
        duration={42}
        delay={-5}
      />
      <Cloud
        width="clamp(110px, 11vw, 160px)"
        top="14%"
        opacity={0.95}
        duration={55}
        delay={-18}
      />
      <Cloud
        width="clamp(120px, 13vw, 190px)"
        top="24%"
        opacity={0.9}
        duration={68}
        delay={-32}
        hideOnMobile
      />
      <Cloud
        width="clamp(90px, 8vw, 140px)"
        top="34%"
        opacity={0.88}
        duration={50}
        delay={-40}
        hideOnMobile
      />
      <Cloud
        width="clamp(140px, 15vw, 220px)"
        top="44%"
        opacity={0.85}
        duration={80}
        delay={-60}
        hideOnMobile
      />
    </div>
  );
}

export default Clouds;
