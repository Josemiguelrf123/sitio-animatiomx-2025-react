import React from "react";
import { Col, Row } from "react-bootstrap";
import DiapositivaContenido from "./DiapositivaContenido";
import SidebarSide2 from "./SidebarSide2";

const ContenedorPaginaSistemas = ({ service = {} }) => {
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={8} md={12} sm={12} className="content-side">
            <DiapositivaContenido service={service} />
          </Col>
          <Col lg={4} md={12} sm={12} className="sidebar-side">
            <SidebarSide2 />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContenedorPaginaSistemas;
