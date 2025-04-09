export default [
    {
        id: 1,
        question: ["Is this ", "rowing/crew?"],
        spanIndex: 1,
        answer: <div className="answer">
                    <p className="body-text-two-font">Nope, we paddle in dragon boat!</p>
                    <p><span>Paddling (dragonboat)</span></p>
                    <ul>
                        <li>Use Paddles</li>
                        <li>Back + core</li>
                        <li>Paddle not attatched to boat</li>
                        <li>2 people per row</li>
                        <li>20 people per boat</li>
                    </ul>
                    <p><span>Rowing (crew)</span></p>
                    <ul>
                        <li>Use Oars</li>
                        <li>Legs + core</li>
                        <li>Oar attatched to boat</li>
                        <li>One people per row</li>
                        <li>1 to 8 people per boat</li>
                    </ul>
                </div>,
        expanded: false
    },
    {
        id: 2,
        question: ["Is ", "equipment", " provided?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>Yes</span>, we provide paddles and personal flotation devices (PFDs) at every practice.</p>
            <p>Be sure to fill out our “<strong>DRD Paddler Practice Information</strong>” form so we can plan equipment accordingly.</p>
            <button className="secondary-button">Paddler Info Form</button>
        </div>,
        expanded: false
    },
    {
        id: 3,
        question: ["Do I need ", "experience", " to join?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>No</span>, we accept all levels of experience. If you have no experience with dragon boat, we’ll teach you the basics at your first practice!</p>
        </div>,
        expanded: false
    },
    {
        id: 4,
        question: ["Is ", "carpool", " provided?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>Yes</span>, we provide carpool to every practice, and some socials. If you help with carpool, you will be reimbursed for gas money (and we&#39;ll be infinitely grateful &lt;3)."</p>
        </div>,
        expanded: false
    },
    {
        id: 5,
        question: ["Are practices and other team events ", "mandatory?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>No</span>, you can come to as many or as little events as you want/are able to. No pressure!</p>
        </div>,
        expanded: false
    },
    {
        id: 6,
        question: ["What do I ", "bring/wear", " to practice?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>What to wear</span></p>
            <ul>
                <li>Athletic attire</li>
                <li>Sandals</li>
                <li>Hat</li>
            </ul>
            <p><span>What to bring</span></p>
            <ul>
                <li>Water</li>
                <li>Sunblock</li>
                <li>Towel</li>
                <li>Change of clothes</li>
                <li>Snacks</li>
                <li>Money</li>
            </ul>
        </div>,
        expanded: false
    },
    {
        id: 7,
        question: ["Do I need to know how to ", "swim?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>No</span>, it is very rare for us to be put in a situation where we would need to know how to swim. We also wear personal flotation devices (PFDs) for extra safety!</p>
            <p>P.S. Lots of our members don’t know how to swim lol.</p>
        </div>,
        expanded: false
    },
    {
        id: 9,
        question: ["Can I ", "try out", " dragon boat without paying?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>Yes</span>, anyone can try out dragonboat for free for the first 30 days they join!</p>
        </div>,
        expanded: false
    },
    {
        id: 10,
        question: ["Are there ", "fees", " to join?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>Yes</span>, after your first 30 days of free membership, there are a few fees to pay if you decide to stick with the team!</p>
            <p>Team fees are $15-20 per quarter, and California Dragon Boat Association fees are $80 per year for college students.</p>
            <p><span>Team Fees</span></p>
            <ul>
                <li>Fall Quarter: $20 </li>
                <li>Winter Quarter: $15</li>
                <li>Spring Quarter: $20 </li>
            </ul>
            <p>We split each quarter into separate payment windows to give our members flexibility with when they want to be active.</p>
            <p>Team fees mostly go towards paying drivers back for gas and socials.</p>
            <p><span>California Dragon Boat Association Fees</span></p>
            <p>The California Dragon Boat Association (CDBA) organizes many of the teams and races in Northern California. Being a college team within CDBA, each member must pay $80 per calendar year.</p>
            <button className="secondary-button">Join</button>
            <p>Check out our “Join” page to learn more!</p>
        </div>,
        expanded: false
    },
    {
        id: 11,
        question: ["What do I need to know about dragon boat ", "races?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p>Races are one of the <strong>best parts</strong> of dragonboat! They&#39;re exciting, fun, and you get to spend the entire day with the team showing off your hard work and winning medals! </p>
            <p>We usually participate in <strong>four</strong> races during the school year, and <strong>one</strong> in the summer. Races generally span between 1-2 days and will take the entire day.</p>
            <p><strong>Race fees</strong> are required for each race you attend (separate from team fees), and vary depending on the race.</p>
            <a target="_blank" href="https://www.youtube.com/channel/UCfdURDNouXbfKIrnfXnoQdg" className="secondary-button">DRD Youtube</a>
            <p>Check out our race videos and vlogs here!</p>
        </div>,
        expanded: false
    },
    {
        id: 12,
        question: ["How do I stay ", "up-to-date", " with the team?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p>The best ways to stay up-to-date on everything happening with the team is by joining our <strong>Discord!</strong> Following us on <strong>Instagram</strong> is also a good way to get updates.</p>
            <button className="secondary-button">Join & follow us here!</button>
        </div>,
        expanded: false
    },
    {
        question: ["Do I need to be ", "athletic", " to join?"],
        spanIndex: 1,
        answer: <div className="answer">
            <p><span>No</span>, we accept all levels of athleticism! Don’t be shy to join if you have little experience with exercising, we&#39;ll be sure to train you to meet whatever goals you have.</p>
        </div>,
        expanded: false
    }
]