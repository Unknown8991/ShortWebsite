import React from 'react';
import '../styles/Hint.scss';

const Hint = (props) => {
    const styles ={
        scaleHint: {
            width: '230px',
            height: '100px',
            transition: 'all .5s ease-out',
            textAlign: 'center',
        },
        darkmode: {
            background:'#7E00B7' 
        }
    }
    return (
        <div className="col-12 header">
            
            <div 
                style={props.hint ? styles.scaleHint : null} 
                className={props.darkMode ? "semicircular semicircular--darkmode hint" : "semicircular"} onClick={props.click}>
            {props.hint ?<div>Wpisz imię, aby przejść dalej
                <div className="wagging"> <span role="img" aria-label="emoji">✋</span></div>
            </div>
                 : '✋' 
                }
            </div>

        </div>
    )
}
 
export default Hint;
 
