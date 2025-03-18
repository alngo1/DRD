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
        slideContainer.current.scroll({top: 0, left: activeIndex * slideRefs[0].current.clientWidth, behavior: "smooth"});
    }
    console.log(activeIndex)

    return(
        <div className="slideshow">
            <button onClick={slideLeft} className="button-left">
                <span className="material-icons">
                    arrow_back_ios_new
                </span>
            </button>
            <div className="slide-container" ref={slideContainer}>
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


//how the three display works
/* 
one way: change html to hold three images at a time
- change width and paddings of images
    - css changed the behavior of the slideshow active index
- must change active index functionality to fix
    - one way is to have the active index start and end at spaces different than it is
    - begin at index at 0 and when it gets to slides.length - 3

*/