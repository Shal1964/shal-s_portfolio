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
        <h1 className="text-center text-7xl font-jua text-[#000097] top-4">
          I'm Shally Liusiana
        </h1>
        <p className="text-center text-4xl font-jua text-[#000097]/80 mt-4">
          Computer Science Student @BINUS University
        </p>
      </div>

      <img
        src={character}
        alt="character illustration"
        className="absolute z-10 bottom-32 left-1/2 -translate-x-1/2 w-[260px] sm:w-[340px] lg:w-[450px]"
      />
    </>
  );
}

export default HeroContent;