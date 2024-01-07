import React from 'react'
import NavigateButton from './navigateButton'


function PublicHome() {
    return (
        <div>
            Public
            <NavigateButton to="/login" text="Login" />
        </div>
    )
}

export default PublicHome