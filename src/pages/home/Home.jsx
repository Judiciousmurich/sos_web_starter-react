import { Link } from 'react-router-dom'
import './Home.css'
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






    </>
  );
};

export default Home;
