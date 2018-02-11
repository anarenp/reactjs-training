import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imagename from './imagename.jpg';
import groceries from './groceries.jpg';

import TodoItem from './TodoItems.js'

class App extends Component {
  render() {
    return (
      
<div className="App">
    
    <HandleaClick/>
    <Biography/>
    <GroceryList/>
    <StudyList/>
    <TodoItem/>
    <Clock/>
    <SuperAgent/>

    
   </div>
  );
    }
}

class Biography extends React.Component {

render() {
    return (
      
   <div>
    
    <img src={imagename} style= {{width: 100, height: 100}}/>

    <p>Name: Naren</p> 

    <p>Hobbies: nothing</p> 
    <hr/>
   </div>
  );
    }
}



class StudyList extends React.Component {

render() {
  const topics = ['HTML','Node','React'];
    return (
      
   <div className = "App">

   <p>Topics to Study</p>
   <ul>
      <li>{topics[0]}</li>
      {topics.map(topic=><li>{topic}</li>)}
    </ul>
    <hr/>
   </div>
  );
    }
}

class GroceryList extends React.Component {

  handleClick(data,event){
      alert('Hello I am clicked !');

  }
render() {
    return (
      
   <div>
    
    <img src={groceries} style= {{width: 100, height: 100}}/>

    <p>Grocery List</p> 

    <ul>
      <li> Orange Juice</li>
      <li> Spinach</li>
      <li> Ice cream</li>
    </ul>


    <p>Orange juice</p> 
    <p>Spinach</p> 
    <p>Ice Cream</p> 
    <hr/>
    <br/>
    <p>React JS is awesome</p>
    
    <p> Copyright @ Naren</p>
    <hr/> 
   </div>
  );
    }
}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p className="App-clock">
        The time is {this.state.time}.
      </p>
    );
  }
}

class SuperAgent extends React.Component {

constructor() {
    super();

    this.state = {
      randomQuote:null
    }
  }



 componentDidMount(){


request.get('https://talaikis.com/api/quotes/random/')
.end((error, result) => {this.setState({

 randomQuote:result.body.quote

})

})


}

render() {
    return (
      
 

<div>
        <p> Quotes display here</p>

        {this.state.randomQuote}
      </div>



);
    }
}






class HandleaClick extends React.Component{

    handleClick() {
        alert('Hello I am clicked');
  }

  render() {
      return(
        <div className="HandleaClick">
          <button onClick={this.handleClick.bind(this)}>
            Click Me!
          </button>
        </div>

      );


  }
}


export default App;