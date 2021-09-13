import React from 'react';
import '../styles/HeaderText.scss';
const HeaderText = (props) => {
    const styles = {
        textmove: {
          marginTop: '140px',
          transition: 'all .5s ease-out',
          fontSize: '38px',
        },
      }
    return ( 
        <div>
            <div 
                style={props.isactive ? styles.textmove : null}
                className="header-text"> Hello{props.value.length === 0 ?
                ".." : ` ${props.value}`}
            </div>
        </div>
     );
}
 
export default HeaderText;

