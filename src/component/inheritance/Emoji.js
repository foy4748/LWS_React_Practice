import React, {Component} from 'react';

class Emoji extends Component {
  addEmoji = (text, emoji) => {
    return `${emoji} ${text} ${emoji}`;
  }
  render(overRide) {
    let text = "I am JavaScript";
    if(overRide) text = overRide;
    return <p>{text}</p>
  }
}

export default Emoji;
