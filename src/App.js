import React, { Component } from 'react';
import img from './WhatsApp_Image_2023-10-31_at_4.18.27_PM-removebg-preview.png'
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Omatseye Dede',
      bio: 'Junior Fullstack Developer at Gomycode Nigeria',
      imgSrc: img,
      profession: 'fullstack Developer'
    },
    show: false,
    mountedTime: 0
  };

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ mountedTime: prevState.mountedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className="App">
        <button className='btn' onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div className='card'>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img style={{width:'200px'}} src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
            <p>Time since mount: {mountedTime} seconds</p>
          </div>
        )}
        
      </div>
    );
  }
}

export default App;