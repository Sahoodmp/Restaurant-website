import React from 'react';
import './App.css';
function App(){
  return(
    <div>
      <div id="Home">
        <h1> Restaurant name</h1>
  <nav>
  <a href='#Home'>Home</a>
  <a href='#About'>About</a>
  <a href='#Menu'>Menu</a>
  <a href='#Footer'>Contact</a>
  </nav>
</div>


<div id="About">
  <p>description about the restaurant, this restaurant is known for its delicious food and excellent service.</p>
</div>


<div id="Menu">
  <p>Noodles</p>
  <p>Biriyani</p>
  <p>Fried Rice</p>
</div>

<div id="Footer">
  <P>
    Email:- restaurantyen@gmail.com
    <br />
    Phone:- 9876544568
  </P>
</div>

</div>
  )
}
export default App;