import React from 'react'

const UserListItem = (props) => {
    return (
        <li className="collection-item avatar" >
            <img src={props.user.image} alt="" className="circle" />        {/* prolazimo kroz propse, tj pristupamo objektima koje smo dobil iz niza userItems iz userList-a */}
            <span className="title">{props.user.name}</span>
            <p> <i class="tiny material-icons">email</i> <br />
                <i class="tiny material-icons">cake</i> {props.user.dob}
            </p>
        </li>
    )
}

export default UserListItem