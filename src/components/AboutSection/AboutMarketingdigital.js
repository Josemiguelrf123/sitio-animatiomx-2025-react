import { aboutmarketingdigital } from "@/data/aboutSection";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import AboutEightProgress from "./AboutEightProgress";

const { icon, title, titleHighlight, text, text2, text3, text4, text5, image, lists } = aboutmarketingdigital;

const AboutEight = () => {
  return (
    <section className="about-eight">
      <div className="auto-container">
        <Row>
          <Col lg={6}>
            <div className="about-eight__content">
              <div className="about-eight__icon">
                <i className={icon}></i>
              </div>
              <h3 className="about-eight__title">
                {title.split(" ").map((t, i) => (
                  <Fragment key={i}>
                    {t === titleHighlight ? <span>{t}</span> : t}{" "}
                  </Fragment>
                ))}
              </h3>
              <p className="about-eight__summery">{text}</p>
              <p className="about-eight__summery2">{text2}</p>
              <p className="about-eight__summery">{text3}</p>

              <ul className="list-unstyled about-eight__list">
                {lists.map((text, i) => (
                  <li key={i}>
                    <i className="flaticon-check"></i>
                    {text}
                  </li>
                ))}
              </ul>

              <p className="about-eight__summery">{text4}</p>
              <p className="about-eight__summery2">{text5}</p>

              <a href="#" className="about-eight__btn thm-btn__seven">
                Explora aquí
              </a>
            </div>
          </Col>
          <Col lg={6} className="animated fadeInRight" style={{ alignSelf: 'center' }}>
            <div className="about-eight__image d-none d-md-block">
              {/* Imagen */}
              {/* <Image src={image} alt="" /> */}
              {/* Video */}
              <iframe
                width="100%"  // Ajusta el tamaño
                height="626" // Ajusta el tamaño
                src="https://www.youtube.com/embed/U3jzmi3QJIQ?si=AvcMhyiYsuD5YGaq" // Cambia este enlace con tu video
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutEight;
