import React from "react";

function Hero() {
  return (
    <section className="bg-[url('/src/assets/cyber-bg.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-accent mb-4">
          Welcome to CSC NITJ
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Explore the world of Cybersecurity, Events, and Blogs
        </p>
        <a href="/blog" className="bg-secondary text-primary px-6 py-3 rounded-full font-bold hover:bg-accent transition">
          Explore Blogs
        </a>
      </div>
    </section>
  );
}

export default Hero;
