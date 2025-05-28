import { useState } from "react";

const UserCards = ({ user }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  
  const isSelected = selectedUserId === user.id;

  const handleUserSelect = () => {
    setSelectedUserId(isSelected ? null : user.id);
  };

  return (
    <div
      onClick={handleUserSelect}
      className={`card mb-3 ${isSelected ? "border-info bg-info bg-opacity-10" : ""} cursor-pointer`}
      style={{ cursor: "pointer" }}
    >
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        
        {isSelected && (
          <div className="mt-3">
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            {user.address && (
              <p>
                <strong>Address:</strong> {user.address.street}, {user.address.city}
              </p>
            )}
            {user.company && (
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCards;