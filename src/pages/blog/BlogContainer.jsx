
const BlogContainer = () => {
    return (
      <section className="latest-from-our-blog">
        <h2 className="latest-from-our-blog-section-title capitalize" id="blog">
          Latest from Our Blog
        </h2>
        <div className="latest-from-our-blog-master-container">
          {blogData.map((item, index) => (
            <BlogCard
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
 
  
  
  
  
  
  