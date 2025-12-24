import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="bg-primary rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-300 mb-4">{blog.description}</p>
        <Link to={`/blog/${blog._id}`} className="text-secondary font-semibold hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
