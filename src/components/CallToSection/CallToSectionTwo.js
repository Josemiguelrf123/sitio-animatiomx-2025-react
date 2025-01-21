import Link from "next/link";
import React from "react";

const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <h2>
          Las grandes cosas en los negocios  <br />nunca las hace una sola persona, <br />las hace un equipo de personas. 
          </h2>
          <div className="link-box">
            <Link href="/contact">
              <a className={`theme-btn ${btnClassName}`}>
                <i className="btn-curve"></i>
                <span className="btn-title">Contáctanos Hoy</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSectionTwo;
