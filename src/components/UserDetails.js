import { useParams } from "react-router-dom";

function UserDetails() {
  const {userId} = useParams();
  return (
      <div
      style={{marginTop:"40px",fontSize:"20pt"}}
      >
          Details about user {userId}
      </div>
  );
}

export default UserDetails;