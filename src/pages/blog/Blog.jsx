import React from 'react';
import BlogPost from './BlogPost'; // Import the BlogPost component

const blogData = [
  {
    imageUrl: './media/images/dessert.jpg',
    date: '23rd January 2023',
    title: 'How to Prepare the Best Dessert',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ex soluta unde animi velit excepturi. Fugiat nam aperiam sunt natus.',
  },
  // Add more blog posts as needed
];

const BlogContainer = () => {
  return (
    <section className="latest-from-our-blog">
      <h2 className="latest-from-our-blog-section-title" id="blog">
        Latest from Our Blog
      </h2>
      <div className="latest-from-our-blog-master-container">
        {blogData.map((item, index) => (
          <BlogPost
            key={index}
            imageUrl={item.imageUrl}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogContainer;
