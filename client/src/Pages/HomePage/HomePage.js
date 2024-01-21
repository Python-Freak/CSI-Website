import React, { useEffect, useState, useLayoutEffect } from 'react'
import styles from "./HomePage.module.css"
import { ReactSVG } from 'react-svg'
import EventCard from '../../Components/EventCard/EventCard';
import BoardMemberCard from './Components/BoardMemberCard/BoardMemberCard';
import EventSwiper from './Components/EventSwiper/EventSwiper';
// import EventSwiper from './Components/EventSwiper/EventSwiper';
// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//         function updateSize() {
//             setSize([window.innerWidth, window.innerHeight]);
//         }
//         window.addEventListener('resize', updateSize);
//         updateSize();
//         return () => window.removeEventListener('resize', updateSize);
//     }, []);
//     return size;
// }

function HomePage() {
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
                <div className={`row p-3 ${styles.card_container}`} id="events" >
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
                <div className={styles.board_member_container}>
                    <div className={`row p-3 ${styles.card_container} ${styles.board_card_container}`}>
                        <div className={`col-md-6 ${styles.card}`}>
                            <BoardMemberCard name="Mohit Jethwani" position="President" imagePath="/assets/images/members/board_members/Mohit_Jethwani.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-6 ${styles.card} `}>
                            <BoardMemberCard name="Manav Pandya" position="Vice President" imagePath="/assets/images/members/board_members/Manav_Pandya.jpg" desc="SMALL DESC" />
                        </div>
                    </div>
                    <div className={`row p-3 ${styles.card_container} ${styles.board_card_container}`}>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Rajat Vanzara" position="General Secretary" imagePath="/assets/images/members/board_members/Rajat_Vanzara.heic" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Mulya Patel" position="Managing Director" imagePath="/assets/images/members/board_members/Manav_Pandya.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Srujan Kachhadia" position="Managing Director" imagePath="/assets/images/members/board_members/Manav_Pandya.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Rudra Shah" position="Technical Director" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Ayushi Shah" position="Joint Secretary" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Vyoma Padalia" position="Joint Secretary" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Stavan Shah" position="Technical Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Krish Italiya" position="Technical Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Kavish Shah" position="Event Management Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Keyaba Gohil" position="Organizing Secretary" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Nikunj Mahida" position="Graphics Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>

                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Tanuj Patel" position="Graphics Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Dipti Shah" position="Editor" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Heet Depani" position="Treasurer" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Nisarg Patel" position="Sponsorship Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Bhaumil Patel" position="Sponsorship Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Akshat Kotadia" position="Social Media Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                        <div className={`col-md-4 ${styles.card}`}>
                            <BoardMemberCard name="Helly Upadhyay" position="Social Media Head" imagePath="/assets/images/members/sample_member.jpg" desc="SMALL DESC" />
                        </div>
                    </div>
                </div>
            </div>
            <ReactSVG src='/assets/svgs/wave_3.svg' className={`${styles.wave_3}`} />
            <div className={styles.past_events}>
                <div className={`${styles.heading_past_events} row justify-content-center align-items-center`} >
                    Past Events
                </div>
                <div className="swiper">
                    <EventSwiper />
                </div>
            </div>
        </div >
    )
}

export default HomePage;