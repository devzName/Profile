import { APP_LINK, APP_LNG } from '../common/helpers'
import { useTranslation } from 'react-i18next'
import { useState } from "react"
import MailchimpForm from "./MailchimpForm"
import { Dropdown, Form } from 'react-bootstrap'
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import telegram from "../assets/img/telegram.svg"
import lngKingdom from "../assets/img/lng-kingdom.png"
import lngVietnam from "../assets/img/lng-vietnam.png"
import { Container, Row, Col } from "react-bootstrap"

const Footer = (props) => {
    const { t, i18n } = useTranslation('common')
    const [countries]   = useState([
        { code: lngKingdom, title: 'English', lng: APP_LNG.english },
        { code: lngVietnam, title: 'Tiếng Việt', lng: APP_LNG.vietnamese }
    ])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        LOGO
                        {/* <img src={logo} alt="Logo" /> */}
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href={APP_LINK.facebook} target="_blank"><img src={navIcon2} alt="facebook" /></a>
							<a href={APP_LINK.telegram} target="_blank"><img src={telegram} alt="telegram" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                        <Form>
                            <Dropdown
                                className="my-dropdown-toggle"
                            >
                                <Dropdown.Toggle
                                    variant="rimary"
                                    id="dropdown-flags"
                                    className="text-left"
                                    style={{ width: 150 }}
                                >
                                    {
                                        countries.filter(language => language.lng == i18n.language).map(({ code, title, lng }) => (
                                            <Dropdown.Item key={title} eventKey={title}> 
                                                <img src={code} alt="Lng" style={{height: "16px", width: "16px"}}/> {title}
                                            </Dropdown.Item>
                                        ))
                                    }                                        
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        countries.filter(language => language.lng != i18n.language).map(({ code, title, lng }) => (
                                            <Dropdown.Item key={title} eventKey={title} onClick={() => changeLanguage(lng)}> 
                                                <button>
                                                    <img src={code} alt="Lng" style={{height: "16px", width: "16px"}}/> <span>{title}</span>
                                                </button>
                                            </Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer