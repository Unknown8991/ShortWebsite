import React from 'react';
import '../styles/DarkMode.scss'



const DarkMode = (props) => {
    
    return ( 
        <div className="dark-mode-position">
            <div onClick={props.click} className="dark-mode"><i className="fa fa-moon-o" aria-hidden="true"></i>
            </div>
        </div>
     );
}
 
export default DarkMode;