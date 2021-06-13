import React from 'react';

const Title = (props) => {

    console.log('Hello Title component')

    return (
        <div>
            Hello React
        </div>
    )
}

export default React.memo(Title);