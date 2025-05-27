import './dropdown.css'
import {clsx} from 'clsx'


/*
Takes in these props:
isExpanded: bool
onClick: function, example:
    - function handleDropdownClick(id){
        setDropdowns(prevDropdowns => {
            return prevDropdowns.map(dropdown => {
                return dropdown.id === id ? {...dropdown, expanded: !dropdown.expanded} : dropdown
            })
        })
      }
displayNumber: bool
id: int
question: string
answer: string
*/
export default function Dropdown(props){
    const arrowClasses = clsx("material-icons dropdown-arrow", props.isExpanded && "expand");
    const questionClasses = clsx("question-container", props.isExpanded && "expanded-background-color");
    return(
        <button onClick={props.onClick} className="q-and-a-container">
            <div className={questionClasses}>
                {props.displayNumber ?
                    <div className="number-question-container">
                        <p className="dropdown-number heading-font">{props.id}</p>
                        <p className="body-text-one-font question">{props.question}</p>
                    </div>
                    :
                    <p className="body-text-one-font question">{props.question}</p>
                }
                <span className={arrowClasses}>keyboard_arrow_down</span>
            </div>
            {props.isExpanded && props.answer}
        </button>
    )
}