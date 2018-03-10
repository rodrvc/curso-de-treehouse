import React from 'react';
import PropTypes from 'prop-types';



const GuestsList = props =>
<ul>
    {
        props.guests(
    <li>
        <span key={props.guests}>hola</span>
        <label>
            <input type="checkbox"/>
            Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
    </li>
)
}


</ul>;

export default GuestsList
