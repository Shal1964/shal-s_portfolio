import grass from "../../assets/Background-Grass.png";

function HeroBackground(){
    return(
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 [overflow:clip]" style={{ bottom: "-100px" }}>
            <img
                src={grass}
                alt=""
                className="absolute bottom-0 left-0 w-full object-cover object-bottom"
                style={{ height: "130%" }}
            />
        </div>
    )
}

export default HeroBackground;