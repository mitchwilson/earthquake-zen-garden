import React from 'react';
import PropTypes from 'prop-types';
import './profileTemplate.css';
import Avatar from '../../atoms/Avatar';

const ProfileTemplate = (props) => {
  return (
    <div className='profileTemplate'>
      <div className='profileAvatar'>
        <Avatar src={ props.avatarImage }/>
      </div>
      <table>
          <tbody>
          <tr>
            <td className="profileLabel">First name</td>
              <td>{ props.firstName }</td>
            </tr>
            <tr>
              <td className="profileLabel">Last name</td>
              <td>{ props.lastName }</td>
            </tr>
            <tr>
              <td className="profileLabel">Phone</td>
              <td>{ props.phone }</td>
            </tr>
            <tr>
              <td className="profileLabel">Email</td>
              <td>{ props.email }</td>
            </tr>
            <tr>
              <td className="profileLabel">Bio</td>
              <td>{ props.bio }</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

ProfileTemplate.propTypes = {
  avatarImage: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string
}

export default ProfileTemplate;