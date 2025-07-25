import React from 'react'

const Alert = ({ alerts }) => {
    const alertStyle = {
        position: 'fixed',
        top: '40vh',
        left: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        alerts && <div className='container w-25 ' style={alertStyle}>
            <div className={`alert alert-${alerts.type} alert-dismissible fade show active  h-25 `} role="alert" >
                <strong>{alerts.message}</strong> 
            </div>
        </div>
    )
}

export default Alert
