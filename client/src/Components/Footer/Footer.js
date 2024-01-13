import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="229" viewBox="0 0 1440 229" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 31.3567L60 20.3765C120 9.39635 240 -12.564 360 9.39635C480 31.3567 600 97.2378 720 102.728C840 108.218 960 53.3171 1080 47.827C1200 42.3369 1320 86.2576 1380 108.218L1440 130.178V229L1380 229C1320 229 1200 229 1080 229C960 229 840 229 720 229C600 229 480 229 360 229C240 229 120 229 60 229L0 229L0 31.3567Z" fill="#061D4B" />
            </svg>
            <div className={styles.links_group}>
                <div className="phnumber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M10.221 10.6663H22.1944L26.053 20.3143L19.853 24.4477C19.4879 24.6913 19.1886 25.0212 18.9816 25.4083C18.7746 25.7953 18.6663 26.2274 18.6664 26.6663C18.6744 26.917 18.6664 26.669 18.6664 26.669V26.725C18.668 26.8443 18.6733 26.9634 18.6824 27.0823C18.6984 27.301 18.725 27.597 18.7757 27.9623C18.8797 28.6823 19.0797 29.6743 19.469 30.8423C20.253 33.189 21.789 36.2263 24.781 39.2183C27.773 42.2103 30.8104 43.7463 33.1544 44.5303C34.325 44.9197 35.3144 45.117 36.0397 45.2237C36.4491 45.2808 36.8612 45.3164 37.2744 45.3303L37.309 45.333H37.3304C37.3304 45.333 37.629 45.317 37.333 45.333C37.8281 45.3327 38.3134 45.1947 38.7344 44.9342C39.1555 44.6738 39.4957 44.3012 39.717 43.8583L41.5037 40.285L53.333 42.2583V53.7783C47.7037 54.5917 32.4984 55.3943 20.5517 43.4477C8.60504 31.501 9.40504 16.293 10.221 10.6663ZM24.1944 27.9623L29.013 24.7517C30.031 24.0727 30.7846 23.0643 31.1472 21.8956C31.5099 20.7269 31.4597 19.4691 31.005 18.333L27.1464 8.68501C26.7504 7.69542 26.067 6.84718 25.1843 6.24971C24.3017 5.65223 23.2602 5.33294 22.1944 5.33301H10.0824C7.65837 5.33301 5.37837 7.01567 4.98104 9.64501C4.07437 15.6237 2.84504 33.2823 16.781 47.2183C30.717 61.1543 48.3757 59.9223 54.3544 59.0183C56.9837 58.6183 58.6664 56.341 58.6664 53.917V42.2583C58.6665 40.9958 58.2188 39.7742 57.4029 38.8108C56.5869 37.8474 55.4557 37.2047 54.2104 36.997L42.381 35.0263C41.256 34.8385 40.1003 35.0164 39.0838 35.5338C38.0672 36.0512 37.2433 36.8809 36.733 37.901L35.8104 39.749C35.4841 39.6687 35.1612 39.5753 34.8424 39.469C33.189 38.9197 30.893 37.789 28.5517 35.4477C26.2104 33.1063 25.0797 30.8103 24.5304 29.1543C24.3992 28.7629 24.2879 28.3651 24.197 27.9623H24.1944Z" fill="white" />
                    </svg>
                    <div className="text-wrapper">+91 123456789</div>
                </div>
                <div className={styles.mail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                        <path d="M10.6663 53.8337C9.19967 53.8337 7.94456 53.3119 6.90101 52.2683C5.85745 51.2248 5.33479 49.9688 5.33301 48.5003V16.5003C5.33301 15.0337 5.85567 13.7785 6.90101 12.735C7.94634 11.6914 9.20145 11.1688 10.6663 11.167H53.333C54.7997 11.167 56.0557 11.6897 57.101 12.735C58.1463 13.7803 58.6681 15.0354 58.6663 16.5003V48.5003C58.6663 49.967 58.1446 51.223 57.101 52.2683C56.0575 53.3137 54.8015 53.8354 53.333 53.8337H10.6663ZM31.9997 35.167L10.6663 21.8337V48.5003H53.333V21.8337L31.9997 35.167ZM31.9997 29.8337L53.333 16.5003H10.6663L31.9997 29.8337ZM10.6663 21.8337V16.5003V48.5003V21.8337Z" fill="white" />
                    </svg>
                    <div className="div">csi.it@nirmauni.ac.in</div>
                </div>
                <div className={styles.social_medias}>
                    {/* USE Standard icon library such as matrial icons svg should be last resort */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
                        <a href='https://www.instagram.com/csiitnu/' target='_blank'>
                            <g clip-path="url(#clip0_361_699)">
                                <path d="M75.0312 0H22.9688C10.2835 0 0 10.2835 0 22.9688V75.0312C0 87.7165 10.2835 98 22.9688 98H75.0312C87.7165 98 98 87.7165 98 75.0312V22.9688C98 10.2835 87.7165 0 75.0312 0Z" fill="url(#paint0_radial_361_699)" />
                                <path d="M75.0312 0H22.9688C10.2835 0 0 10.2835 0 22.9688V75.0312C0 87.7165 10.2835 98 22.9688 98H75.0312C87.7165 98 98 87.7165 98 75.0312V22.9688C98 10.2835 87.7165 0 75.0312 0Z" fill="url(#paint1_radial_361_699)" />
                                <path d="M49.0034 10.7188C38.607 10.7188 37.302 10.7643 33.2189 10.95C29.1435 11.1368 26.3616 11.7818 23.9277 12.7285C21.4096 13.7062 19.2738 15.0143 17.1462 17.1427C15.0166 19.2708 13.7085 21.4065 12.7278 23.9235C11.7784 26.3582 11.1326 29.1412 10.9492 33.2147C10.7666 37.2982 10.7188 38.6036 10.7188 49.0004C10.7188 59.3972 10.7647 60.698 10.95 64.7811C11.1375 68.8565 11.7826 71.6384 12.7285 74.0723C13.707 76.5904 15.0151 78.7262 17.1435 80.8538C19.2708 82.9834 21.4065 84.2945 23.9227 85.2722C26.3586 86.2189 29.1408 86.864 33.2155 87.0508C37.299 87.2365 38.6028 87.282 48.9989 87.282C59.3964 87.282 60.6972 87.2365 64.7803 87.0508C68.8557 86.864 71.6407 86.2189 74.0765 85.2722C76.5935 84.2945 78.7262 82.9834 80.8531 80.8538C82.9826 78.7262 84.2903 76.5904 85.2715 74.0735C86.2124 71.6384 86.8586 68.8557 87.05 64.7818C87.2334 60.6987 87.2812 59.3972 87.2812 49.0004C87.2812 38.6036 87.2334 37.299 87.05 33.2155C86.8586 29.1401 86.2124 26.3586 85.2715 23.9246C84.2903 21.4065 82.9826 19.2708 80.8531 17.1427C78.7239 15.0135 76.5943 13.7055 74.0742 12.7289C71.6338 11.7818 68.8504 11.1364 64.7749 10.95C60.6915 10.7643 59.3914 10.7188 48.9916 10.7188H49.0034ZM45.5692 17.6174C46.5887 17.6159 47.726 17.6174 49.0034 17.6174C59.2249 17.6174 60.4361 17.6542 64.4725 17.8375C68.2049 18.0083 70.2308 18.6319 71.5802 19.1559C73.3668 19.8496 74.6404 20.6791 75.9795 22.0194C77.3193 23.3592 78.1485 24.6351 78.8441 26.4217C79.3681 27.7692 79.9925 29.7951 80.1625 33.5275C80.3458 37.5631 80.3857 38.7751 80.3857 48.9916C80.3857 59.2081 80.3458 60.4204 80.1625 64.4557C79.9917 68.1881 79.3681 70.2139 78.8441 71.5618C78.1504 73.3484 77.3193 74.6205 75.9795 75.9596C74.6396 77.2994 73.3675 78.1286 71.5802 78.8226C70.2323 79.349 68.2049 79.9711 64.4725 80.1418C60.4369 80.3252 59.2249 80.365 49.0034 80.365C38.7816 80.365 37.57 80.3252 33.5348 80.1418C29.8023 79.9695 27.7765 79.3459 26.4259 78.8219C24.6397 78.1278 23.3634 77.2987 22.0236 75.9588C20.6837 74.619 19.8546 73.3461 19.159 71.5588C18.6349 70.2109 18.0106 68.185 17.8406 64.4526C17.6572 60.417 17.6205 59.205 17.6205 48.982C17.6205 38.7594 17.6572 37.5535 17.8406 33.5179C18.0113 29.7855 18.6349 27.7596 19.159 26.4102C19.853 24.6236 20.6837 23.3477 22.024 22.0079C23.3638 20.668 24.6397 19.8385 26.4263 19.1433C27.7757 18.6169 29.8023 17.9949 33.5348 17.8234C37.0662 17.6637 38.4348 17.6159 45.5692 17.6078V17.6174ZM69.438 23.9736C66.9018 23.9736 64.8442 26.0293 64.8442 28.5659C64.8442 31.102 66.9018 33.1596 69.438 33.1596C71.9741 33.1596 74.0317 31.102 74.0317 28.5659C74.0317 26.0297 71.9741 23.9721 69.438 23.9721V23.9736ZM49.0034 29.341C38.1469 29.341 29.3445 38.1434 29.3445 49.0004C29.3445 59.8573 38.1469 68.6555 49.0034 68.6555C59.8604 68.6555 68.6597 59.8573 68.6597 49.0004C68.6597 38.1438 59.8596 29.341 49.0027 29.341H49.0034ZM49.0034 36.2397C56.0506 36.2397 61.7641 41.9524 61.7641 49.0004C61.7641 56.0476 56.0506 61.7611 49.0034 61.7611C41.9559 61.7611 36.2432 56.0476 36.2432 49.0004C36.2432 41.9524 41.9559 36.2397 49.0034 36.2397Z" fill="white" />
                            </g>
                            <defs>
                                <radialGradient id="paint0_radial_361_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.0312 105.548) rotate(-90) scale(97.1253 90.3342)">
                                    <stop stop-color="#FFDD55" />
                                    <stop offset="0.1" stop-color="#FFDD55" />
                                    <stop offset="0.5" stop-color="#FF543E" />
                                    <stop offset="1" stop-color="#C837AB" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_361_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-16.4154 7.05944) rotate(78.681) scale(43.4155 178.96)">
                                    <stop stop-color="#3771C8" />
                                    <stop offset="0.128" stop-color="#3771C8" />
                                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                </radialGradient>
                                <clipPath id="clip0_361_699">
                                    <rect width="98" height="98" fill="white" />
                                </clipPath>
                            </defs>
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