import React from "react";
import BlogCard from "./BlogCard";
import BlogIndicator from "./BlogIndicator";

const BlogCardGroup = () => {
  const blogCards = [
    {
      id: 1,
      label: "Design",
      subTitle: "Become a broadcast master",
      Title: "Real talk in a corporate world",
    },
    {
      id: 2,
      label: "Thinking",
      subTitle: "Insight and inspiration",
      Title: "How to boost productivity",
    },
    {
      id: 3,
      label: "Manage",
      subTitle: "Become a project management",
      Title: "Quality assurance in project management",
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-10 md:gap-20 py-10 md:py-20 max-w-[1200px] mx-auto px-0 md:px-5">
        <h2 className="text-2xl md:text-3xl font-futura font-bold text-black-PRIMARY">
          Best of The week
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {blogCards.map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
        </div>
        <BlogIndicator />
      </div>
    </section>
  );
};

export default BlogCardGroup;