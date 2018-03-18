import React from 'react';
import PropTypes from 'prop-types';
import Guest from './guest.js'




const GuestsList = props =>

<ul>
    {

     props.guests.map((guest, index) =>
     <Guest guest={guest.name}/>
 )
}


</ul>;

GuestsList.propTypes = {
    guests: PropTypes.array.isRequired

}

export default GuestsList
