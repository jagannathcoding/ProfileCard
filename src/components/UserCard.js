import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex max-w-lg mx-auto mt-10 p-8 border rounded-xl shadow-2xl bg-gradient-to-r from-indigo-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-full h-full rounded-full border-4 border-indigo-300 shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      <div className="ml-8 flex flex-col justify-center">
        <p className="text-3xl font-semibold text-gray-800 tracking-wide">
          {user.name.first} {user.name.last}
        </p>
        <p className="text-base text-indigo-600 font-semibold mt-1">Gender: {user.gender}</p>
        <p className="text-base text-gray-600 mt-2">Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
