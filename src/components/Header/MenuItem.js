import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        const {children} = this.props;
        
        return (
            <div className="menu-item">
                {children}
            </div>
        );
    }
}

export default MenuItem;