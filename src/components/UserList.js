// src/components/UserList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import UserCards from "./UserCards";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);
  
  // useState hook for demo purposes
  const [refreshCount, setRefreshCount] = useState(0);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  // useEffect with dependency - triggers when refreshCount changes
  useEffect(() => {
    console.log(`useEffect triggered! Refresh count: ${refreshCount}`);
    dispatch(fetchUsers());
    if (refreshCount > 0) {
      setLastRefreshed(new Date().toLocaleTimeString());
    }
  }, [dispatch, refreshCount]); // Dependencies: dispatch and refreshCount

  // Function to handle refresh button click
  const handleRefresh = () => {
    setRefreshCount(prevCount => prevCount + 1); // This will trigger useEffect
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light border rounded">
        <div>
          <h2 className="mb-1 text-dark">
            Users ({users.length})
          </h2>
          {lastRefreshed && (
            <p className="mb-0 text-muted small">
              Last refreshed: {lastRefreshed}
            </p>
          )}
        </div>
        
        <div className="d-flex align-items-center">
          <div className="text-center me-3">
            <p className="mb-0 small text-muted">Refresh Count</p>
            <p className="mb-0 h4 text-primary fw-bold">{refreshCount}</p>
          </div>
          
          <button 
            onClick={handleRefresh}
            disabled={loading}
            className={`btn ${loading ? "btn-secondary" : "btn-success"} shadow-sm`}
          >
            {loading ? "Refreshing..." : "🔄 Refresh Users"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="alert alert-info text-center mb-4">
          <p className="mb-0">
            Loading users... (useEffect triggered by refreshCount: {refreshCount})
          </p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center mb-4">
          <p className="mb-2">Error: {error}</p>
          <button onClick={handleRefresh} className="btn btn-danger btn-sm">
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && (
        <div>
          {users.length === 0 ? (
            <p className="text-center text-muted">No users found.</p>
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