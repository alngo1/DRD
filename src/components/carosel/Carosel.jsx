import React, { act } from "react"
import { clsx } from "clsx"
import './carosel.css'

export default function Carosel(props){
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [slideRefs, setSlideRefs] = React.useState([]);
    
    //create the array of slideRefs based on props.length
    React.useEffect(() => {
        setSlideRefs(prevSlideRefs => {
            return Array(props.slides.length).fill().map((_, index) => prevSlideRefs[index] || React.createRef());
        })
    }, [props.slides.length])

    //create img blocks connected to slideRefs
    const imageBlocks = props.slides.map((obj, index) => {
        return (
            <img
                ref={slideRefs[index]}
                key={index}
                className={clsx("slide")}
                src={obj.img} 
                alt="" 
            />
        )
    });

    //get ref of the container for the slides
    const slideContainer = React.useRef(null);

    //functions that move slides left or right
    function slideRight(){
        setActiveIndex(prevActiveIndex => {
            return prevActiveIndex < props.slides.length-1 ? prevActiveIndex + 1 : 0;
        });
    }

    function slideLeft(){
        setActiveIndex(prevActiveIndex => {
            return prevActiveIndex > 0 ? prevActiveIndex - 1 : props.slides.length-1;
        });
    }

    //before first render everything is null
    if(slideContainer.current != null && slideRefs[0].current != null){
        slideContainer.current.scroll({top: 0, left: activeIndex * slideRefs[0].current.scrollWidth, behavior: "smooth"});
    }
    
    return(
        <div className="carosel">
            <button onClick={slideLeft} className="carosel-button button-left">
                <span className="material-icons">
                    arrow_back_ios_new
                </span>
            </button>
            <div className="slide-container" ref={slideContainer}>
                {imageBlocks}
            </div>
            <button onClick={slideRight} className="carosel-button button-right">
                <span className="material-icons">
                    arrow_forward_ios
                </span>
            </button>
        </div>
    )
}