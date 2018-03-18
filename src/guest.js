import React from 'react';
import PropTypes from 'prop-types';


const Guest = props =>

  <li>
      <span >{props.guest}</span>
      <label>
          <input type="checkbox"/>
          Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
  </li>

  Guest.propTypes = {
      guest: PropTypes.array.isRequired
  }

  export default Guest
