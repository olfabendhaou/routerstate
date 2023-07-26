
import './Persons.css';

import React, { Component } from 'react';
// a class-based component.
class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Oussama Hidri',
        bio: 'MERN stack developer',
        imgSrc: 'https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/277247487_2456437561156990_2926814411132325054_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=plJpeqTEl80AX-aFaBO&_nc_ht=scontent.ftun10-1.fna&oh=00_AfBna8bCL8Wl1nk3VMFwFE_p5y7OipG6ljO27T9vvRxtVw&oe=644FFDC9',
        profession: 'Full Stack Developer'
      },
      show: false,
      mountedTime: new Date()
    };
  }
  // a field that shows the time interval since the last component was mounted using the component lifecycle
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div>
    { /*button that toggles the show state.*/}
      <button onClick={this.handleToggle} class="about-me">
   {/* When the show state is true, the person's profile will appear.*/}
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Show Profile</span>
        </button>
        {show && (
          <div>
            <img src={person.imgSrc} alt="Profile" width={200} height={200} />
            <h1>{person.fullName}</h1>
            <h2>{person.profession}</h2>
            <p>{person.bio}</p>
          </div>
        )}
        <p>Mounted at: {mountedTime.toLocaleString()}</p>
      </div>
    );
  }
}

export default Person;


