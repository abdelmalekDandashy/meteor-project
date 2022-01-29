import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import Button from "@mui/material/Button";
import { Meteor } from "meteor/meteor";
import {
  useTracker,
  // useSubscribe
} from "meteor/react-meteor-data";

export const ContactList = () => {
  const contacts = useTracker(() => {
    // const isLoading = useSubscribe("allContacts");
    Meteor.subscribe("allContacts");
    return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  });

  const deleteContact = (id) => {
    Meteor.call("deleteContact", { _id: id });
  };

  // const deleteContact = (id) => {
  //   //// ContactsCollection.remove({ _id: id });
  //   Meteor.call("deleteContact", { Number(id) });
  // };
  // if (isLoading) {
  //   return <h1>loading...</h1>;
  // }
  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map((person, personIdx) => (
            <li
              key={personIdx}
              className="py-4 flex items-center justify-between space-x-3"
            >
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {person.name}
                  </p>
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {person.email}
                  </p>
                </div>
              </div>
              <Button
                variant="contained"
                onClick={() => {
                  deleteContact(person._id);
                }}
              >
                Delete Contact
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
