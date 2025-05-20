import React, { act } from "react"
import { clsx } from "clsx"
import './slideshow.css'

import Carosel from "../carosel/Carosel";

// props:
// slides={list of images}
// slideWidth={size of images}
// sideMargins={space between images}
// windowSize={how many images to show}
export default function Slideshow(props){
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [slideRefs, setSlideRefs] = React.useState([]); //will hold an array of slide refs
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    // useEffect tracks the width of the window
    // then calculate width of the window based on windowWidth
    React.useEffect(() => {
        function changeWindowWidth(){
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", changeWindowWidth);
        return function(){
            console.log("clean up func")
            window.removeEventListener("resize", changeWindowWidth);
        }
    }, [])

    let imageWidth = 0;
    if(windowWidth > 1500){
        imageWidth = props.slideWidth;
    } else if (windowWidth < 1500 && windowWidth > 1100){
        imageWidth = props.slideWidth * 0.75;
    } else if (windowWidth < 1100 && windowWidth > 600){
        imageWidth = props.slideWidth * 0.5;
    } else {
        imageWidth = props.slideWidth * 0.25;
    }
    const slideWidth = imageWidth + (2 * props.sideMargins);
    
    //create the array of slideRefs based on props.length
    React.useEffect(() => {
        setSlideRefs(prevSlideRefs => {
            return Array(props.slides.length).fill().map((_, index) => prevSlideRefs[index] || React.createRef());
        })
    }, [props.slides.length])

    // create img html connected to slideRefs
    // props used: slideWidth, sideMargins
    const imageBlocks = props.slides.map((obj, index) => {
        return (
            <img
                ref={slideRefs[index]}
                key={index}
                className={clsx("slideshow-slide")}
                src={obj.img} 
                alt=""
                width={`${imageWidth}px`}
                style={{margin: `0px ${props.sideMargins}px`}}
            />
        )
    });


    //get ref of the container for the slides
    const slideContainer = React.useRef(null);
    // calculate and set size of entire slideshow
    //     - don't want begining and ending margins in the slideshowWidth calculation
    const calcWidth = props.windowSize * slideWidth;
    if(slideContainer.current != null){
        slideContainer.current.style.width = `${calcWidth}px`;
    }


    //functions that move slides left or right
    function slideRight(){
        setActiveIndex(prevActiveIndex => {
            return prevActiveIndex < props.slides.length-props.windowSize ? prevActiveIndex + 1 : 0;
        });
    }

    function slideLeft(){
        setActiveIndex(prevActiveIndex => {
            return prevActiveIndex > 0 ? prevActiveIndex - 1 : props.slides.length-props.windowSize;
        });
    }

    // code to move slides on rerender based on active index
    if(slideContainer.current != null){
        slideContainer.current.scroll({top: 0, left: activeIndex * slideWidth, behavior: "smooth"});
    }

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