import React, { act } from "react"
import { clsx } from "clsx"
import './slideshow.css'

export default function Slideshow(props){
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
                className={clsx("slideshow-slide")}
                src={obj.img} 
                alt="" 
            />
        )
    });

    //get ref of the container for the slides
    const slideContainer = React.useRef(null);

    const windowSize = 3;

    //functions that move slides left or right
    function slideRight(){
        setActiveIndex(prevActiveIndex => {
            return prevActiveIndex < props.slides.length-windowSize ? prevActiveIndex + 1 : 0;
        });
    }

    function slideLeft(){
        setActiveIndex(prevActiveIndex => {
            return prevActiveIndex > 0 ? prevActiveIndex - 1 : props.slides.length-windowSize;
        });
    }

    if(slideContainer.current != null && slideRefs[0].current != null){
        let slideWidth = slideRefs[0].current.clientWidth
        let style = slideRefs[0].current.currentStyle || window.getComputedStyle(slideRefs[0].current);
        let margin = parseInt(style.marginRight);
        slideContainer.current.scroll({top: 0, left: activeIndex * (slideWidth + (margin * 2)), behavior: "smooth"});
    }
    console.log(activeIndex)

    return(
        <div className="slideshow">
            <button onClick={slideLeft} className="slideshow-button">
                <span className="material-icons">
                    arrow_back_ios_new
                </span>
            </button>
            <div className="slideshow-slide-container" ref={slideContainer}>
                {imageBlocks}
            </div>
            <button onClick={slideRight} className="slideshow-button">
                <span className="material-icons">
                    arrow_forward_ios
                </span>
            </button>
        </div>
    )
}