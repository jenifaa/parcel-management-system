import { useEffect, useState } from "react";
import CountUp from "react-countup";


const OurServices = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div className="text-center text-xl font-bold py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 dark:bg-black font mb-20">
      {/* Features Section */}
      {/* <section className="pt-12 pb-8 px-6">
        <div className="lg:w-11/12 mx-auto text-center">
          <h2 className="text-sm font-bold mb-2 text-blue-500">Our Features</h2>
          <h2 className="text-5xl font-bold mb-16">Our Services at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white px-4 pb-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center p-5 items-center">
                  <img
                    src={feature.image}
                    className="w-full h-52 object-cover rounded-md"
                    alt={feature.title}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <div
        style={{ backgroundImage: `url(/achievement-bg.jpg)` }}
        className="h-screen bg-fixed bg-cover bg-center relative mt-20 mb-20 sm:mb-5"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 lg:px-64 py-10">
          <h2 className="text-5xl font-bold text-center text-white mb-12">
            Achievements Unlocked
          </h2>
          <div className="w-full text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data.achievements.map((stat) => (
              <div
                key={stat.id}
                className="text-center px-4 py-4 border rounded-lg flex flex-col justify-center items-center bg-gray-900 bg-opacity-75"
              >
                <div className="text-6xl mb-4">{getIcon(stat.icon)}</div>
                <h3 className="text-md font-semibold mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold">
                  <CountUp end={stat.count} duration={3} separator="," />
                </p>
                <p className="text-sm mt-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};


// const getIcon = (icon) => {
//   const icons = {
//     FaUserFriends: <FaUserFriends className="text-[#8613ab]" />,
//     HiOutlineUserGroup: <HiOutlineUserGroup className="text-[#be1b16]" />,
//     MdOutlineAttachMoney: <MdOutlineAttachMoney className="text-yellow-500" />,
//     IoPersonSharp: <IoPersonSharp className="text-blue-500" />,
//     IoTicketSharp: <IoTicketSharp className="text-[#13ab9d]" />,
//   };
//   return icons[icon] || <IoTicketSharp className="text-white" />;
// };

export default OurServices;
