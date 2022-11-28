import React, { Component } from "react";
import InputBar from "./InputBar";
import ListItems from "./ListItems";
import UndoButton from "./UndoButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputbartext: "",
      listofitems: [],
      undolist: [],
      done: false
    };
  }

  handleChange = (event) => {
    this.setState({ inputbartext: event.target.value });
  };
oYo
  onSubmit = (event) => {
    event.preventDefault(); //this prevents the default behaviour of "onSubmit" - refreshing the page
    if (this.state.inputbartext.length === 0) {return} ;   
    const newItem = { id: Date.now(), item: this.state.inputbartext };
    this.setState(prevstate => ({
      listofitems: prevstate.listofitems.concat(newItem),
      inputbartext: "",
    }));
  };

  onDelete = (key) => {
    const deletedArray = this.state.listofitems.filter(item => item.id !== key);
    const undoArray = this.state.listofitems.filter(item => item.id === key);
     this.setState(prevstate => ({listofitems: deletedArray, undolist: prevstate.undolist.concat(undoArray)}));
     console.log(this.state.undolist);
  }

  handleComplete = (event) => {
    this.setState({done: !this.state.done})
    console.log(event.target)
  }

  render() {
    const toggleDone = this.state.done ? "toDoListDone" : "none";
    return (
      <div>
        <h1>To Do List:</h1>
        <h3>Get it done today!</h3> <UndoButton/>
        <InputBar
          value={this.state.inputbartext}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <ListItems listofitems={this.state.listofitems} onDelete = {this.onDelete} toggleDone = {toggleDone}
        handleComplete = {this.handleComplete}/>
      </div>
    );
  }
}

export default App;
