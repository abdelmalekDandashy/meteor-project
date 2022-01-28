import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// Meteor.methods({
//   insertContact({ name, email, imageUrl }) {
//       check(name, String),
//       check(email, String),
//       check(imageUrl,String),

//     if(!name) {
//       throw new Meteor.Error("Name cant be empty");
//     }
//     return ContactsCollection.insert({ name, email, imageUrl });
//   },
//   deleteContact({ id }) {
//     ContactsCollection.remove({ _id: id });
//   },
// });

Meteor.methods({
  insertContact({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    if (!name) {
      throw new Meteor.Error("Name is required.");
    }
    return ContactsCollection.insert({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
  },
  deleteContact({ _id }) {
    // check(contactId, String);
    ContactsCollection.remove(_id);
  },
});
