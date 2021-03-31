import React from 'react';

const Alert = ({alertText}) => {
    return (
        <div className="alert alert-warning" role={'alert'}>
            { alertText }
        </div>
    )
}

export default Alert;