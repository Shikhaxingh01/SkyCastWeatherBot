import React, { useEffect, useState } from "react";
import axios from "axios";
import './UserList.css'; // Make sure to import the CSS file

const API_URL = "http://localhost:5000/users";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(API_URL)
      .then((response) => {
        setUsers(response.data);
        console.log("Res : ", response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleDelete = (chatId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`${API_URL}/${chatId}`)
        .then(() => {
          alert("User deleted successfully!");
          fetchUsers();
        })
        .catch((error) => console.error("Error deleting user:", error));
    }
  };

  const toggleSubscription = (chatId, currentStatus) => {
    axios.patch(`${API_URL}/${chatId}`, { subscribed: !currentStatus })
      .then(() => {
        alert("Subscription status updated!");
        fetchUsers();
      })
      .catch((error) => console.error("Error updating subscription:", error));
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Chat ID</th>
            <th>Username</th>
            <th>Created At</th>
            <th>Subscribed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.chatId}>
                <td>{user.chatId}</td>
                <td>{user.username || "N/A"}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>
                <td>{user.subscribed ? "Yes" : "No"}</td>
                <td>
                  <button
                    className={`action-btn ${user.subscribed ? "unsubscribe-btn" : "subscribe-btn"}`}
                    onClick={() => toggleSubscription(user.chatId, user.subscribed)}
                  >
                    {user.subscribed ? "Unsubscribe" : "Subscribe"}
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(user.chatId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
