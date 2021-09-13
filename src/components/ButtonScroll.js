import React from 'react';
import '../styles/ButtonScroll.scss'
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();
window.scrollTo({
  behavior: "smooth"
});


const ButtonScroll = (props) => {
    return ( 
       <div className="button-position">
        <button className="button-scroll" id="scrolldown" onClick={props.click}>
           <a href="#section">↓</a> 
        </button>
       </div>
     );
}
 
export default ButtonScroll;