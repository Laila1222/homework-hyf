import React from 'react';

class Loader extends React.Component {
    render () {
        return (
            <div className="">
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>
        )
    }
}

export default Loader;