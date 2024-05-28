import React from 'react';

const blogs = [
  {
    title: "First Blog Post",
    content: "This is the content of the first blog post. It provides some interesting insights and information.",
    author: "John Doe"
  },
  {
    title: "Second Blog Post",
    content: "This is the content of the second blog post. It provides some additional insights and information.",
    author: "John Doe"
  },
  {
    title: "Third Blog Post",
    content: "This is the content of the third blog post. It offers even more interesting insights and information.",
    author: "John Doe"
  }
];

const Blog = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl my-10">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Page</h1>
        {blogs.map((blog, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600">{blog.title}</h2>
            <p className="mt-2 text-gray-700">{blog.content}</p>
            <p className="mt-2 text-gray-500 text-right">- {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
