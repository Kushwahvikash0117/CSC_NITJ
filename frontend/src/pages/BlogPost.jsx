import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";

const blogData = {
  "ethical-hacking": {
    title: "Introduction to Ethical Hacking",
    author: "CSC NITJ",
    date: "September 12, 2025",
    readTime: "7 min read",
    image: "/src/assets/blogs/ethical-hacking.jpg",
    content: `
Ethical hacking is the practice of identifying security vulnerabilities
in systems with the permission of the owner.

Ethical hackers help organizations strengthen their defenses by simulating
real-world attacks. These professionals follow legal and moral guidelines
to improve cybersecurity.

Learning ethical hacking builds skills in networking, operating systems,
web security, and problem-solving.

---

### What Ethical Hackers Do

- Find vulnerabilities
- Report security issues
- Improve defenses

---

Ethical hacking is not about breaking into systems illegally — it’s about
making them safer.

> “Security is not a product, but a process.” – Bruce Schneier
    `,
  },

  // other blog data here...
};

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogData[id];

  const [likes, setLikes] = useState(120);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 bg-[#060b24]">
        Blog not found
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleComment = () => {
    if (!commentText.trim()) return;
    setComments([...comments, commentText.trim()]);
    setCommentText("");
  };

  return (
    <div className="bg-[#060b24] text-gray-200 min-h-screen px-6 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link to="/blog" className="text-cyan-400 hover:underline text-sm">
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-bold text-white leading-tight">
          {blog.title}
        </h1>

        {/* Author + Meta */}
        <div className="mt-2 text-sm text-gray-400 flex items-center gap-3">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        {/* Featured Image */}
        <div className="mt-6 rounded-xl overflow-hidden border border-cyan-500/30">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full object-cover"
          />
        </div>

        {/* Interaction */}
        <div className="flex items-center gap-6 mt-6 text-gray-400">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 hover:text-cyan-300"
          >
            {liked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
            {likes}
          </button>

          <div className="flex items-center gap-1">
            <FaRegComment />
            {comments.length}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert text-lg mt-8 space-y-6 leading-relaxed">
          {blog.content.split("\n\n").map((para, i) => (
            para.startsWith("---") ? (
              <hr key={i} className="border-gray-600" />
            ) : (
              <p key={i}>{para}</p>
            )
          ))}
        </div>

        {/* Comment Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Comments</h2>

          <textarea
            rows="3"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment…"
            className="w-full p-3 rounded-lg bg-[#0b1120] border border-cyan-500/30 text-gray-200"
          />

          <button
            onClick={handleComment}
            className="mt-3 px-5 py-2 bg-cyan-500 text-[#060b24] font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Post Comment
          </button>

          <div className="mt-6 space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-500">No comments yet.</p>
            ) : (
              comments.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b1120] p-4 rounded-lg border border-cyan-500/20"
                >
                  {c}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
