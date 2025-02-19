const OurServices = () => {
  const data = {
    features: [
      {
        title: "Secure & Safe Delivery",
        image: "/secure.png",
        description:
          "We prioritize security with advanced tracking and strict safety protocols. Your parcel is monitored from pickup to delivery, ensuring complete protection against loss or damage.",
      },
      {
        title: "Speedy Service",
        image: "/parcel.png",
        description:
          "Our optimized logistics and efficient routes guarantee ultra-fast delivery. We offer same-day, next-day, and express delivery options to cater to urgent requirements.",
      },
      {
        title: "Real-Time Tracking",
        image: "/icon.png",
        description:
          "Get instant updates on your parcel’s journey with our real-time GPS tracking system. You can monitor the location, estimated arrival time, and current status of your package.",
      },
      {
        title: "Package Insurance",
        image: "/boXLottie.png",
        description:
          "Your valuables are safe with us! We offer insurance coverage for lost, stolen, or damaged packages.",
      },
      {
        title: "24/7 Customer Support",
        image: "/support.png",
        description:
          "Our dedicated support team is available round the clock to assist you with tracking, bookings, or any inquiries you may have.",
      },
      {
        title: "Eco-Friendly Packaging",
        image: "/eco.png",
        description:
          "We promote sustainability with eco-friendly, biodegradable packaging options to minimize environmental impact.",
      },
      {
        title: "Cash on Delivery (COD)",
        image: "/cod.png",
        description:
          "Customers can choose the COD option for a seamless and convenient payment experience.",
      },
      {
        title: "Bulk & Business Shipping",
        image: "/business.png",
        description:
          "Special pricing and dedicated logistics support for businesses handling bulk shipments regularly.",
      },
      {
        title: "International Shipping",
        image: "/global.png",
        description:
          "We provide international shipping services, making it easy to send parcels across borders with customs assistance.",
      },
      {
        title: "Door-to-Door Pickup",
        image: "/pickup.png",
        description:
          "Convenience at its best! Schedule a pickup from your location, and our team will collect your parcel at your preferred time.",
      },
    ],
    achievements: {
      backgroundImage: "/achievement-bg.jpg",
      stats: [
        { title: "Users Registered", icon: "👥", value: 75000 },
        { title: "Parcels Delivered", icon: "📦", value: 118500 },
        { title: "Revenue Generated", icon: "💰", value: "$400K" },
        { title: "Drivers Assigned", icon: "🚛", value: 25 },
        { title: "Support Tickets Resolved", icon: "🎫", value: 18000 },
        { title: "Businesses Partnered", icon: "🏢", value: 500 },
        { title: "Positive Customer Reviews", icon: "🌟", value: 50000 },
        { title: "Packages Picked Up", icon: "📍", value: 35000 },
        { title: "Countries Served", icon: "🌍", value: 25 },
        { title: "Express Deliveries Completed", icon: "⚡", value: 82000 },
      ],
    },
  };

  return (
    <section className="py-28 px-6 bg-gray-100 dark:bg-gray-800 dark:text-white">
      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font dark:text-white font-bold text-center mb-6">
          🚀 Our Key Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              {/* <img
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4"
              /> */}
              <h3 className="text-lg dark:text-black font-semibold text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div
        className="max-w-6xl mx-auto mt-12 p-10 rounded-lg bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${data.achievements.backgroundImage})`,
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">🏆 Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.achievements.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/60 p-6 rounded-lg text-center shadow-lg"
            >
              <p className="text-3xl">{stat.icon}</p>
              <h3 className="text-lg font-semibold mt-2">{stat.title}</h3>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
