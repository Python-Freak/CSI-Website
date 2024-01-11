import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./Navbar.module.css"

function Navbar__() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className={`bg-body-tertiary ${styles.navbar__}`}>
            <Navbar.Brand href="/">
                <div className="row">
                    <div className="col">
                        <img className={styles.logo} src="/assets/images/CSI_LOGO.png" alt="CSI LOGO" />
                    </div>
                    <div className="col" style={{ marginLeft: 20 }}>
                        <div className="col">
                            <div className="row" style={{ color: "white", marginTop: 2 }}>
                                Computer Society of India
                            </div>
                            <div className={`row ${styles.small_font}`}>
                                Nirma University Student Chapter
                            </div>
                        </div>

                    </div>
                </div>
            </Navbar.Brand >

            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: 5 }} />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.right}>
                <Nav.Link href="#home" className={styles.nav_links}>Events</Nav.Link>
                <Nav.Link href="#link" className={styles.nav_links}>Blogs</Nav.Link>
                <Nav.Link href="#home" className={styles.nav_links}>Contact Us</Nav.Link>
                <Nav.Link href="#link" className={styles.nav_links}>About Us</Nav.Link>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Navbar__;