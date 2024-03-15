import { useEffect, useState } from "react";
import "../../assets/css/SettingsWindow/PeopleTab.css";

import Search from "../ChatPage/Search";
import ContactCard from "./ContactCard";

export default function PeopleTab({ token }) {
  const [allUsers, setAllUsers] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/users/contacts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((users) => {
        setAllUsers(users);
      });
  }, [token]);
  console.log(
    "all fetched users that are not contacts and not user: ",
    allUsers
  );
  return (
    <div className="people-tab-container">
      <header>
        <Search />
      </header>
      <div className="people-content">
        {allUsers &&
          allUsers.map((user) => (
            <ContactCard key={user._id} user={user} token={token} />
          ))}
      </div>
    </div>
  );
}
