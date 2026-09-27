import character from "../../assets/hero.png";
import Typewriter from "typewriter-effect";

function HeroContent() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden pt-24">
        <div className="text-center">
          <Typewriter options={{strings: ["Hello!", "Hi!", "Hej!", "Salve!", "Hola!", "Ciao!", 
            "你好!", "こんにちは!"
          ],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: "text-3xl font-jua text-black",
                      cursorClassName: "text-3xl font-jua text-black",

          }}></Typewriter>
        </div>
        <h1
          className="text-center font-jua text-[#000097] top-4"
          style={{ fontSize: "clamp(2rem, 5vw + 1rem, 3.75rem)", lineHeight: 1 }}
        >
          I'm Shally Liusiana
        </h1>
        <p
          className="text-center font-jua text-[#000097]/80 mt-4"
          style={{ fontSize: "clamp(1.25rem, 2.5vw + 0.5rem, 2.25rem)", lineHeight: 1.1 }}
        >
          Computer Science Student @BINUS University
        </p>
      </div>

      <img
        src={character}
        alt="character illustration"
        className="absolute z-10 bottom-32 left-1/2 -translate-x-1/2 w-[200px] sm:w-[260px] lg:w-[340px]"
      />
    </>
  );
}

export default HeroContent;