import React from 'react';
import '../styles/MainPage.scss';
import HeaderText from './HeaderText';
import ButtonLogin from './ButtonLogin';


class MainPage extends React.Component {

    state = {
        name: '',
        isActive: false,
        header: false,

    }
    handleChange = (e) =>{
        const guestName = e.target.value;
        this.setState({
            name: guestName,
        })
      }

    handleSetActive =(e) =>{
        this.setState({
            isActive: true,
        })    
    }

      render() { 

          return (
                
                <div>
                    <HeaderText value={this.state.name} isactive={this.state.isActive}/>
                    <div className="col-12 form-name">
                        <input 
                            type="text"
                            placeholder="Wpisz swoje imię"
                            className="col-8 form-input"
                            value={this.state.name}
                            onChange={this.handleChange}
                            onClick={this.handleSetActive}
                            maxLength="13"
                        />
                        <ButtonLogin value={this.state.name} />                    
                    </div>
                </div>
   
               

        )
    }
}
export default MainPage;
 
