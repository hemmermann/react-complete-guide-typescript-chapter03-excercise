import React from 'react'
import './UserOutputStyle.css'
type Props = {
    userName?: string
}

const userOutput = ({userName}: Props) => {
    return(
        <div className="UserOutput">
            <p>Username: {userName}</p>
            <p>Some random text</p>
        </div>
    )
}

export default userOutput;