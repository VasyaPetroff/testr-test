import React from 'react';

import SupportRequestHeader from '../support-request-header';

import './styles.css';

const SupportRequest = (props) => {
    const {
        addCallback,
        sendCallback,
        items = [],
    } = props;

    return (
        <div className="supportRequestArea">
            <div className="areaPadding">
                <SupportRequestHeader callback={addCallback} />
            </div>
            <table className="supportRequesTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Time</th>
                        <th>Phone number</th>
                        <th>City</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, i) => {
                            const statusClass = item.status === 'sent' ? 'blueButton' : 'borderedGreyButton';

                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.timestamp}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        <div className="positionRel">
                                            {
                                                item.status === 'new send' ? <div className="badge badgePositionLeftTop">1</div> : null
                                            }
                                            <button
                                                className={`button solidButton ${statusClass}`}
                                                data-index={i}
                                                onClick={sendCallback}
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SupportRequest;
