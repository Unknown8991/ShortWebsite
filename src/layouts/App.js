import React, { Component } from 'react';
import Hint from '../components/Hint';
import MainPage from '../components/MainPage';
import BubbleBacground from '../components/BubbleBackgroud';
import Sections from '../components/Sections';
import Caption from '../components/Caption';
import ButtonScroll from '../components/ButtonScroll';
import DarkMode from '../components/DarkMode';
import '../styles/App.scss';
import 'smoothscroll-anchor-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    isHint: false,
    isActive: false,
    scroll: false,
    darkmode: false,
  }
  handleShowHint = () =>{
    this.setState({
      isHint: !this.state.isHint,
    })
  }
  handleChangeActiveScroll = () =>{
    this.setState({
      scroll: true,
    })
  }
  handleChangeDarkMode = () =>{
    this.setState({
      darkmode: !this.state.darkmode,
    })
}

  
  render() {
    const styles = {
      style: {
        color: 'white',
        backgroundImage:'linear-gradient(to left top, rgb(55, 9, 94), rgb(0, 0, 0))',
      }
    }
    return (
      <div style={this.state.darkmode ? styles.style : null} className="App" >
        <Hint darkMode={this.state.darkmode} click={this.handleShowHint} hint={this.state.isHint}/>
        <DarkMode darkMode={this.state.darkmode} click={this.handleChangeDarkMode}/>
        <div className="container home">
          <MainPage darkMode={this.state.darkmode}/>
          <ButtonScroll click={this.handleChangeActiveScroll}/>
          <div className="content">
          <Caption darkMode={this.state.darkmode} activeCaption={this.state.scroll}/>
          <Sections/>
          </div>
          <BubbleBacground/>
        </div>
      </div>
    );
  }
}

export default App;
