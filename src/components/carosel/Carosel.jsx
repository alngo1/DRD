import React from "react"
import { clsx } from "clsx"
import './carosel.css'

export default function Carosel(props){
    const [activeIndex, setActiveIndex] = React.useState(0);

    function slideRight(){
        setActiveIndex(prevActiveIndex => {
            return (activeIndex < props.slides.length-1) ? prevActiveIndex + 1 : 0;
        });
    }

    function slideLeft(){
        setActiveIndex(prevActiveIndex => {
            return (activeIndex > 0) ? prevActiveIndex - 1 : props.slides.length-1;
        });
    }

    const imageBlocks = props.slides.map((obj, index) => {
        return (
            <img
                key={index}
                className={clsx("slide", (index == activeIndex) && "active-slide")}
                src={obj.img} 
                alt="" 
            />
        )
    });

    return(
        <div className="carosel">
            <button onClick={slideLeft} className="button-left">
                <span className="material-icons">
                    arrow_back_ios_new
                </span>
            </button>
            <div className="slide-container">
                {imageBlocks}
            </div>
            <button onClick={slideRight} className="button-right">
                <span className="material-icons">
                    arrow_forward_ios
                </span>
            </button>
        </div>
    )
}