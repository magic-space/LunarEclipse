import * as React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    return (
        <div>
            <div className="progress-bar">
                <div className="progress-bar__inner">
                    <div className="progress-bar__fill" style={{width: '70%'}}>
                    </div>
                </div>
                <div className="progress-bar__label">Maro</div>
            </div>
            <div className="progress-bar">
                <div className="progress-bar__inner">
                    <div className="progress-bar__fill" style={{width: '5%'}}>
                    </div>
                </div>
                <div className="progress-bar__label">Equindar</div>
            </div>
            <div className="progress-bar">
                <div className="progress-bar__inner">
                    <div className="progress-bar__fill" style={{width: '30%'}}>
                    </div>
                </div>
                <div className="progress-bar__label">Mikko</div>
            </div>
            
    </div>
    );
}


export default ProgressBar;