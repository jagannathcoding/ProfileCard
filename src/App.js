import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <UserCard user={user} />
    </div>
  );
}

export default App;
