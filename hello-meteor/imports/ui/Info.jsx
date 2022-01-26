import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";

export const Info = () => {
  function insertLink({ title, url }) {
    LinksCollection.insert({ title, url, createdAt: new Date() });
  }

  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  return (
    <div>
      <button
        onClick={() => {
          insertLink({
            title: "Do the Tutorial",
            url: "https://www.meteor.com/tutorials/react/creating-an-app",
          });
        }}
      >
        add link
      </button>
      <h2>Learn Meteor!</h2>
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
