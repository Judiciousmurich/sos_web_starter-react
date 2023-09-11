import { Link} from 'react-router-dom'

const Home = () => {
  return (
  
   <>
   <div>
   <div className="bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] bg-cover bg-center min-h-screen flex items-center justify-center bg-no-repeat">
  <img src="http://127.0.0.1:5501/media/images/breakfast.jpg" alt="breakfast"  />
  </div>

  
<div>
  <h2>Good food makes you live good life.</h2>
  <div>
    <Link to='/'>Eat Now</Link>
    <Link to='/'>Keep reading</Link>
  </div>
</div>
   </div>
   


</>
  );
};

export default Home;
