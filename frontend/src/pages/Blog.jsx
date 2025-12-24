import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegComment } from "react-icons/fa";

const blogs = [
  {
    id: "ethical-hacking",
    title: "Introduction to Ethical Hacking",
    excerpt:
      "Learn what ethical hacking is, why it matters, and how it helps secure modern systems.",
    author: "CSC NITJ",
    date: "Sept 12, 2025",
    readTime: "6 min read",
    likes: 124,
    comments: 18,
    image: "/src/assets/blogs/ethical-hacking.jpg",
  },
  {
    id: "cyber-awareness",
    title: "Cyber Awareness for Students",
    excerpt:
      "Basic cyber hygiene practices every student must follow in daily digital life.",
    author: "Cyber Team",
    date: "Sept 18, 2025",
    readTime: "5 min read",
    likes: 89,
    comments: 11,
    image: "/src/assets/blogs/cyber-awareness.jpg",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#060b24] py-14">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-10">
          CSC Blogs
        </h1>

        {/* Blog List */}
        <div className="space-y-12">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="block">
              <div className="flex justify-between gap-6">

                {/* LEFT CONTENT */}
                <div className="flex-1">

                  {/* Author */}
                  <div className="text-sm text-gray-400 mb-2">
                    {blog.author}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-snug">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-base leading-relaxed line-clamp-2 mb-4">
                    {blog.excerpt}
                  </p>

                  {/* Meta + Like/Comment */}
                  <div className="flex items-center justify-between text-sm text-gray-500">

                    {/* Date & Read Time */}
                    <div>
                      {blog.date} · {blog.readTime}
                    </div>

                    {/* Likes & Comments */}
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 hover:text-cyan-400 transition">
                        <FaRegHeart className="text-sm" />
                        {blog.likes}
                      </span>

                      <span className="flex items-center gap-1 hover:text-cyan-400 transition">
                        <FaRegComment className="text-sm" />
                        {blog.comments}
                      </span>
                    </div>

                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-[160px] h-[105px] flex-shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
