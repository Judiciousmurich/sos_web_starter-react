import "./menu.css";
import { Link } from "react-router-dom";
const MenuCard = ({ image, title, description, price }) => {
  return (
    <div className="menu-card bg-[#dde0e0] items-center justify-center m-2">
      <div className="menu-card-image-container">
        <img src={image} alt={title} className="menu-card-image w-50%" />
      </div>
      <h3 className="menu-card-title  capitalize font-bold text-2xl mb-4">
        {title}
      </h3>
      <p className="menu-card-description text-center tracking-wide text-base row-start mb-4">{description}</p>
      <Link to ="" className="menu-card-cta rounded-[30px] px-4 py-2 bg-[#b10400] text-white capitalize text-base m-6 ">
        ${price} | order now
      </Link>
    </div>
  );
};

export default MenuCard;
