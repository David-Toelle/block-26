/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import styles from "./SelectedContact.module.css";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = React.useState({});

  function handler() {
    setSelectedContactId(null);
  }

  React.useEffect(() => {
    async function getSelectedContact() {
      try {
        const response = await axios.get(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        setContact(response.data);
      } catch (error) {
        console.log("error getting API data", error);
      }
    }
    getSelectedContact();
  }, []);

  return (
    <>
      <UserProfile
        contact={contact}
        setSelectedContactId={setSelectedContactId}
      />
     
    </>
  );
}
const UserProfile = ({ contact, setSelectedContactId }) => {
  function handler() {
    setSelectedContactId(null);
  }
  return (
    <div className={styles.UserProfile}>
      <h1>User Profile</h1>
      <div className="user-info">
        <h2>{contact.name}</h2>
        <p>
          <strong>Username:</strong> {contact.username}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`http://${contact.website}`}
            target="_blank"
            rel="no opener no referrer"
          >
            {contact.website}
          </a>
        </p>
      </div>
      <div className={styles.address}>
        <h3>Address</h3>
        <p>
          {contact?.address?.street}, {contact?.address?.suite}
        </p>
        <p>
          {contact?.address?.city}, {contact?.address?.zipcode}
        </p>
        <p>
          <strong>Geo:</strong> Lat: {contact?.address?.geo.lat}, Lng:{" "}
          {contact?.address?.geo.lng}
        </p>
      </div>
      <div className="company">
        <h3>Company</h3>
        <p>
          <strong>Name:</strong> {contact?.company?.name}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {contact?.company?.catchPhrase}
        </p>
        <p>
          <strong>BS:</strong> {contact?.company?.bs}
        </p>
      </div>
      <button className={styles.backbtn} onClick={handler}>
        Back to list
      </button>
    </div>
  );
};
