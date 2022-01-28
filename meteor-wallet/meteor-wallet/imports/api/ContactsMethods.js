import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  insertContact({ name, email, imageUrl }) {
    // console.log({ name, email, imageUrl });
    if (!name) {
      throw new Meteor.Error("Name cant be empty");
    }
    return ContactsCollection.insert({ name, email, imageUrl });
  },
});
