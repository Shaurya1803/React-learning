import React, {useState} from 'react'
import axios from 'axios';
import {Routes, Route} from 'react'
const App = () => {
  
  const  [data, setData] = useState([])
  const getData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list');
       setData(response.data)
      console.log(data);
    } catch (error) {
      console.error(error); 
    }
  };

  return (
  
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
     
       <div>
    <Routes>
      <Route path='/' element={<home />} />
      <Route path='/about'/>
      <Route path='/contact'/>
      <Route path='/product'/>
    </Routes>
     </div>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold py-3 px-10 rounded'>
        Get data
      </button>
      <div className='mt-20 bg-teal-700 text-white font-semibold py-3 px-10 rounded'>
          {data.map(function(elem, idx){
            return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-7 rounded mb-3'>
                <img className='h-40' src={elem.download_url} alt="" />
                <h1 className='text-black'>{elem.author}</h1>
            </div>
          })}
      </div>
    </div>
  );
};

export default App;
