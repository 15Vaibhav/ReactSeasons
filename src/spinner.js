import React from 'react'

function Spinner(props) {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui big text loader">
                  {props.message}
                </div>
            </div>
        </div>
    )
}

export default Spinner
