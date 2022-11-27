import React, { Component } from "react";
import InputBar from "./InputBar";
import ListItems from "./ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputbartext: "",
      listofitems: [],
      undolist: []
    };
  }

  handleChange = (event) => {
    this.setState({ inputbartext: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault(); //this prevents the default behaviour of "onSubmit" - refreshing the page
    const newItem = { id: Date.now(), item: this.state.inputbartext };

    this.setState({
      listofitems: this.state.listofitems.concat(newItem),
      inputbartext: "",
    });
    console.log(this.state.listofitems);
  };

  onDelete = (key) => {
    const deletedArray = this.state.listofitems.filter(item => item.id !== key)
    const undoArray = this.state.listofitems.filter(item => item.id === key)
     this.setState({listofitems: deletedArray, undolist: this.state.undolist.concat(undoArray)})
     console.log("undo",undoArray)
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
        <ListItems listofitems={this.state.listofitems} onDelete = {this.onDelete} />
      </div>
    );
  }
}

export default App;
