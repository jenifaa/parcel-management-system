import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const PaymentHistory = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
   
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div style={{ minHeight: 200 }}>
        <ReactConfetti
          gravity={0.1}
          numberOfPieces={200}
          opacity={1}
          recycle
          run
          width={windowSize.width}
          height={windowSize.height}
          wind={0}
          initialVelocityX={2}
          initialVelocityY={2}
        />
      </div>
      <div className="text-center text-green-800">
        <h2 className="lg:text-5xl text-3xl font-bold mb-4 ">Congratulation!!!</h2>
        <p className="">Payment Successful</p>
      </div>
    </div>
  );
};

export default PaymentHistory;
