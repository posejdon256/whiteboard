import React, {Component, PropTypes} from 'react'
import Board from '../board/Board.jsx';
import Controls from '../controls/Controls.jsx';

export default class App extends Component{
  constructor(props){
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      color: 'white',
      brushSize: 90,
      drawingMode: false
    };
  }
  updateState(size, color, mode){
    this.setState({
      brushSize: parseInt(size),
      color: color,
      drawingMode: mode
    });
  }
  render(){
    return(
    <div className="main-div">
      <div className="left-bar content-container">
        <Controls  handler={this.updateState} size={this.state.brushSize} color={this.state.color} mode={this.state.drawingMode}/>
      </div>
      <div className="right-table content-container">
        <Board ref="board" size={this.state.brushSize} color={this.state.color} mode={this.state.drawingMode} />
      </div>
    </div>
    );
  }
}
