import React from 'react';

const BlogCard = ({ imageUrl, date, title, description }) => {
  return (
    <div className="latest-from-our-blog-container">
      <div className="latest-from-our-blog-image-container">
        <img src={imageUrl} alt={title} className="latest-from-our-blog-img" />
      </div>
      <div className="blog-content">
        <div className="blog-content-date">
          <svg className="blog-content-date--icon">
            <use xlinkHref="./media/images/sprite.svg#icon-calendar"></use>
          </svg>
          <p className="date">{date}</p>
        </div>
        <h4 className="latest-from-our-blog-title">{title}</h4>
        <p className="latest-from-our-blog-description">{description}</p>
        <div className="blog-bottom">
          <a href="#" className="latest-from-our-blog-btn">
            keep reading &rarr;
          </a>
          <div className="blog-participants"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
