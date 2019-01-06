import React from "react";

const friendList = {
  friends: [
    {
      id: 1,
      name: "Ron",
      detail:
        "He's the greatest Keeper Gryffindor has seen (Weasley is our King!). Also a ginger, but I don't hold that against him."
    },
    {
      id: 2,
      name: "Hermione",
      detail: "She's the best student of our year."
    },
    {
      id: 3,
      name: "That's it"
    }
  ]
};

const Friend = ({ match }) => {
  const arrIndex = Number(match.params.id) - 1;
  if (arrIndex < friendList.friends.length) {
    return (
      <ul>
        <li>My #{friendList.friends[arrIndex].id} friend!</li>
        <li>{friendList.friends[arrIndex].name}</li>
        <li>{friendList.friends[arrIndex].detail}</li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>Friend not found. Classic Slytherin move.</li>
      </ul>
    );
  }
};

export default Friend;
