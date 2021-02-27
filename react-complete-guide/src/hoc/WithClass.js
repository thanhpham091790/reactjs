import React from 'react';

const withClass = (WrapComponent, className) => {
    return props => (
        <div className={className}>
            <WrapComponent />
        </div>
    );
}

export default withClass;