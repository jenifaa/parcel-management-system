import useAuth from '@/Components/Hooks/useAuth';
import React from 'react';

const DeliveryManHome = () => {
  const {user} = useAuth()
  return (
    <div className="min-h-screen  p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Welcome, {user?.displayName}!
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          As a vital member of our logistics team, you play a key role in ensuring smooth and timely deliveries. This portal provides you with everything you need to track your deliveries, manage your tasks, and stay informed on your progress.
        </p>
        <p className="text-lg text-gray-600">
          Here’s what you can do to make the most of your role:
        </p>
      </div>

      {/* Section: Key Tasks */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Key Responsibilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Track Assigned Deliveries</h3>
            <p className="text-gray-600">
              Monitor your assigned deliveries and keep track of each parcel’s current status, destination, and customer details in real-time.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Delivery Status</h3>
            <p className="text-gray-600">
              Once you’ve delivered a parcel, you can easily mark it as "Delivered," allowing customers and the team to stay updated on your progress.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Real-Time Support</h3>
            <p className="text-gray-600">
              Encounter an issue during your delivery? Our support team is available to assist you at any time. Just click a button and get help instantly.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">View Delivery History</h3>
            <p className="text-gray-600">
              Track your completed deliveries, review ratings, and manage your past performance to see how well you’re doing and where you can improve.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Benefits */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Benefits of Being a Delivery Man</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Earnings</h3>
            <p className="text-gray-600">
              Receive competitive pay for every successful delivery. Plus, you’ll have the chance to earn bonuses based on your performance and customer satisfaction.
            </p>
          </div>
          <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Flexible Hours</h3>
            <p className="text-gray-600">
              Enjoy the freedom of choosing your working hours. Work as much or as little as you prefer, based on your schedule and availability.
            </p>
          </div>
          <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Incentives & Bonuses</h3>
            <p className="text-gray-600">
              Get rewarded for completing deliveries on time, handling customer requests professionally, and maintaining a positive attitude.
            </p>
          </div>
          <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Support Network</h3>
            <p className="text-gray-600">
              Access 24/7 support from our team. Whether you need assistance with a parcel or have a question about your payment, we’ve got your back.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 text-center p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Get Started Today!</h2>
        <p className="text-white mb-6">
          Take charge of your deliveries and start earning now! Log into your account and start making deliveries. Your customers are waiting!
        </p>
        {/* <button className="bg-white text-indigo-600 py-2 px-6 rounded-lg font-semibold hover:bg-indigo-200 transition">
          Log in to Start Delivering
        </button> */}
      </div>
    </div>
  );
};

export default DeliveryManHome;
