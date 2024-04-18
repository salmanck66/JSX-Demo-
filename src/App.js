import React from 'react';
import './App.css';

function App() {
  const jsx = "Shoezi - Ultimate Shoe Store";
  const like = [
    {
      "name": "Nike Air Max 270",
      "price": 150.00,
      "sizes": ["7", "7.5", "8", "8.5", "9", "9.5", "10"],
      "description": "The Nike Air Max 270 delivers visible air under every step. Updated for modern comfort, it nods to the original 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.",
      "picture": "https://contents.mediadecathlon.com/p2393886/f25b25ad650711334753a9888228cbea/p2393886.jpg?format=auto&quality=70&f=650x0"
    },
    {
      "name": "Nike React Infinity Run Flyknit",
      "price": 160.00,
      "sizes": ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
      "description": "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
      "picture": "https://contents.mediadecathlon.com/p2006788/8ff26bb9238a317671e10df111d7c129/p2006788.jpg?format=auto&quality=70&f=650x0"
    },
    {
      "name": "Nike Air Zoom Pegasus 38",
      "price": 120.00,
      "sizes": ["7", "7.5", "8", "8.5", "9", "9.5", "10"],
      "description": "The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor. Mesh in the upper combines the comfort and durability you want with a fit that nods back to the classic Peg.",
      "picture": "https://contents.mediadecathlon.com/p2155510/2d4c941c14f1be10172d8977107329a6/p2155510.jpg?format=auto&quality=70&f=650x0"
    },
    {
      "name": "Nike Air Force 1 '07",
      "price": 100.00,
      "sizes": ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
      "description": "The legend lives on in the Nike Air Force 1 '07, a modern take on the iconic AF1 that blends classic style and fresh details.",
      "picture": "https://contents.mediadecathlon.com/p2393841/97ec4616ea32d8eaa67ee3c30d2eafd2/p2393841.jpg?format=auto&quality=70&f=650x0"
    }
  ]
  
  
  return (
    <div className='App'>
      <h1 className='App-header'>{jsx}</h1>
      <div className='divv'>
      {like.map((likee,index) => (
        <div className='hello' key={index}>
          <h3>{likee.name}</h3>
          <img className='imgs' src={likee.picture}></img>
          <h3>RS {likee.price}</h3>
          <button>Buy Now</button>
        </div>

      ))}
      </div>
      <footer>
    </footer>
    </div>
  );
}

export default App;
