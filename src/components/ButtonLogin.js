import React from 'react';


const ButtonLogin = (props) => {
    const styles = {
        block:{
            overflow: 'hidden',
        } 
    }
    return ( 
       <>
           {props.value.length >= 3 ?
           <button onClick={props.click} className="col-2 button-login">
            <a href="#scrolldown">➤</a> 
             </button> : <button style={styles.block} className=" col-2 button-login button-login--visible">
            <a href="#scrolldown">➤</a> 
            </button>
        }
       </>
     );
}
 
export default ButtonLogin;