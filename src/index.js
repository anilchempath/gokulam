import React from 'react';
import {render} from 'react-dom';
import { Carousel } from 'react-bootstrap';
import './index.css'
// import assets1 from '../assets/1.jpg';
// import assets2 from '../assets/2.jpg';
// import assets3 from '../assets/3.jpg';

class App extends React.Component {
  render () {
    return <Carousel>
    <Carousel.Item>
      <img  className= "crimg" width={1024} height={500} alt="900x600" src="http://images.locanto.in/1381998444/GUNTUR-Marriage-Events_7.jpg"/>
      </Carousel.Item>
    <Carousel.Item>
      <img className= "crimg" width={1024} height={500} alt="900x600" src="http://www.liquidspace.in/images/gallery/weddings/largeone/1.jpg"/>
      <Carousel.Caption>
            <h2>Stage shows</h2>
      </Carousel.Caption>
      </Carousel.Item>

    <Carousel.Item>
      <img className= "crimg" width={1024} height={500} alt="900x600" src="http://www.phalakevents.com/images/marriage/10b.jpg"/>
      </Carousel.Item>
  </Carousel>
  }
}

render(<App/>, document.getElementById('app'));