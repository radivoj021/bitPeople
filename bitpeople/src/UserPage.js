import React from 'react'
import UserList from './UserList'
import { FetchUser } from './UserService'

class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    starter(event) {                                 /* funkciju starter pozivamo na klik button-a  */

        FetchUser(event)                              /* pozivamo fetchUser()  */
            .then(korisnici => {                     /* pozivamo then metodu od promisa koji nam vraca fetchUser funkcija iz UserService */

                this.setState({ users: korisnici })   /* update-ujemo state gde mi u niz(users) stavljamo  objkete koje smo dobili od fetchUser funkcije koja ih je dobila u UserService.js */
            })
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={() => this.starter()}>Start</button>
                    <UserList users={this.state.users} />
                </p>
            </div>
        )
    }
}


export default UserPage