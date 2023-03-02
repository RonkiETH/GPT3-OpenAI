import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';



const featuresData = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque natus magni consequuntur laudantium distinctio provident suscipit.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque natus magni consequuntur laudantium distinctio provident suscipit.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque natus magni consequuntur laudantium distinctio provident suscipit.',
  },
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque natus magni consequuntur laudantium distinctio provident suscipit.',
  },
];

const Features = () => {
  return (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The future is now and you just need to realize it. Step into future today & make it happen.
      </h1>
      <p>Request early access to get started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature 
        title={item.title} 
        text={item.text} 
        key={item.title + index}
        />
      ))}
    </div>
  </div>
);
}
export default Features;

