import React, { useEffect, useState, useLayoutEffect } from 'react'
import styles from "./HomePage.module.css"
import { ReactSVG } from 'react-svg'

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
    useEffect(() => {
        console.log(Math.min(300 - height, 0));
    }, [height])

    useEffect(() => {
        console.log(Math.min(300 - height, 0));
    }, [width])


    return (
        <div style={{ width: "100%" }}>
            <div className={styles.logo_div}>
                <img className={styles.logo} src="/assets/images/CSI_LOGO.png" alt="CSI LOGO" />
                <div className={`row ${styles.h3__}`}>Institute of Technology</div>
                <div className={`row ${styles.h3__}`}>Nirma University</div>
                <div className={`row ${styles.h3__}`}>Student Chapter</div>
            </div>
            <ReactSVG src='/assets/svgs/wave_1.svg' />
        </div>
    )
}

export default HomePage