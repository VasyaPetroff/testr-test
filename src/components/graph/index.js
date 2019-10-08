import React from 'react';

import './styles.css';

const Graph = (props) => {
    const {
        title,
        graph1,
        graph2,
        digits,
    } = props;
    return (
        <div className="graph">
            <div>
                <div className="graphTitle">{title}</div>
                <div className="graphDigitsLine">
                    <div className="graphDigits">{digits}</div>
                    <div>Followers</div>
                </div>
                <img src={graph1} alt="" />
            </div>
            <div>
                <img src={graph2} alt="" />
            </div>
        </div>
    );
}

export default Graph;
