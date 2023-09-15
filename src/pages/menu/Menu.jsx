import'./menu.css'
const Menu = ({ image, title, description, price }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image-container">
        <img src={image} alt={title} className="menu-card-image" />
      </div>
      <h3 className="menu-card-title">{title}</h3>
      <p className="menu-card-description">{description}</p>
      <a href="#" className="menu-card-cta">${price} | order now</a>
    </div>
  );
};

export default Menu;
