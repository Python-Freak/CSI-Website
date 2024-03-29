import React from "react";
import styles from "./Footer.module.css";
import { ReactSVG } from "react-svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <>
      <ReactSVG src="/assets/svgs/wave_4.svg" className={`${styles.wave_4}`} />
      <div className={styles.footer}>
        <div
          className={`${styles.heading} row justify-content-center align-items-center`}
          style={{ color: "white" }}
        >
          Contact Us
        </div>
        <div className={styles.contacts}>
          <div className={styles.email}>
            <div className={styles.icon}>
              <MailOutlineIcon style={{ color: "white", fontSize: 60 }} />
            </div>
            <div className={styles.text}>csi.it@nirmauni.ac.in</div>
          </div>
          <div className={styles.phone}>
            <div className={styles.icon}>
              <PhoneIcon style={{ color: "white", fontSize: 60 }} />
            </div>
            <div className={styles.text}>+91 0123456789</div>
          </div>
        </div>
        <div className={styles.socials_container}>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/csiitnu?igsh=MzY1NDJmNzMyNQ==">
              {/* <InstagramIcon style={{ color: "white", fontSize: 60 }} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <g clipPath="url(#clip0_361_699)">
                  <path
                    d="M53.5938 0H16.4062C7.34533 0 0 7.34533 0 16.4062V53.5938C0 62.6547 7.34533 70 16.4062 70H53.5938C62.6547 70 70 62.6547 70 53.5938V16.4062C70 7.34533 62.6547 0 53.5938 0Z"
                    fill="url(#paint0_radial_361_699)"
                  />
                  <path
                    d="M53.5938 0H16.4062C7.34533 0 0 7.34533 0 16.4062V53.5938C0 62.6547 7.34533 70 16.4062 70H53.5938C62.6547 70 70 62.6547 70 53.5938V16.4062C70 7.34533 62.6547 0 53.5938 0Z"
                    fill="url(#paint1_radial_361_699)"
                  />
                  <path
                    d="M35.0025 7.65625C27.5764 7.65625 26.6443 7.68879 23.7278 7.82141C20.8168 7.95484 18.8297 8.41559 17.0912 9.0918C15.2925 9.79016 13.767 10.7245 12.2473 12.2448C10.7261 13.7648 9.7918 15.2904 9.09125 17.0882C8.41313 18.8273 7.95184 20.8152 7.82086 23.7248C7.69043 26.6416 7.65625 27.574 7.65625 35.0003C7.65625 42.4266 7.68906 43.3557 7.82141 46.2722C7.95539 49.1832 8.41613 51.1703 9.0918 52.9088C9.7907 54.7075 10.725 56.233 12.2454 57.7527C13.7648 59.2739 15.2904 60.2104 17.0877 60.9087C18.8275 61.585 20.8149 62.0457 23.7254 62.1791C26.6421 62.3118 27.5734 62.3443 34.9992 62.3443C42.426 62.3443 43.3552 62.3118 46.2716 62.1791C49.1827 62.0457 51.1719 61.585 52.9118 60.9087C54.7096 60.2104 56.233 59.2739 57.7522 57.7527C59.2733 56.233 60.2074 54.7075 60.9082 52.9096C61.5803 51.1703 62.0419 49.1827 62.1786 46.2727C62.3096 43.3562 62.3438 42.4266 62.3438 35.0003C62.3438 27.574 62.3096 26.6421 62.1786 23.7254C62.0419 20.8143 61.5803 18.8275 60.9082 17.089C60.2074 15.2904 59.2733 13.7648 57.7522 12.2448C56.2313 10.7239 54.7102 9.78961 52.9102 9.09207C51.167 8.41559 49.1788 7.95457 46.2678 7.82141C43.3511 7.68879 42.4225 7.65625 34.994 7.65625H35.0025ZM32.5495 12.5839C33.2776 12.5828 34.09 12.5839 35.0025 12.5839C42.3035 12.5839 43.1687 12.6101 46.0518 12.7411C48.7178 12.863 50.1648 13.3085 51.1287 13.6828C52.4048 14.1783 53.3146 14.7708 54.2711 15.7281C55.2281 16.6852 55.8204 17.5965 56.3172 18.8727C56.6915 19.8352 57.1375 21.2822 57.2589 23.9482C57.3899 26.8308 57.4183 27.6965 57.4183 34.994C57.4183 42.2915 57.3899 43.1575 57.2589 46.0398C57.137 48.7058 56.6915 50.1528 56.3172 51.1156C55.8217 52.3917 55.2281 53.3004 54.2711 54.2568C53.314 55.2139 52.4054 55.8061 51.1287 56.3019C50.1659 56.6779 48.7178 57.1222 46.0518 57.2441C43.1692 57.3751 42.3035 57.4036 35.0025 57.4036C27.7011 57.4036 26.8357 57.3751 23.9534 57.2441C21.2874 57.1211 19.8404 56.6757 18.8757 56.3013C17.5998 55.8056 16.6882 55.2133 15.7311 54.2563C14.7741 53.2993 14.1818 52.3901 13.685 51.1134C13.3107 50.1506 12.8647 48.7036 12.7433 46.0376C12.6123 43.155 12.5861 42.2893 12.5861 34.9871C12.5861 27.6853 12.6123 26.8239 12.7433 23.9414C12.8652 21.2754 13.3107 19.8283 13.685 18.8645C14.1807 17.5883 14.7741 16.677 15.7314 15.7199C16.6884 14.7629 17.5998 14.1704 18.8759 13.6738C19.8398 13.2978 21.2874 12.8535 23.9534 12.731C26.4759 12.617 27.4534 12.5828 32.5495 12.577V12.5839ZM49.5986 17.124C47.787 17.124 46.3173 18.5924 46.3173 20.4042C46.3173 22.2157 47.787 23.6854 49.5986 23.6854C51.4101 23.6854 52.8798 22.2157 52.8798 20.4042C52.8798 18.5927 51.4101 17.1229 49.5986 17.1229V17.124ZM35.0025 20.9579C27.2478 20.9579 20.9604 27.2453 20.9604 35.0003C20.9604 42.7552 27.2478 49.0396 35.0025 49.0396C42.7574 49.0396 49.0427 42.7552 49.0427 35.0003C49.0427 27.2456 42.7569 20.9579 35.0019 20.9579H35.0025ZM35.0025 25.8855C40.0362 25.8855 44.1172 29.966 44.1172 35.0003C44.1172 40.034 40.0362 44.115 35.0025 44.115C29.9685 44.115 25.888 40.034 25.888 35.0003C25.888 29.966 29.9685 25.8855 35.0025 25.8855Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_361_699"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(18.5937 75.3914) rotate(-90) scale(69.3752 64.5244)"
                  >
                    <stop stopColor="#FFDD55" />
                    <stop offset="0.1" stopColor="#FFDD55" />
                    <stop offset="0.5" stopColor="#FF543E" />
                    <stop offset="1" stopColor="#C837AB" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_361_699"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-11.7253 5.04246) rotate(78.681) scale(31.0111 127.829)"
                  >
                    <stop stopColor="#3771C8" />
                    <stop offset="0.128" stopColor="#3771C8" />
                    <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                  </radialGradient>
                  <clipPath id="clip0_361_699">
                    <rect width="70" height="70" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.linkedin.com/groups/13566862">
              {/* <LinkedInIcon style={{ color: "white", fontSize: 60 }} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <path
                  d="M63.4375 1.64088H6.5625C5.27205 1.62774 4.02908 2.12707 3.10635 3.0293C2.18362 3.93153 1.65649 5.16295 1.64062 6.45338V63.5581C1.65936 64.8466 2.18775 66.0752 3.11017 66.9751C4.03259 67.875 5.27392 68.3728 6.5625 68.3596H63.4375C64.728 68.3699 65.9702 67.8688 66.8924 66.9661C67.8147 66.0633 68.3421 64.8321 68.3594 63.5417V6.43697C68.3364 5.15033 67.8064 3.92477 66.8848 3.02669C65.9632 2.12861 64.7243 1.63058 63.4375 1.64088Z"
                  fill="#0076B2"
                />
                <path
                  d="M12.2162 27.2881H22.1201V59.1545H12.2162V27.2881ZM17.1709 11.4287C18.3068 11.4287 19.4172 11.7656 20.3617 12.3968C21.3061 13.028 22.0421 13.9252 22.4765 14.9747C22.911 16.0243 23.0244 17.1791 22.8023 18.2932C22.5803 19.4072 22.0329 20.4303 21.2293 21.2332C20.4257 22.036 19.402 22.5825 18.2878 22.8034C17.1736 23.0244 16.0188 22.9099 14.9697 22.4744C13.9205 22.039 13.0241 21.3021 12.3938 20.3571C11.7635 19.4121 11.4276 18.3014 11.4287 17.1654C11.4302 15.6435 12.0358 14.1843 13.1125 13.1086C14.1892 12.0329 15.6489 11.4287 17.1709 11.4287ZM28.3326 27.2881H37.8264V31.6631H37.9576C39.2811 29.1584 42.5076 26.517 47.3256 26.517C57.3553 26.4951 59.2147 33.0959 59.2147 41.6545V59.1545H49.3107V43.6506C49.3107 39.9592 49.2451 35.2068 44.1647 35.2068C39.0842 35.2068 38.2201 39.2318 38.2201 43.41V59.1545H28.3326V27.2881Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://twitter.com/csiitnu">
              {/* <XIcon style={{ color: "white", fontSize: 60 }} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <path
                  d="M40.6612 30.31L62.8119 4.375H57.5619L38.3338 26.8931L22.9688 4.375H5.25L28.4813 38.43L5.25 65.625H10.5L30.8087 41.8425L47.0356 65.625H64.7544L40.6612 30.31ZM33.4731 38.7275L31.1194 35.3369L12.39 8.35625H20.4531L35.5644 30.1306L37.9181 33.5213L57.5662 61.8275H49.5031L33.4731 38.7275Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
