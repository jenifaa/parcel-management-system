import React from "react";
import icon from '../../../assets/icons/map.png'
const OurFeature = () => {
  return (
    <div className="my-10">
     <div className="flex items-center justify-between w-11/12 mx-auto">
     <div className="flex flex-col items-center p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className=" mb-4 bg-blue-100 rounded-full flex items-center justify-center">
          <img src={icon} alt="Icon" className="w-full h-[100px]" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Parcel Tracking
        </h3>

        <p className="text-gray-600 text-center">
          Track parcels in real-time from pickup to delivery.
        </p>
      </div>
     <div className="flex flex-col items-center p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className=" mb-4 bg-blue-100 rounded-full flex items-center justify-center">
          <img src={icon} alt="Icon" className="w-full h-[100px]" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Parcel Tracking
        </h3>

        <p className="text-gray-600 text-center">
          Track parcels in real-time from pickup to delivery.
        </p>
      </div>
     <div className="flex flex-col items-center p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className=" mb-4 bg-blue-100 rounded-full flex items-center justify-center">
          <img src={icon} alt="Icon" className="w-full h-[100px]" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Parcel Tracking
        </h3>

        <p className="text-gray-600 text-center">
          Track parcels in real-time from pickup to delivery.
        </p>
      </div>
     
     </div>
    </div>
  );
};

export default OurFeature;
