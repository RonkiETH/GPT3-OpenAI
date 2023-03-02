import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="Possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request <b>Early Access</b> to get started</h4>
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil laborum cum, iure non dolorum aut omnis repellat, inventore quos est sit itaque, temporibus illo delectus voluptatibus ducimus obcaecati ullam.
                </p>
                <h4>Request <b>Early Access</b> to get started</h4>
            </div>
        </div>
    )
}

export default Possibility