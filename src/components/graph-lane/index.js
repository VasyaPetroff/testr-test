import React from 'react';

import Graph from '../graph';
import Terms from '../terms';

import graphBlue from '../../assets/images/graph-blue.png';
import pieChartBlue from '../../assets/images/pie-chart-blue.png';
import graphPink from '../../assets/images/group-pink.png';
import pieChartPink from '../../assets/images/pie-chart-pink.png';

import './styles.css';

const GraphLane = (props) => {
    const {
        terms
    } = props;

    return (
        <div className="graphArea">
            <Graph
                title="General results"
                graph1={graphBlue}
                graph2={pieChartBlue}
                digits="9,401"
            />
            <Graph
                title="Ratings by category"
                graph1={graphPink}
                graph2={pieChartPink}
                digits="3,900"
            />
            <Terms items={terms} />
        </div>
    );
}

export default GraphLane;
