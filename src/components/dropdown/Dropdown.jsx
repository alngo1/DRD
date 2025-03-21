import './dropdown.css'
import {clsx} from 'clsx'

export default function Dropdown(props){
    const arrowClasses = clsx("material-icons dropdown-arrow", props.isExpanded && "expand");
    const questionClasses = clsx("question-container", props.isExpanded && "expanded-background-color");
    return(
        <div className="q-and-a-container">
            <button onClick={props.onClick} className={questionClasses}>
                {props.displayNumber && <h2 className="dropdown-number heading-font">{props.id}</h2>}
                <p className="body-text-one-font question">{props.question}</p>
                <span className={arrowClasses}>keyboard_arrow_down</span>
            </button>
            {props.isExpanded && props.answer}
        </div>
    )
}