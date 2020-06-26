import React, { Component } from "react";
import learnSymbol from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "#FFF",
    };
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor,
    });
  };
  //Cell only needs to know the currently selected color, so I can pass to every cell returned by this func.
  genRow = (vals) =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    console.log(this.state)
    return (
      <div id="app">
        {/* Passing my setSekected color method to colorselector */}
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: learnSymbol,
};
