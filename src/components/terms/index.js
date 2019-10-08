import React from 'react';

import './styles.css';

const Terms = (props) => {
    const { items = [] } = props;

    return (
        <div className="termsArea">
            {
                items.map((item, i) => {
                    return (
                        <div key={i} className="terms">
                            <div>{`Item${i + 1}`}</div>
                            <div>{item}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Terms;
