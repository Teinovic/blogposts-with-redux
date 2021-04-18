import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

function UserHeader(props) {
    useEffect(() => {
        props.fetchUser(props.userId)
    }, []) 
    
    const user = props.users.find( (user) => user.id === props.userId )

    if (!user) {
        return null
    }

    return (
        <div classname="header">{user.name}</div>
    )
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)