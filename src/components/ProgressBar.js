import * as React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    return (
        <div className='ProgressBar-Test'>
            <span>{props.value} {props.unit}</span>
        </div>
    )

}


export default ProgressBar;