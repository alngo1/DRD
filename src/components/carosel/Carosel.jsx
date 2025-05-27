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
                alt={obj.alt} 
            />
        )
    });

    //get ref of the container for the slides
    const slideContainer = React.useRef(null);
    const scrollTrack = React.useRef(null);
    const scrollThumb = React.useRef(null);

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
        if(scrollThumb.current != null && scrollTrack.current != null){
            //get the scroll width of the slide container
            //get the current scroll position of slide container
            const maxScrollWidth = slideContainer.current.scrollWidth;
            const currentScrollPos = slideContainer.current.scrollLeft;

            //get teh width of the scroll track
            // curScroll / maxScroll = percentage to scroll between 0 and 1
            // multiply by trackWidth to get number of pxToMove
            const scrollTrackWidth = scrollTrack.current.clientWidth;
            const pxToMove = (currentScrollPos / maxScrollWidth) * scrollTrackWidth;
            scrollThumb.current.style.translate = `${pxToMove}px 0px`;
        }
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
            {/* <div ref={scrollTrack} className="scroll-track">
                <div ref={scrollThumb} className="scroll-thumb"></div>
            </div> */}
        </div>
    )
}