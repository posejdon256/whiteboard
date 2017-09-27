import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';

export default class Controls extends Component{
  update(){
    this.props.handler(
      ReactDOM.findDOMNode(this.refs.sizeInput).value,
      ReactDOM.findDOMNode(this.refs.colorInput).value,
      ReactDOM.findDOMNode(this.refs.checkboxMode).checked
    );
  }
  render(){
    return(
      <div>
        <div>
          <label htmlFor="checkboxMode"><input type="checkbox" ref="checkboxMode" onChange={() => this.update()}/> Tryb rysowania </label>
          <label>Kolor: <input ref="colorInput" type="color" onChange={() => this.update()} /></label>
          <input ref="sizeInput" type="range" min="1" max="100" onChange={() => this.update()} />
          <span>{this.props.size} px</span>
        </div>
      </div>
    );
  }
}
