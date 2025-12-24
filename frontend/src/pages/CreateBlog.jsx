import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("CSC NITJ");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    if (!title || !content) {
      alert("Title and content are required");
      return;
    }

    const blogData = {
      title,
      author,
      image,
      content,
      createdAt: new Date(),
    };

    console.log("BLOG DATA:", blogData);

    // future: axios.post("/api/blogs", blogData)
    alert("Blog ready to be published (backend not connected yet)");
  };

  return (
    <div className="min-h-screen bg-[#060b24] px-6 py-12">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link to="/dashboard" className="text-cyan-400 text-sm hover:underline">
          ← Back to Dashboard
        </Link>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mt-6 mb-8">
          Create New Blog
        </h1>

        {/* Title */}
        <input
          type="text"
          placeholder="Blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            w-full mb-6
            bg-transparent
            text-3xl md:text-4xl
            font-semibold
            text-white
            placeholder-gray-500
            outline-none
            border-b border-cyan-400/30
            focus:border-cyan-400
            pb-2
          "
        />

        {/* Meta Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="
              flex-1 px-4 py-2 rounded-lg
              bg-[#0b1120]
              text-gray-300
              border border-cyan-400/20
              focus:outline-none focus:border-cyan-400
            "
          />

          <input
            type="text"
            placeholder="Cover image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="
              flex-1 px-4 py-2 rounded-lg
              bg-[#0b1120]
              text-gray-300
              border border-cyan-400/20
              focus:outline-none focus:border-cyan-400
            "
          />
        </div>

        {/* Image Preview */}
        {image && (
          <div className="mb-6 rounded-xl overflow-hidden border border-cyan-400/20">
            <img
              src={image}
              alt="Preview"
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <textarea
          rows="14"
          placeholder="Write your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="
            w-full mb-8 p-4
            rounded-xl
            bg-[#0b1120]
            text-gray-300
            placeholder-gray-500
            border border-cyan-400/20
            focus:outline-none focus:border-cyan-400
            leading-relaxed
            resize-none
          "
        />

        {/* Action Bar */}
        <div className="flex justify-end gap-4">
          <Link
            to="/dashboard"
            className="
              px-6 py-2 rounded-lg
              border border-gray-500/30
              text-gray-400
              hover:text-white hover:border-gray-400
              transition
            "
          >
            Cancel
          </Link>

          <button
            onClick={handlePublish}
            className="
              px-6 py-2 rounded-lg
              bg-cyan-500 text-[#060b24]
              font-semibold
              hover:bg-cyan-400
              transition
            "
          >
            Publish
          </button>
        </div>

      </div>
    </div>
  );
}
