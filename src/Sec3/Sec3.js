import React from "react";
import { AiOutlineLink } from "react-icons/ai";

import "./Sec3.css";

const Sec3 = () => {
  return (
    <div className="main-container">
      <div className="div-left">
        <div className="div-left-top">
          <img
            src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
            alt="img"
            style={{ height: "398px", width: "100%" }}
          />
        </div>
        <div className="div-left-bottom">
          <h3>
            {" "}
            <AiOutlineLink /> lorem ipsum{" "}
          </h3>
          <h3>
            {" "}
            <AiOutlineLink /> lorem ipsum{" "}
          </h3>
          <h3>
            {" "}
            <AiOutlineLink /> lorem ipsum{" "}
          </h3>
        </div>
      </div>
      <div className="div-right">
        <div className="div-top-right">
          <p>
            Numquam. <span class="bold">Esse aliquip do, magni.</span>
          </p>
          <p className="tag">Minima ad for vitae sit</p>
          <p>Ipsum Lorem</p>
        </div>
        <div className="div-mid-right">
          <img
            src="https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg"
            alt="img"
            style={{ height: "161px", width: "100%" }}
          />
        </div>
        <div className="div-bottom-right">
          <button>
            <h4 style={{ color: "white" }}>
              <AiOutlineLink />Ipsum Lorem
            </h4>
          </button>
          <p>Adipisicing unde vel so dolore, consequatur.</p>
          <h4>Ipsum Lorem</h4>
        </div>
      </div>
    </div>
  );
};

export default Sec3;