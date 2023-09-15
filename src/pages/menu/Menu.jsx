
const Menu = ({ title, menuItems }) => {
    return (
      <section className="menu-section">
        <section className="subtitle" id="menu">
          {title}
        </section>
        <div className="menu-container">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>
    );
  };

  export default Menu;