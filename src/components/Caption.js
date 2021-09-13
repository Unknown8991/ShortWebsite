import React from 'react';
import '../styles/Caption.scss'


const Caption = (props) => {
    const styles ={
        title: {
            fontSize: '80px',
            transition: 'all .5s ease-out',
            transitionDelay: '0.2s',
            textAlign: 'center',
        },
        text: {
            fontSize: '18px',
            paddingLeft: '0px',
            transition: 'all .5s ease-out',
            transitionDelay: '0.5s',
            textAlign: 'center',
        }  
    }
    return ( 
        <div className="caption">
        {props.activeCaption ? <h1 style={styles.title} className={props.darkMode ? "caption-header caption-header--darkmode" : "caption-header"}>Uff </h1> : <h1 className={props.darkMode ? "caption-header caption-header--darkmode" : "caption-header"}>Uff</h1>}
        {props.activeCaption ?  <p style={styles.text} className="caption-header__text">Tutaj dowiesz się czegoś o mnie<span role="img" aria-label="emoji">🙊</span></p> : <p className="caption-header__text">Tutaj dowiesz się czegoś o mnie<span role="img" aria-label="emoji">🙊</span></p>}
    </div>
     );
}
 
export default Caption;