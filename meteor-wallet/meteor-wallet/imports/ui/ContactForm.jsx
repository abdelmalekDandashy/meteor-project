import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { Meteor } from "meteor/meteor";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export const ContactForm = () => {
  const [name, setName] = React.useState(""); // Formik
  const [email, setEmail] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [error, setError] = React.useState();

  const saveContact = () => {
    Meteor.call("insertContact", { name, email, imageUrl }, (errorResponse) => {
      if (errorResponse) {
        setError(errorResponse.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      } else {
        setName("");
        setEmail("");
        setImageUrl("");
        setError("");
      }
    });
  };

  return (
    <form className="mt-6">
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="px-2 py-3 text-right">
        <Button variant="contained" onClick={saveContact}>
          Save Contact
        </Button>
      </div>
    </form>
  );
};
