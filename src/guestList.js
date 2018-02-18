import React from 'react';
import PropTypes from 'prop-types';
import Guest from './guest.js'

const GuestList = props =>

<ul>
    { props.guests.map((guest, index) =>
    <Guest key={index} isConfirmed={guest.isConfirmed} name={guest.name} />
    )}
</ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired
}

export default GuestList
