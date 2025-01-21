import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ContentSide = ({ service = {} }) => {
  const {
    image,
    title,
    text1,
    featuredImage,
    featuredTitle,
    featuredTitle2,
    featuredTitle3,
    featuredTitle4,
    featuredTitle5,
    featuredTitle6,
    featuredTitle7,
    featuredTitle8,
    featuredTitle9,
    featuredTitle10,
    featuredTitle11,
    featuredTitle12,
    featuredTitle13,
    featuredTitle14,
    featuredTitle15,
    featuredTitle16,
    featuredTitle17,
    featuredTitle18,
    featuredTitle19,
    featuredText,
    featuredText2,
    featuredText3,
    featuredText4,
    featuredText5,
    featuredText6,
    features,
    features2,
    features3,
    features4,
    features5,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12,
    text13,
    text14,
    text15,
  } = service;

  return (
    <div className="service-details">
      <div className="main-image image">
        <Image src={image} alt="" />
      </div>
      <div className="text-content">
        <h1>{title}</h1>
        <p>{text1}</p>
        <div className="featured">
          <Row className="clearfix">
            <Col md={12} sm={12} className="text-col">
              <div className="inner">
                <h2>{featuredTitle}</h2>
                <p>{featuredText}</p>
                <p>{featuredText2}</p>
                <ul>
                  {features.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <p>{text2}</p>
        <h2>{featuredTitle2}</h2>
        <h3>{featuredTitle3}</h3>
        <p className="last">{text3}</p>
        <p></p>
        <h3>{featuredTitle4}</h3>
        <p className="last">{text4}</p>
        <p></p>
        <h3>{featuredTitle5}</h3>
        <p className="last">{text5}</p>
        <p></p>
        <h2>{featuredTitle6}</h2>
        <p className="last">{text6}</p>
        <p></p>
        <div className="inner">
          <h3>{featuredTitle7}</h3>
          <p>{featuredText3}</p>
          <ul>
            {features2.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
        <div className="inner">
          <h3>{featuredTitle8}</h3>
          <p>{featuredText4}</p>
          <ul>
            {features3.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
        <div className="inner">
          <h3>{featuredTitle9}</h3>
          <p>{featuredText5}</p>
          <ul>
            {features4.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
        <h3>{featuredTitle10}</h3>
        <p className="last">{text7}</p>
        <p></p>
        <div className="inner">
          <h3>{featuredTitle11}</h3>
          <p>{featuredText6}</p>
          <ul>
            {features5.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
        <h3>{featuredTitle12}</h3>
        <p className="last">{text8}</p>
        <p></p>
        <h2>{featuredTitle13}</h2>
        <p></p>
        <h3>{featuredTitle14}</h3>
        <p className="last">{text9}</p>
        <p></p>
        <h3>{featuredTitle15}</h3>
        <p className="last">{text10}</p>
        <p></p>
        <h3>{featuredTitle16}</h3>
        <p className="last">{text11}</p>
        <p></p>
        <h3>{featuredTitle17}</h3>
        <p className="last">{text12}</p>
        <p></p>
        <h3>{featuredTitle18}</h3>
        <p className="last">{text13}</p>
        <h2>{featuredTitle19}</h2>
        <p className="last">{text14}</p>
        <p></p>
        <p className="last">{text15}</p>
        <p></p>
      </div>
    </div>
  );
};

export default ContentSide;
