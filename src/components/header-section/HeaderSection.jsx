import './header-section.css'
import {clsx} from 'clsx'

//any styling needed on visual other than img must be placed before it gets passed through props

export default function HeaderSection(props) {
    const classes = clsx(props.headingStyle);

    return (
        <section className="header-section">
            <div className="header-section-text-container">
                <h1 className={classes}>{props.heading}</h1>
                <p className="body-text-two-font">{props.paragraph}</p>
                {props.buttons}
            </div>
            {props.visual}
        </section>
    )
}