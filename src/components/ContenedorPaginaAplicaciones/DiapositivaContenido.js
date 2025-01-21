import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const DiapositivaContenido = ({ service = {} }) => {
  const {
    image,
    image2,
    image3,
    image4,
    image5,
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
    featuredTitle20,
    featuredTitle21,
    featuredTitle22,
    featuredTitle23,
    featuredTitle24,
    featuredTitle25,
    featuredTitle26,
    featuredTitle27,
    featuredTitle28,
    featuredTitle29,
    featuredText,
    featuredText2,    
    features,
    features2,
    features3,
    features4,  
    features5, 
    features6, 
    features7, 
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
    text16,
    text17,   
    text18, 
    text19, 
    text20, 
    text21, 
    text22, 
    text23, 
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
                <p>{text2}</p>
                <h3>{featuredTitle2}</h3>
                <p>{text3}</p>
                <ul>
                  {features.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <h3>{featuredTitle3}</h3>
                <p>{text4}</p>
                <h3>{featuredTitle4}</h3>
                <p>{text5}</p>
                <ul>
                  {features2.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <p>{text6}</p>
              </div>
            </Col>
          </Row>
        </div>                 
        <div className="featured">
          <Row className="clearfix">
            <Col md={12} sm={12} className="text-col">
              <div className="inner">
                <h2>{featuredTitle5}</h2>
                <h3>{featuredTitle6}</h3>
                <p>{text7}</p>
                <h3>{featuredTitle7}</h3>
                <p>{text8}</p>                
                <h3>{featuredTitle8}</h3>
                <p>{text9}</p>
                <h3>{featuredTitle9}</h3>
                <p>{text10}</p>           
                <h3>{featuredTitle10}</h3>     
                <p>{text11}</p>
              </div>
            </Col>
          </Row>
        </div>          
        <div className="featured">
          <Row className="clearfix">
            <Col md={12} sm={12} className="text-col">
              <div className="inner">
                <h2>{featuredTitle11}</h2>
                <h3>{featuredTitle12}</h3>
                <ul>
                  {features3.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <h3>{featuredTitle13}</h3>
                <ul>
                  {features4.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>               
                <h3>{featuredTitle14}</h3>
                <ul>
                  {features5.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <h3>{featuredTitle15}</h3>
                <ul>
                  {features6.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>          
                <h3>{featuredTitle16}</h3>     
                <ul>
                  {features7.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>    
        <div className="featured">
          <Row className="clearfix">
            <Col md={12} sm={12} className="text-col">
              <div className="inner">
                <h2>{featuredTitle17}</h2>
                <h3>{featuredTitle18}</h3>
                <p>{text12}</p>
                <h3>{featuredTitle19}</h3>
                <p>{text13}</p>                
                <h3>{featuredTitle20}</h3>
                <p>{text14}</p>
                <h3>{featuredTitle21}</h3>
                <p>{text15}</p>           
                <h3>{featuredTitle22}</h3>     
                <p>{text16}</p>
              </div>
            </Col>
          </Row>
        </div>               
        <div className="featured">
          <Row className="clearfix">
            <Col md={12} sm={12} className="text-col">
              <div className="inner">
                <h2>{featuredTitle23}</h2>
                <h3>{featuredTitle24}</h3>
                <p>{text17}</p>
                <h3>{featuredTitle25}</h3>
                <p>{text18}</p>                
                <h3>{featuredTitle26}</h3>
                <p>{text19}</p>
                <h3>{featuredTitle27}</h3>
                <p>{text20}</p>           
                <h3>{featuredTitle28}</h3>     
                <p>{text21}</p>
              </div>
            </Col>
          </Row>
        </div>               
        <div className="featured">
          <Row className="clearfix">
            <Col md={12} sm={12} className="text-col">
              <div className="inner">
                <h2>{featuredTitle29}</h2>               
                <p>{text22}</p>
              </div>
            </Col>
          </Row>
        </div>                                 
      </div>
      <div className="main-image image">
        <Image src={image2} alt="" />
      </div>
     
      <div className="main-image image">
        <Image src={image3} alt="" />
      </div>
   
      <div className="main-image image">
        <Image src={image4} alt="" />
      </div>
 
      <div className="main-image image">
        <Image src={image5} alt="" />
      </div>
      
    
    </div>
  );
};

export default DiapositivaContenido;
