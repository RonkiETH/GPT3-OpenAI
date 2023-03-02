import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

let text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam, perferendis cumque consectetur, suscipit quam quaerat dignissimos ipsam necessitatibus, sit in commodi temporibus unde dolores! Exercitationem odio ut debitis similique."
let text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam, perferendis cumque consectetur, suscipit quam."
let text3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam, perferendis cumque consectetur, suscipit quam."
let text4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam, perferendis cumque consectetur, suscipit quam."

const WhatGPT3 = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <div className="gpt3__whatgpt3-container">
                <Feature title="What is GPT-3" text={text1} />
            </div>
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Chatbots" text={text2} />
            <Feature title="Knowledgebase" text={text3} />
            <Feature title="Education" text={text4} />
        </div>
    </div>
);

export default WhatGPT3;

