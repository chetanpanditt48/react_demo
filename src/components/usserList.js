// src/components/UserList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import UserCards from "./UserCards";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);
  
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const handleLoadUsers = () => {
    console.log('Loading users manually...');
    dispatch(fetchUsers());
    setHasLoadedOnce(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light border rounded">
        <div>
          <h2 className="mb-1 text-dark">
            Users {hasLoadedOnce && `(${users.length})`}
          </h2>
        </div>
        
        <div>
          <button 
            onClick={handleLoadUsers}
            disabled={loading}
            className={`btn ${loading ? "btn-secondary" : "btn-primary"} shadow-sm`}
          >
            {loading ? "Loading..." : "📥 Load Users"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="alert alert-info text-center mb-4">
          <p className="mb-0">Loading users...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center mb-4">
          <p className="mb-2">Error: {error}</p>
          <button onClick={handleLoadUsers} className="btn btn-danger btn-sm">
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && !hasLoadedOnce && (
        <div className="text-center py-5">
          <div className="mb-4">
            <i className="fas fa-users fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">No Users Loaded</h4>
            <p className="text-muted">Click the "Load Users" button to fetch and display users.</p>
          </div>
        </div>
      )}

      {!loading && !error && hasLoadedOnce && (
        <div>
          {users.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">No users found.</p>
            </div>
          ) : (
            <div>
              {users.map(user => (
                <UserCards key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default UserList;