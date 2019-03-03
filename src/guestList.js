import React from 'react';
import PropTypes from 'prop-types';
import Guest from './guest.js'




const GuestsList = props =>

<ul>
    {

     props.guests.map((guest, index) =>
     <Guest
      key = {index}
      name={guest.name}
      isEditing={guest.toggleEditing}

         />
 )
}


</ul>;

GuestsList.propTypes = {
    guests: PropTypes.array.isRequired
    toggleEditing: PropTypes.bool.isRequired

}

export default GuestsList
