import React, { useEffect, useState, useLayoutEffect } from "react";
import styles from "./HomePage.module.css";
import { ReactSVG } from "react-svg";
import EventCard from "../../Components/EventCard/EventCard";
import BoardMemberCard from "./Components/BoardMemberCard/BoardMemberCard";
import EventSwiper from "./Components/EventSwiper/EventSwiper";
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
    <div style={{ width: "100%", paddingTop: "74px" }}>
      <div className={styles.logo_div}>
        <img
          className={styles.logo}
          src="/assets/images/CSI_LOGO.png"
          alt="CSI LOGO"
        />
        <div className={`row ${styles.h3__}`}>Computer Society of India</div>
        <div className={`row ${styles.h3__}`}>Institute of Technology</div>
        <div className={`row ${styles.h3__}`}>Nirma University</div>
      </div>
      <ReactSVG src="/assets/svgs/wave_1.svg" className={`${styles.wave_1}`} />
      <div className={`${styles.upcoming_events}`}>
        <div
          className={`${styles.heading} row justify-content-center align-items-center`}
        >
          Upcoming Events
        </div>
        <div className={`row p-3 ${styles.card_container}`} id="events">
          <div className={`col-md-4 ${styles.card}`}>
            <EventCard
              eventName="Cubix"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua."
              eventDate="09-02-2024"
              regLink="/cubix"
            />
          </div>
          <div className={`col-md-4 ${styles.card}`}>
            <EventCard
              eventName="HackNUThon"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua."
              eventDate="09-03-2024"
              regLink="/HackNUthon"
            />
          </div>
        </div>
      </div>
      <ReactSVG src="/assets/svgs/wave_2.svg" className={`${styles.wave_2}`} />
      <div className={`${styles.board_members}`}>
        <div
          className={`${styles.heading} row justify-content-center align-items-center`}
          style={{ color: "white" }}
        >
          Board Members
        </div>
        <div className={styles.board_member_container}>
          <div
            className={`row p-3 ${styles.card_container} ${styles.board_card_container}`}
          >
            <div className={`col-md-6 ${styles.card}`}>
              <BoardMemberCard
                name="Mohit Jethwani"
                position="President"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Mohit_Jethwani.jpg"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-6 ${styles.card} `}>
              <BoardMemberCard
                name="Manav Pandya"
                position="Vice President"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Manav_Pandya.jpg"
                desc="SMALL DESC"
              />
            </div>
          </div>
          <div
            className={`row p-3 ${styles.card_container} ${styles.board_card_container}`}
          >
            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Rajat Vanzara"
                position="General Secretary"
                linkedin="https://www.linkedin.com/in/rajatvanzara/"
                instagram="https://www.instagram.com/rajat_vanzara?igsh=OTJyYmJpc2ltMXoz&utm_source=qr"
                github="https://github.com/rajat120204"
                imagePath="/assets/images/members/board_members/Rajat_Vanzara.png"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Mulya Patel"
                position="Managing Director"
                linkedin="https://www.linkedin.com/in/mulya-patel-645069250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                instagram="https://www.instagram.com/"
                github="https://github.com/MulyaP"
                imagePath="/assets/images/members/board_members/Mulya_Patel.jpeg"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Srujan Kachhadia"
                position="Managing Director"
                linkedin="https://www.linkedin.com/in/srujankachhadia23?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                instagram="https://www.instagram.com/srujan_patell?igsh=cWpiNHdpMmx6b3Rv"
                github="https://github.com/Srujann23"
                imagePath="/assets/images/members/board_members/Srujan_Kachhadia.jpg"
                desc="SMALL DESC"
              />
            </div>
            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Rudra Shah"
                position="Technical Director"
                linkedin="https://www.linkedin.com/in/rudra-shah-b044781b4/"
                instagram="https://www.instagram.com/rudra_shah_/"
                github="https://github.com/scienceLabwork"
                imagePath="/assets/images/members/board_members/RudraShah.jpg"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Ayushi Shah"
                position="Joint Secretary"
                linkedin="https://www.linkedin.com/in/ayushi-shah-"
                instagram="https://www.instagram.com/ayushi._712?igsh=MWhkNzhsdmFxcXZtcw=="
                github="https://github.com/"
                imagePath="/assets/images/members/board_members/Ayushi_Shah.jpg"
                desc="SMALL DESC"
              />
            </div>
            {/* SOCIALS LEFT */}
            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Vyom Padalia"
                position="Joint Secretary"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Vyom_Padalia.jpg"
                desc="SMALL DESC"
              />
            </div>
            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Stavan Shah"
                position="Technical Head"
                linkedin="https://www.linkedin.com/in/shah-stavan-810b4819a/"
                instagram="https://www.instagram.com/_duh.itz.stavan_/"
                github="https://github.com/ShahStavan"
                imagePath="/assets/images/members/board_members/Stavan_Shah.png"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-4 col-sm-6 ${styles.card}`}>
              <BoardMemberCard
                name="Krish Italiya"
                position="Technical Head"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Krish_Italiya.jpg"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Kavish Shah"
                position="Event Management Head"
                linkedin="https://www.linkedin.com/in/krishitaliya/"
                instagram="https://www.instagram.com/krish_italiya___?igsh=dHVxaGxwNzd2dDZp"
                github="https://github.com/krish-italiya"
                imagePath="/assets/images/members/board_members/Kavish_Shah.png"
                desc="SMALL DESC"
              />
            </div>
            {/* SOCIALS LEFT */}
            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Keyaba Gohil"
                position="Organizing Secretary"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Keyaba_Gohil.jpg"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Nikunj Mahida"
                position="Graphics Head"
                linkedin="https://www.linkedin.com/in/nikunj-jayvin-mahida/"
                instagram="https://www.instagram.com/"
                github="https://www.linkedin.com/in/nikunj-jayvin-mahida/"
                imagePath="/assets/images/members/board_members/Nikunj_Mahida.jpg"
                desc="SMALL DESC"
              />
            </div>

            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Tanuj Patel"
                position="Graphics Head"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Tanuj_Patel.jpg"
                desc="SMALL DESC"
              />
            </div>
            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Dipti Shah"
                position="Editor"
                linkedin="https://www.linkedin.com/in/tanujux"
                instagram="https://www.instagram.com/tanuj.ux/"
                github="https://github.com/"
                imagePath="/assets/images/members/board_members/Dipti_Shah.png"
                desc="SMALL DESC"
              />
            </div>
            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Heet Depani"
                position="Treasurer"
                linkedin="https://www.linkedin.com/in/heet-depani/"
                instagram="https://www.instagram.com/its.heet26?utm_source=qr&igsh=ZDExYjZkNGI0OA=="
                github="https://github.com/heet-26"
                imagePath="/assets/images/members/board_members/Heet_Depani.png"
                desc="SMALL DESC"
              />
            </div>
            {/* SOCIALS LEFT */}
            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Nisarg Patel"
                position="Sponsorship Head"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Nisarg.jpg"
                desc="SMALL DESC"
              />
            </div>
            {/* SOCIALS LEFT */}
            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Bhaumil Patel"
                position="Sponsorship Head"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Bhaumil_Patel.png"
                desc="SMALL DESC"
                shiftDown={true}
              />
            </div>
            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Akshat Kotadia"
                position="Social Media Head"
                linkedin="https://www.linkedin.com/in/akshat-kotadia-32b2b6222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                instagram="https://www.instagram.com/akshat_0933?igsh=eGVic21kdzBmanQy"
                github="https://github.com/Akshat-A-K"
                imagePath="/assets/images/members/board_members/Akshat.jpg"
                desc="SMALL DESC"
              />
            </div>
            {/* SOCIALS LEFT */}
            <div className={`col-md-4 ${styles.card}`}>
              <BoardMemberCard
                name="Helly Upadhyay"
                position="Social Media Head"
                linkedin=""
                instagram=""
                github=""
                imagePath="/assets/images/members/board_members/Helly_Upadhyay.png"
                desc="SMALL DESC"
                shiftDown={true}
              />
            </div>
          </div>
        </div>
      </div>
      <ReactSVG src="/assets/svgs/wave_3.svg" className={`${styles.wave_3}`} />
      <div className={styles.past_events}>
        <div
          className={`${styles.heading_past_events} row justify-content-center align-items-center`}
        >
          Past Events
        </div>
        {/* {window.location.protocol +
          "//" +
          window.location.host +
          "/assets/images/carousel-bg.png"} */}
        <div
          className={`swiper ${styles.swiper}`}
          style={{
            backgroundImage: `url(${
              window.location.protocol +
              "//" +
              window.location.host +
              "/assets/images/carousel-bg.png"
            })`,
          }}
        >
          <EventSwiper />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
