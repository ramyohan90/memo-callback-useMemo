import React from "react";

const Count = (props) => {

    console.log('Incrementing: '+ props.status + ', type: ' + props.text);

    return (
        <div>
            Hello Count component = {props.status} , type = {props.text}
        </div>
    )
}

export default React.memo(Count);