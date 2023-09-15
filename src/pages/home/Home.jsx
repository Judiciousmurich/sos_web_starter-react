import { Link } from 'react-router-dom'
import './Home.css'
import Menu from '../menu/Menu';
const Home = () => {
  return (

    <>
      <div>
        <div className="home">
          <div>
            <h2 className='text-white font-bold text-5xl mb-2 capitalize'>Good food makes you life </h2>
            <h2 className='text-center font-bold mb-8 text-5xl  capitalize text-white'>good life. </h2>
            <div className='gap-6 text-center'>
              <Link to='/' className='bg-[#b10400] text-white px-3 py-2 rounded  font-bold  text-center'>Eat Now</Link>
              <Link to='/' className='text-white font bold px-6 py-2 rounded border-white'>Keep reading</Link>
            </div>
          </div>
        </div>
      </div>



      <Menu
        image="http://127.0.0.1:5501/media/images/hamburger.jpg"
        title="Barbecue"
        description="Savory, flame-kissed barbecue delights with a tantalizing blend of smoky flavors and tender, juicy perfection. Irresistible satisfaction awaits."
        price="20"
      
      />
      <Menu
       image="http://127.0.0.1:5501/media/images/dessert.jpg"
       title="Drinks"
       description="Refreshing drinks that quench your thirst with a burst of flavor and cool satisfaction on a hot day."
       price="25"/>
         <Menu
       image="http://127.0.0.1:5501/media/images/breakfast.jpg"
       title="Breakfast"
       description="Delicious morning meal, featuring a variety of flavors and textures, perfect to kickstart your day with satisfaction."
       price="30"/>
        <Menu
       image="http://127.0.0.1:5501/media/images/eat-pizza.jpg"
       title="Pizza"
       description="Savory slices of pizza, a symphony of melted cheese and vibrant toppings, deliver indulgence in every bite."
       price="35"/>
        <Menu
       image="http://127.0.0.1:5501/media/images/chapati.jpg"
       title="Chapati"
       description="Chapati: Soft, unleavened flatbread, a staple of Indian cuisine, perfect for scooping up flavorful curries and dishes."
       price="340"/>
        <Menu
       image="http://127.0.0.1:5501/media/images/chapati.jpg"
       title="Chapati"
       description="Chapati: Soft, unleavened flatbread, a staple of Indian cuisine, perfect for scooping up flavorful curries and dishes."
       price="340"/>


    </>
  );
};

export default Home;
