import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Teams = new Mongo.Collection('teams');

// if(Teams.find({}).fetch().length === 0)
// {
//   //console.log(rand);
//   Teams.insert({"name": "foo"});
// }

if(Meteor.isServer)
{
  Meteor.publish('teams', () => {
    //console.log(Teams.find({}));
    return Teams.find({});
  });
}

