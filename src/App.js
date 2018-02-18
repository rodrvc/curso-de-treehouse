import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import GuestList from './guestList.js'


class App extends Component {

    state = {
        guests: [{
            name: 'teasure',
            inConfirmed: false
        },
            {
            name: 'jorge ',
            inConfirmed: true
        },
            {
            name: 'Armando Casas',
            inConfirmed: true
            }
        ]
    }

    ToggleConfirmationAt = indexOfguest =>
        this.setState( this.state.guests.map((guest , index) => {
            if(index === indexOfguest){
                return {
                ...guest,
                inConfirmed: !guest.inConfirmed
                }
            }
               return guest;
        })
    );


    getTotalInvited = () => this.state.guests.length ;

    //getAttendedguests = () => ()
    // getUnconfirmated = () => ()









    render() {
        return (<div className="App">
            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <form>
                    <input type="text" value="Safia" placeholder="Invite Someone"/>
                    <button type="submit" name="submit" value="submit">Submit</button>
                </form>
            </header>
            <div className="main">
                <div>
                    <h2>Invitees</h2>
                    <label>
                        <input type="checkbox"/>
                        Hide those who haven't responded
                    </label>
                </div>
                <table className="counter">
                    <tbody>
                        <tr>
                            <td>Attending:</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Unconfirmed:</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
                <GuestList guests={this.state.guests} />
            </div>
        </div>);
    }

}



export default App;
