import React from 'react';

const SupportRequestHeader = (props) => {
    return (
        <div className="commonHeader">
            <div className="title">Support Requests</div>
            <div>
                <button
                    className="textButton"
                    onClick={props.callback}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default SupportRequestHeader;
