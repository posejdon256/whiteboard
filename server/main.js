import { Meteor } from 'meteor/meteor';
import Objects from '../api/objects.js'

Meteor.publish("Objects", function(argument){
  return Objects.find();
});
