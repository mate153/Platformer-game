import { useEffect } from 'react';
import './style/Home.css';

function Home() {

  useEffect(() => {
    const fetcingData = async() => {
      try{
        const res = await fetch('/api/test');
        const data = await res.json();
        console.log(data);
      }catch (err){
        console.log(err);
      }
    }
    fetcingData();

  }, [])

  return (    
    <div>
      <p>Home</p>
    </div>    
  )
}
  
export default Home;