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
      isConfirmed={guest.inConfirmed}
      ToggleConfirmed={() => props.toogleConfirmationAt(index)}


         />
 )
}


</ul>;

GuestsList.propTypes = {
    guests: PropTypes.array.isRequired,
    toogleConfirmationAt: PropTypes.func.isRequired



}

export default GuestsList
