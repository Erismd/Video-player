import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  
    handleClick(e){
    const text = e.target.value;
    this.props.chooseVideo(text);
  }
  
    
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="Run" /> Run
        <input type="radio" name="src" value="Slow" /> Slow
        <input type="radio" name="src" value="Aww" /> Aww
        <input type="radio" name="src" value="Eek" /> Eek
      </form>
    );
  }
}