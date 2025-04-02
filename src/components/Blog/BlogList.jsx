import BlogCard from "./BlogCard";

export default function BlogList({ blogs, isMobile }) {
  return (
    <div
      className={`grid gap-10 my-14 ${
        isMobile
          ? "grid-cols-1 md:grid-cols-2 lg:hidden"
          : "hidden lg:grid grid-cols-3"
      }`}
    >
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          date={blog.date}
          description={blog.description}
        />
      ))}
    </div>
  );
}
