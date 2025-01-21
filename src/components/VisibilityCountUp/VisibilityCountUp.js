import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const VisibilityCountUp = ({ count }) => {
  const [countStart, setCountStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.1,    // Se activa cuando el 10% del elemento es visible
  });

  if (inView && !countStart) {
    setCountStart(true);
  }

  return (
    <div ref={ref}>
      <CountUp start={0} end={countStart ? count : 0} duration={2} />
    </div>
  );
};

export default VisibilityCountUp;
