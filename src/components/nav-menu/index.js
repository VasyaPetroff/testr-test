import React from 'react';

import menuDeta from './menuData';

const NavMenu = (props) => {
    const {
        active,
        toggleCallback
    } = props;

    return (
        <div className="navMenu">
            {
                menuDeta.map(item => {
                    return (
                        <a
                            key={item.dataPath}
                            className={(active === item.dataPath ? 'active' : '')}
                            data-path={item.dataPath}
                            href={item.path}
                            role="button"
                            onClick={toggleCallback}
                        >
                            <img src={item.img} alt={item.name} />
                        </a>
                    );
                })
            }
        </div>
    );
}

export default NavMenu;
