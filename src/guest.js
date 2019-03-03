import React from 'react';
import PropTypes from 'prop-types';


const Guest = props =>

  <li>
      <span >{props.name}</span>
      <label>
          <input type="checkbox"/>
          Confirmed
      </label>
      <button onClinck={e => props.isEditing} >edit</button>
      <button>remove</button>
  </li>

  Guest.propTypes = {
      name: PropTypes.string.isRequired,
      isEditing: PropTypes.bool.isRequired

  }

  export default Guest
