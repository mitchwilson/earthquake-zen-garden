import React from 'react';
import ProfileTemplate from '../templates/ProfileTemplate';

const Profile = (props) => {
  return (
    <div>
      <h2>Profile</h2>
      <div>
        <ProfileTemplate
          avatarImage={ props.avatarImage }
          firstName={ props.firstName }
          lastName={ props.lastName }
          phone={ props.phone }
          email= {props.email }
          bio={ props.bio }
        />
      </div>
    </div>
  )
};

export default Profile;