import { useState } from "react";
import "./App.css";
import ContactList, { dummyContacts } from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  
  return (
    <>
      <ContactList />
    </>
  );
}

export default App;
