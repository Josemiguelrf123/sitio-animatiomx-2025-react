import { aboutanimaciondigital } from "@/data/aboutSection";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, icon, title, titleHighlight, text, text2, text3, text4, text5, lists } = aboutanimaciondigital;

const AboutNine1 = () => {
  return (
    <section className="about-nine" style={{ paddingBottom: '0px' }}>
      <div className="auto-container">
        <Row>
          <Col lg={6} className="animated fadeInLeft" style={{ alignSelf: 'center' }}>
            <div className="about-nine__image d-none d-md-block">
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
          <Col lg={6}>
            <div className="about-nine__content">
              <div className="about-nine__icon">
                <i className={icon}></i>
              </div>
              <h3 className="about-nine__title">
                {title.split(" ").map((t, i) => (
                  <Fragment key={i}>
                    {t === titleHighlight ? <span>{t}</span> : t}{" "}
                  </Fragment>
                ))}
              </h3>
              <p className="about-nine__summery">{text}</p>
              <p className="about-nine__summery2">{text2}</p>
              <p className="about-nine__summery">{text3}</p>
              <p className="about-nine__summery2">{text4}</p>
              <p className="about-nine__summery">{text5}</p>
              <ul className="list-unstyled about-nine__list">
                {lists.map((text, i) => (
                  <li key={i}>
                    <i className="flaticon-check"></i>
                    {text}
                  </li>
                ))}
              </ul>

              <a href="#" className="about-nine__btn thm-btn__seven">
                Explora aquí
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutNine1;
