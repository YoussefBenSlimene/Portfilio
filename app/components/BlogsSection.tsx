import React from "react";

const BlogsSection = () => {
  const blogPosts = [
    {
      title: "What does it take to become a web developer?",
      excerpt:
        "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. It involves...",
      date: "10-Oct-2023",
      readTime: "14m",
      author: "Sinan Tokmak",
      tags: ["Web", "Development"],
      imageSrc: "/image.png",
    },
    {
      title: "What does it take to become a web developer?",
      excerpt:
        "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. It involves...",
      date: "10-Oct-2023",
      readTime: "14m",
      author: "Sinan Tokmak",
      tags: ["Web", "Development"],
      imageSrc: "/image.png",
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-[#121418] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Blogs</h2>
          <p className="text-gray-400 mb-6">
            My thoughts on technology and business, welcome to subscribe
          </p>
          <button className="px-6 py-2 border border-[#0ffbd2] text-[#0ffbd2] rounded-md hover:bg-[#0ffbd2]/10 transition-all">
            Subscribe My Blogs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#1e2029] rounded-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 overflow-hidden">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 hover:text-[#0ffbd2] transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <span className="inline-flex items-center">
                      <span className="mr-1">Web</span>
                      <span className="mx-1">•</span>
                      <span>Development</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>Date: {post.date}</span>
                    <span>Read: {post.readTime}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <a
                    href="#"
                    className="text-[#0ffbd2] text-sm hover:underline"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
