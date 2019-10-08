import React from 'react';

import NavMenu from '../nav-menu';
import Dashboard from '../dashboard';
import Chat from '../chat';
import Folder from '../folder';
import Message from '../message';
import Settings from '../settings';

import appLogo from '../../assets/images/logo@2x.png';
import './styles.css';

const AppComponents = {
    dashboard: Dashboard,
    chat: Chat,
    folder: Folder,
    message: Message,
    settings: Settings
};

class App extends React.Component {

    state = {
        active: 'dashboard',
    };

    onToggleTabs = (e) => {
        e.preventDefault();

        const el = e.target.closest('a');
        const {path} = el.dataset;

        if (
            !el
            || this.state.active === path
        ) {
            return;
        }

        this.setState({
            active: path
        });

    };

    render() {
        const {
            active,
        } = this.state;
        const ActiveComponents = AppComponents[active];

        return (
            <div className="pageArea">
                <div className="navAreaTop">
                    <div>
                        <img src={appLogo} alt="" />
                    </div>
                    <div>
                        <button className="solidButton blueButton">Premium</button>
                    </div>
                </div>
                <div className="navAreaLeft">
                    <div>
                        <NavMenu
                            active={active}
                            toggleCallback={this.onToggleTabs}
                        />
                    </div>
                    <div>
                        <div className="contentArea">
                            {
                                <ActiveComponents />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
