import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import GuestsList from './guestList'




class App extends Component {

    state = {
        guests: [{
            name: 'teasure',
            inConfirmed: false,
            isEditing: false
        },
            {
            name: 'jorge ',
            inConfirmed: true,
            isEditing: false
        },
            {
            name: 'Armando Casas',
            inConfirmed: false,
            isEditing: false
            }
        ]
    }


   ToggleConfirmedAt = indexToChange =>
       this.setState({ guests: this.state.guests.map((guest , index) =>{
           if(indexToChange === index ) {
               return{
                   ...guest,
                   inConfirmed :!guest.inConfirmed
               }
           }
           return guest ;
       } )
   });



///la siguiente funcion nos demuestra como dividir una array de objetos y dividirlos en peque;as trozos con propiedades modificables

   //  isEditing = () => this.setState.guests.map((isTheSame , index ) =>
   //  if(isTheSame === index) {
   //  guests: this.state.guests (this.state.guest.isConfirmed )
   //
   //  }
   //
   // )




    getTotalInvited = () => this.state.guests.length ;

    //getAttendedguests = () => ()
    // getUnconfirmated = () => ()
   // PrincipalGUests = index =>
   //    this.setState({
   //         guests: this.state.guests.map((guest , index)=>
   //          ...guest,
   //          isConfirmed: this.state.!isConfirmed;
   //
   //     )
   // });










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
                <GuestsList
                 guests={this.state.guests}
                 toogleConfirmationAt= {this.ToggleConfirmedAt}



              />


            </div>
        </div>);
    }

}



export default App;
