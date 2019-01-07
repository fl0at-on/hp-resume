import React from "react";

const friendList = {
  friends: [
    {
      id: 1,
      name: "Ron"
    },
    {
      id: 2,
      name: "Hermione"
    },
    {
      id: 3,
      name: "That's it."
    }
  ]
};
const AllFriends = () => {
  return friendList.friends.map(friend => {
    return (
      <ul key={friend.id}>
        <li>
          #{friend.id}: {friend.name}
        </li>
      </ul>
    );
  });
};

export default AllFriends;
