import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

// import { Container } from './styles';

function Profile() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        auth.logout();
        navigate('/')
    }
  return <div>
      <span>Welcome {auth.user}</span>
      <button onClick={handleLogout}>Logout</button>
  </div>;
}

export default Profile;