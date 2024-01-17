import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1880" height="223" viewBox="0 0 1880 100%" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 31.3567L78.3333 20.3765C156.667 9.39635 313.333 -12.564 470 9.39635C626.667 31.3567 783.333 97.2378 940 102.728C1096.67 108.218 1253.33 53.3171 1410 47.827C1566.67 42.3369 1723.33 86.2576 1801.67 108.218L1880 130.178V229H1801.67C1723.33 229 1566.67 229 1410 229C1253.33 229 1096.67 229 940 229C783.333 229 626.667 229 470 229C313.333 229 156.667 229 78.3333 229H0V31.3567Z" fill="#061D4B" />
            </svg>
            <div className={styles.links_group}>
                <div className={styles.phnumber}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M10.221 10.6663H22.1944L26.053 20.3143L19.853 24.4477C19.4879 24.6913 19.1886 25.0212 18.9816 25.4083C18.7746 25.7953 18.6663 26.2274 18.6664 26.6663C18.6744 26.917 18.6664 26.669 18.6664 26.669V26.725C18.668 26.8443 18.6733 26.9634 18.6824 27.0823C18.6984 27.301 18.725 27.597 18.7757 27.9623C18.8797 28.6823 19.0797 29.6743 19.469 30.8423C20.253 33.189 21.789 36.2263 24.781 39.2183C27.773 42.2103 30.8104 43.7463 33.1544 44.5303C34.325 44.9197 35.3144 45.117 36.0397 45.2237C36.4491 45.2808 36.8612 45.3164 37.2744 45.3303L37.309 45.333H37.3304C37.3304 45.333 37.629 45.317 37.333 45.333C37.8281 45.3327 38.3134 45.1947 38.7344 44.9342C39.1555 44.6738 39.4957 44.3012 39.717 43.8583L41.5037 40.285L53.333 42.2583V53.7783C47.7037 54.5917 32.4984 55.3943 20.5517 43.4477C8.60504 31.501 9.40504 16.293 10.221 10.6663ZM24.1944 27.9623L29.013 24.7517C30.031 24.0727 30.7846 23.0643 31.1472 21.8956C31.5099 20.7269 31.4597 19.4691 31.005 18.333L27.1464 8.68501C26.7504 7.69542 26.067 6.84718 25.1843 6.24971C24.3017 5.65223 23.2602 5.33294 22.1944 5.33301H10.0824C7.65837 5.33301 5.37837 7.01567 4.98104 9.64501C4.07437 15.6237 2.84504 33.2823 16.781 47.2183C30.717 61.1543 48.3757 59.9223 54.3544 59.0183C56.9837 58.6183 58.6664 56.341 58.6664 53.917V42.2583C58.6665 40.9958 58.2188 39.7742 57.4029 38.8108C56.5869 37.8474 55.4557 37.2047 54.2104 36.997L42.381 35.0263C41.256 34.8385 40.1003 35.0164 39.0838 35.5338C38.0672 36.0512 37.2433 36.8809 36.733 37.901L35.8104 39.749C35.4841 39.6687 35.1612 39.5753 34.8424 39.469C33.189 38.9197 30.893 37.789 28.5517 35.4477C26.2104 33.1063 25.0797 30.8103 24.5304 29.1543C24.3992 28.7629 24.2879 28.3651 24.197 27.9623H24.1944Z" fill="white" />
                    </svg>
                    <div className={styles.div}>+91 123456789</div>
                </div>
                <div className={styles.mail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                        <path d="M10.6663 53.8337C9.19967 53.8337 7.94456 53.3119 6.90101 52.2683C5.85745 51.2248 5.33479 49.9688 5.33301 48.5003V16.5003C5.33301 15.0337 5.85567 13.7785 6.90101 12.735C7.94634 11.6914 9.20145 11.1688 10.6663 11.167H53.333C54.7997 11.167 56.0557 11.6897 57.101 12.735C58.1463 13.7803 58.6681 15.0354 58.6663 16.5003V48.5003C58.6663 49.967 58.1446 51.223 57.101 52.2683C56.0575 53.3137 54.8015 53.8354 53.333 53.8337H10.6663ZM31.9997 35.167L10.6663 21.8337V48.5003H53.333V21.8337L31.9997 35.167ZM31.9997 29.8337L53.333 16.5003H10.6663L31.9997 29.8337ZM10.6663 21.8337V16.5003V48.5003V21.8337Z" fill="white" />
                    </svg>
                    <div className={styles.div}>csi.it@nirmauni.ac.in</div>
                </div>
                <div className={styles.social_medias}>
                    {/* USE Standard icon library such as matrial icons svg should be last resort */}

                    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 105 100" id="instagram">
                        <a href='https://www.instagram.com/csiitnu/' target='_blank'>
                            <defs>
                                <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                                    <stop offset=".09" stop-color="#fa8f21"></stop>
                                    <stop offset=".78" stop-color="#d82d7e"></stop>
                                </radialGradient>
                                <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                                    <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#8c3aaa"></stop>
                                </radialGradient>
                            </defs>
                            <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)">
                            </path>
                        </a>
                    </svg>
                    {/* USE Standard icon library such as matrial icons svg should be last resort */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
                        <a href='https://www.linkedin.com/company/csi-itnu/mycompany/' target='_blank'>
                            <path d="M88.8125 2.29723H9.1875C7.38086 2.27884 5.64072 2.9779 4.34889 4.24102C3.05707 5.50414 2.31909 7.22814 2.29688 9.03473V88.9813C2.3231 90.7852 3.06285 92.5053 4.35424 93.7651C5.64563 95.0249 7.38348 95.7219 9.1875 95.7035H88.8125C90.6192 95.7178 92.3582 95.0164 93.6494 93.7525C94.9405 92.4886 95.6789 90.765 95.7031 88.9583V9.01176C95.6709 7.21046 94.929 5.49468 93.6387 4.23737C92.3484 2.98005 90.614 2.28282 88.8125 2.29723Z" fill="#0076B2" />
                            <path d="M17.1025 38.2031H30.968V82.8161H17.1025V38.2031ZM24.0391 16C25.6294 16 27.1839 16.4717 28.5061 17.3554C29.8283 18.239 30.8587 19.495 31.4669 20.9644C32.0752 22.4338 32.2339 24.0506 31.9231 25.6102C31.6123 27.1699 30.8459 28.6023 29.7208 29.7262C28.5958 30.8502 27.1626 31.6153 25.6027 31.9246C24.0428 32.2339 22.4262 32.0736 20.9573 31.464C19.4885 30.8544 18.2335 29.8228 17.3511 28.4998C16.4687 27.1767 15.9985 25.6217 16 24.0314C16.002 21.9006 16.8499 19.8578 18.3573 18.3519C19.8647 16.8459 21.9083 16 24.0391 16ZM39.6655 38.2031H52.9567V44.3281H53.1405C54.9933 40.8216 59.5105 37.1236 66.2556 37.1236C80.2972 37.093 82.9003 46.3341 82.9003 58.3161V82.8161H69.0348V61.1106C69.0348 55.9427 68.943 49.2894 61.8303 49.2894C54.7177 49.2894 53.508 54.9244 53.508 60.7737V82.8161H39.6655V38.2031Z" fill="white" />
                        </a>
                    </svg>
                    <a href='https://twitter.com/csiitnu' target='_blank'>
                        {/* USE Standard icon library such as matrial icons svg should be last resort */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
                            <path d="M56.9254 42.434L87.9362 6.125H80.5862L53.6669 37.6504L32.1559 6.125H7.34961L39.8734 53.802L7.34961 91.875H14.6996L43.1319 58.5795L65.8495 91.875H90.6557L56.9254 42.434ZM46.862 54.2185L43.5667 49.4716L17.3456 11.6988H28.634L49.7897 42.1829L53.085 46.9298L80.5924 86.5585H69.304L46.862 54.2185Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer