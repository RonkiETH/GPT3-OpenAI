import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">GPT-3, the new OpenAI artificial intelligence</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatum corporis eum debitis eligendi eius ipsam vero deserunt dolorem nobis consequatur doloribus praesentium iusto libero accusamus ut! Harum, ratione autem.</p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} alt="people"/>
                <p>1,600 people requested access in the last 24 hours</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai} alt="ai"/>
        </div>
    </div>
);

export default Header;