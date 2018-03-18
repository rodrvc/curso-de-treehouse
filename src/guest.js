import React from 'react';
import PropTypes from 'prop-types';


const Guest = props =>

  <li key={index}>
      <span >{guest.name}</span>
      <label>
          <input type="checkbox"/>
          Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
  </li>

  Guest.propTypes = {
      name: PropTypes.array.isRequired
  }

  export default Guest
