import assets from "../../assets.json"
import './loading.css'
import clsx from "clsx"

export default function Loading(props){


    let loadingClasses = clsx("loading-screen", !props.enabled && "loading-fade");
    

    return (
        <>
            <div className={loadingClasses}>
                <img src={assets["Logo"].img} alt={assets["Logo"].alt} />
            </div>
        </>
    )
}