import React from 'react';
import '../styles/Sections.scss'
import reactlogo from '../images/react.png'
import htmllogo from '../images/html-5.svg'
import csslogo from '../images/css-3.svg'
import scsslogo from '../images/sass.svg'
import javalogo from '../images/javascript.svg'
import vuelogo from '../images/icons8-vue-js.svg'
import gitlogo from '../images/github.svg'
import instalogo from '../images/instagram.svg'

const styles = {
    style: {
        fontSize: '35px',
        paddingBottom: '4px',
        transition: 'all .5s ease-out',
        animation: 'none',
    },

}
class Sections extends React.Component {
    state = {
        isLocked: true,
    }
    handleOpen = () =>{
        this.setState({
            isLocked: false,
        })
    }
    render() { 
        
        return <div className="sections col-md-12" id="section">
            <div className="slide col-md-3">
                <h1 className="slide__title">Mam na imię Rafał</h1>
                <article className="slide__content">Jestem samoukiem na frontendzie.
                Strona powstała w oparciu o framework React.js.
                Zagadnienia jakie zostały wykorzystane w tym 
                projekcie to:
                <br/>- Prop(sy) i state,
                <br/>- Create React App,
                <br/>- Komponenty React,
                <br/>- System kontrolii wersji GIT,
                <br/>- Mobile first,
                <br/>- Grid system,
                <br/>- Keyframes,
                <br/>- Bootstrap,
                <br/>- SCCS,
                <br/>- RWD,

                </article>
            </div>
            <div className="slide col-md-3">
                <h1 className="slide__title slide__title--tech">Moje technologie</h1>
                <div className="slide__content">
                <div className="col-sm-12 images">
                    <div className="col-sm-4">   
                        <img src={reactlogo} alt="" />
                        <article>React.js</article>  
                    </div>
                    <div className=" col-sm-4">   
                        <img src={htmllogo} alt="" />
                        <article>Html5</article>  
                    </div>
                    <div className=" col-sm-4">   
                     <img src={csslogo} alt="" /> 
                     <article>CSS3</article> 
                    </div>
                </div>
                <div className="col-sm-12 images">
                    <div >   
                        <img src={scsslogo} alt="" /> 
                        <article>SASS</article> 
                    </div>
                    <div>   
                        <img src={javalogo} alt="" /> 
                        <article>JavaScript</article> 
                    </div>
                    <div>   
                        <img src={vuelogo} alt="" />  
                        <article>Vue.js</article>
                    </div>
                </div>

                <div>   
                    <img src={gitlogo} alt="" />  
                    <article>GitHub</article>
                </div>
            </div>
            </div>
            <div className="slide col-md-3">
            <h1 className="slide__title">Social media</h1>
            <p className="slide__content">
                Moje projekty znajdziesz na GitHub
                <div className="col-sm-12">
                    <i className="fa fa-github icon" aria-hidden="true"></i>
                    <div>
                        <a className="link" href="https://github.com/Unknown8991">
                        github.com/Unknown8991
                        </a>
                    </div>
                </div>
                <div className="col-sm-12">
                    <p className="priv"> Tutaj priv <span role="img" aria-label="emoji">😈</span></p>
                    <div className="row">
                        {/* <div className="col-12 locked" onClick={this.handleOpen}>🔒</div> */}
                        {this.state.isLocked ?  <div className="col-12 locked" onClick={this.handleOpen}><span role="img" aria-label="emoji">🔒</span></div> :  <div className="col-12 locked" style={styles.style} ><span role="img" aria-label="emoji">🔓</span></div>}
                        {!this.state.isLocked ? <div className="icon-visible" >
                            <img src={instalogo} alt="instagram" />
                            <div><a className="link" href="https://www.instagram.com/patkowskifs/">patkowskifs</a></div>
                        </div> : null}
                    </div>

                </div>

            </p>
            </div>
        </div>;
    }
}
 
export default Sections;