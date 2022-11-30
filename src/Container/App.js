import React, { Component } from "react";
import InputBar from "../Components/InputBar";
import ListItems from "../Components/ListItems";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputbartext: '',
      listofitems: [],
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ inputbartext: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault(); //this prevents the default behaviour of "onSubmit" - refreshing the page
    if (this.state.inputbartext.length === 0) {return} ;   
    const newItem = { id: Date.now(), item: this.state.inputbartext };
    this.setState(prevstate => ({
      listofitems: prevstate.listofitems.concat(newItem),
      inputbartext: ""
    }));
  };

  onDelete = (key) => {
    const deletedArray = this.state.listofitems.filter(item => item.id !== key);
     this.setState({listofitems: deletedArray,});
  }

  handleDone = (event) => {
    event.preventDefault();
    event.target.className === ''? event.target.className = "toDoListDone" : event.target.className = ""
  }

  render() {
    
    return (
      <div>
        <h1>To Do List:</h1>
        <h3>Get it done today!</h3>
        <InputBar
          value={this.state.inputbartext}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <ListItems listofitems={this.state.listofitems} onDelete = {this.onDelete} handleDone = {this.handleDone}/>
      </div>
    );
  }
}

export default App;
