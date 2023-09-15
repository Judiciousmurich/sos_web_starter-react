import { Link } from 'react-router-dom';
import backgroundImage from '../../media/images/breakfast.jpg'; 

const Home = () => {
  return (
    <div className="home bg-gradient-to-r from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.5)] to-transparent min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.5)] to-transparent"></div>
      <div className="flex justify-center items-center h-full relative z-10">
        <div className="text-center text-white">
          <h2 className="font-bold text-5xl mb-2 capitalize">Good food makes your life</h2>
          <h2 className="font-bold mb-8 text-5xl capitalize">good life.</h2>
          <div className="gap-6 text-center">
            <Link to="/" className="bg-[#b10400] text-white px-3 py-2 rounded font-bold text-center">Eat Now</Link>
            <Link to="/" className="text-white font-bold px-6 py-2 rounded border-white">Keep reading</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    </div>
  );
};

export default Home;
