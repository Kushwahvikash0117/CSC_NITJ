import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs/my", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#060b24] text-white px-6 py-14">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold">Your Stories</h1>
            <p className="text-gray-400 mt-2">
              Write. Share. Secure the digital world.
            </p>
          </div>

          <Link
            to="/create-blog"
            className="
             px-6 py-2 rounded-lg
              bg-cyan-500 text-[#060b24]
             font-semibold
             hover:bg-cyan-400
              transition
            "
          >
           Write New
          </Link>
            
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-cyan-400/20 mb-10" />

        {/* Content */}
        {loading ? (
          <div className="text-center py-20 text-cyan-400 animate-pulse">
            Loading your blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-300">No blogs yet</h2>
            <p className="text-gray-500 mt-2">
              Start writing your first cybersecurity article.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog.slug || blog._id}`}
                className="group flex gap-6 items-start"
              >
                {/* Left Content */}
                <div className="flex-1">
                  <h2 className="
                    text-2xl font-semibold mb-2
                    group-hover:text-cyan-400 transition
                  ">
                    {blog.title}
                  </h2>

                  <p className="text-gray-400 line-clamp-2 mb-3">
                    {blog.excerpt || blog.content?.slice(0, 150) + "..."}
                  </p>

                  <div className="text-sm text-gray-500">
                    {blog.author} •{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Right Image */}
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="
                      w-32 h-24
                      object-cover
                      rounded-lg
                      border border-cyan-400/20
                      shrink-0
                    "
                  />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
