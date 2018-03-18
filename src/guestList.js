import React from 'react';
import PropTypes from 'prop-types';
import Guest from './guests.js'




const GuestsList = props =>

<ul>
    {

     props.guests.map((guest, index) =>
     <Guest guest={props.guests}/>





 )
}


</ul>;

GuestsList.propTypes = {
    guests: PropTypes.array.isRequired

}

export default GuestsList
