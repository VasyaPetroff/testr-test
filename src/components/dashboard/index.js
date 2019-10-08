import React from 'react';

import { getRandomInt } from '../../libs/utils';
import DataOverviewHeader from '../data-overview-header';
import GraphLane from '../graph-lane';
import SupportRequest from '../support-request';

class Dashboard extends React.Component {

    state = {
        data: {}
    };

    onAddClick = (e) => {
        e.preventDefault();

        const { data } = this.state;
        const {
            supportRequests
        } = data;
        const index = getRandomInt(supportRequests.length - 1);
        const copy = { ...this.state.data.supportRequests[index] };

        this.setState({
            ...data,
            supportRequests: supportRequests.unshift(copy)
        });
    };

    onSendClick = (e) => {
        e.preventDefault();

        const { data } = this.state;
        const {
            supportRequests
        } = data;
        const { index } = e.target.dataset;
        const copy = { ...this.state.data.supportRequests[index] };

        if (copy.status === 'new send') {
            return;
        }

        copy.status = 'new send';

        this.setState({
            ...data,
            supportRequests: supportRequests.splice(index, 1, copy)
        });
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8081/api/data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({})
        })
        const data = await response.json();

        this.setState({
            data
        });
    }

    render() {
        const {
            data: {
                general,
                terms,
                supportRequests
            }
        } = this.state;
    
        return (
            <>
                <div className="areaPadding">
                    <DataOverviewHeader count={general && general.insertionsCount} />
                </div>
                <div className="contentAreaWithBorder">
                    <GraphLane
                        terms={terms}
                    />
                    <SupportRequest
                        addCallback={this.onAddClick}
                        sendCallback={this.onSendClick}
                        items={supportRequests}
                    />
                </div>
            </>
        );
    }

}

export default Dashboard;
