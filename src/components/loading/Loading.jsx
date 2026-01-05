import assets from "../../assets.json"
import './loading.css'
import clsx from "clsx"

export default function Loading(props){


    let loadingClasses = clsx("loading-screen", !props.enabled && "loading-fade");
    
    //when loading screen is shown stop scroll on body
    let body = document.getElementsByTagName("body")[0];
    if(props.enabled){
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }

    return (
        <>
            <div className={loadingClasses}>
                <img src={assets["Logo"].img} alt={assets["Logo"].alt} />
            </div>
        </>
    )
}