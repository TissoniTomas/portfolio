import React from "react";

import TimelineEstudios from "../Timeline/Timeline";

const Tecnologias = ({ tecnologiasRef}) => {
  return (
    <>
    <div id="tecnologias" ref={ tecnologiasRef}>

    <TimelineEstudios/>
    </div>
    </>
  );
};

export default Tecnologias;

