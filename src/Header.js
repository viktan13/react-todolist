import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{props.appName}</h1>
        </div>
    );
};

export default Header;