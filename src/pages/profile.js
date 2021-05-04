import React from 'react';
import PropTypes from 'prop-types';
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

Profile.propTypes = {
  avatarImage: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string
}

export default Profile;