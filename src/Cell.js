import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    // console.log(this.props)
    return (
      <div className="cell" onMouseOver={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}