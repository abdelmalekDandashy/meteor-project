import { ContactsCollection } from "../../ContactsCollection";
import { Meteor } from "meteor/meteor";

// if (Meteor.isServer) {
// }
Meteor.publish("allContacts", function publishContacts() {
  return ContactsCollection.find();
});
