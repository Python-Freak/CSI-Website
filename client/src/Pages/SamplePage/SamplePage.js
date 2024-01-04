import React from 'react'
import styles from "./SamplePage.module.css"
import SomeComponent from './Components/SomeComponent'

function SamplePage() {
    return (
        <>
            <h3 className={styles.sample}>HELLO DEVS</h3>
            <img src="/assets/images/logo_CSI.jpg" alt='Sample' />
            <SomeComponent />
        </>
    )
}

export default SamplePage