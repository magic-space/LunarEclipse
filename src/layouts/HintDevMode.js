import { Avatar } from '@mui/material';
import LogoDevMode from '../assets/svg/flasks-chemistry.svg';
import classes from '../assets/HintDevMode.module.css';

const HintDevMode = () => {
    return (
        <>
            <section className={classes.hint}>
                <h2>In Development</h2>
                <div>
                <img src={LogoDevMode} alt="SVG for Dev-Mode" />
                    <p>
                        This app is currently under development.<br />
                        All things are subject of change.
                        <span>Feel free to look around and provide feedback, if you want.</span>
                    </p>
                </div>
            </section>
        </>
    );
}

export default HintDevMode;