import React, { useEffect, useState, useLayoutEffect } from 'react'
import styles from "./HomePage.module.css"
import { ReactSVG } from 'react-svg'
import EventCard from '../../Components/EventCard/EventCard';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function HomePage() {

    const [width, height] = useWindowSize();

    return (
        <div style={{ width: "100%" }}>
            <div className={styles.logo_div}>
                <img className={styles.logo} src="/assets/images/CSI_LOGO.png" alt="CSI LOGO" />
                <div className={`row ${styles.h3__}`}>Computer Society of India</div>
                <div className={`row ${styles.h3__}`}>Institute of Technology</div>
                <div className={`row ${styles.h3__}`}>Nirma University</div>
            </div>
            <ReactSVG src='/assets/svgs/wave_1.svg' className={`${styles.wave_1}`} />
            <div className={`${styles.upcoming_events}`}>
                <div className={`${styles.heading} row justify-content-center align-items-center`} >
                    Upcoming Events
                </div>
                <div className={`row p-3 ${styles.card_container}`} >
                    <div className={`col-md-4 ${styles.card}`}>
                        <EventCard eventName="Cubix" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua." eventDate="09-02-2024" regLink="https://google.com" />
                    </div>
                    <div className={`col-md-4 ${styles.card}`}>
                        <EventCard eventName="HackNUThon" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua." eventDate="09-03-2024" regLink="https://google.com" />
                    </div>

                </div>
            </div>
            <ReactSVG src='/assets/svgs/wave_2.svg' className={`${styles.wave_2}`} />
            <div className={`${styles.board_members}`}>
                <div className={`${styles.heading} row justify-content-center align-items-center`} style={{ color: "white" }} >
                    Board Members
                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage