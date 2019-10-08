import React from 'react';

const DataOverviewHeader = (props) => {
    return (
        <div className="commonHeader">
            <div className="title">Data overview</div>
            <div>
                <div className="progressBar displayInlineBlock"><div></div></div>
                &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="spColor displayInlineBlock">{props.count || ''}</div> insertions needed to complete
      </div>
        </div>
    );
}

export default DataOverviewHeader;
