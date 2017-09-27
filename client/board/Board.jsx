import React, {Component, PropTypes} from 'react'
import {fabric} from 'fabric';
import Objects from '../../api/objects.js';
import {Random} from 'meteor/random';

export default class Board extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentWillReceiveProps(nextProps){
    this.state.canvas.isDrawingMode = nextProps.mode;
    this.state.canvas.freeDrawingBrush.color = nextProps.color;
    this.state.canvas.freeDrawingBrush.width = nextProps.size;
  }
  componentDidMount(){
    this.state.canvas = new fabric.Canvas('whiteboard', {
      selection: false,
      renderOnAddOrRemove: true
    });
    let canvas = this.state.canvas;
    Objects.find({}).observeChanges({
        added: function (id, object) {
            fabric.util.enlivenObjects([object], function ([object]) {
                object._id = id;
                canvas.add(object);
            });
        },
        changed: function (id, changed) {
            var object = canvas.getObjectById(id);
            object.set(changed);
            canvas.renderAll();
        },
        removed: function () {
            canvas.clear()
        }
    });
    this.state.canvas.on('object:added', function(options) {
      let _object = options.target;
      if(_object._id)
        return;
      _object._id = Random.id();
      Objects.insert(_object.toObject());
    });
  }
  render(){
    return(<canvas width="500px" height="500px" id="whiteboard" />);
  }
}
