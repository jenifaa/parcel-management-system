import React, { useEffect } from "react";
const Reaction = () => {
    const comments = [
        "Fast and reliable delivery!",
        "My package arrived safely!",
        "Great tracking system, very accurate!",
        "Customer support was really helpful.",
        "Best parcel service I’ve used!",
        "Timely delivery, highly recommended!",
        "Seamless experience from booking to delivery.",
        "Excellent service, package was well-handled.",
        "Real-time tracking was a game-changer!",
        "Delivery was quicker than expected!",
        "Super responsive customer support.",
        "I trust this service for all my shipments.",
        "No delays, perfect delivery experience!",
        "Affordable and professional service!",
        "I appreciate the hassle-free process.",
        "My fragile items were delivered safely!",
        "Communication was clear and timely.",
        "Highly efficient and trustworthy service!",
        "I got real-time updates for my package.",
        "The best parcel service I’ve used so far!",
      ];
    

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      @keyframes slideUp {
        0% { transform: translateY(100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100%); opacity: 0; }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const getRandomPosition = () => ({
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
  });

  return (
    <div className="py-10">
      <p className="text-sm text-green-700 font-bold text-center">
        -- Love From customers
      </p>
      <h2 className="mb-10 mt-3 text-center font2 font-bold text-5xl">
       Our Customers Love From social Media
      </h2>
      
      <div className="relative h-[500px] w-full overflow-hidden ">
        <div className="absolute w-full h-full">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="absolute bg-green-950 text-[#ffff] p-4 shadow rounded-md"
              style={{
                animation: `slideUp 10s linear ${index * 1}s infinite`,
                ...getRandomPosition(),
              }}
            >
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reaction;
