import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const blogs = [
        {
          title: "How Parcel Management is Evolving in 2025",
          excerpt: "In this post, we discuss the key trends and innovations shaping the parcel management industry, and how businesses are adapting.",
          link: "/blog/post-1",
        },
        {
          title: "The Importance of Efficient Delivery Systems",
          excerpt: "Learn how optimizing your delivery systems can enhance customer satisfaction, reduce costs, and improve operational efficiency.",
          link: "/blog/post-2",
        },
        {
          title: "Top Technologies Driving Parcel Delivery Success",
          excerpt: "From AI-powered tracking to smart warehousing, discover the technologies transforming the parcel delivery process and boosting efficiency.",
          link: "/blog/post-3",
        },
        // Add more blogs here...
      ];
    
      return (
        <div className="bg-gray-100 dark:bg-gray-800  font py-28 ">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-8 dark:text-white">Our Blog</h1>
            <p className="text-xl text-center text-gray-700 mb-16 dark:text-white max-w-3xl mx-auto">
              Stay updated with the latest trends in parcel management, logistics technology, and best practices in the delivery industry. Our blog features insights from industry experts to help you streamline your parcel operations.
            </p>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-white lg:grid-cols-3 gap-16">
              {blogs.map((blog, index) => (
                <div key={index} className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-3xl font-semibold text-gray-900  mb-4">{blog.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{blog.excerpt}</p>
                  <a  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                    Read More
                  </a>
                </div>
              ))}
            </div>
    
            <div className="flex justify-center mt-16">
              <Link to="/about" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-300">
                Load More
              </Link>
            </div>
          </div>
        </div>
  );
};

export default Blog;
