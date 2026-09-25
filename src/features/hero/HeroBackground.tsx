import "./HeroBackground.css"
import grass from "../../assets/Background-Grass.png";

function HeroBackground(){
    return(
        <div className="hero-background">
            <img src={grass} alt="" className="hero-background-grass" />
        </div>

    )
}

export default HeroBackground;