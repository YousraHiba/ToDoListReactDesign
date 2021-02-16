import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }
updateInput(key,value){
  this.setState({
    [key]:value
  })
}



// ------ Function to Add new Item ------ //
addItem(){
  const newItem = {
    id: 1 +Math.random(), // to generate a random Id 
    value: this.state.newItem.slice()
  };
  const list = [...this.state.list]
  list.push(newItem)
  this.setState({
    list,
    newItem:""
  })
}

// ------ Function to delet listed Item ------ //

deleteItem(id) {
  // copy current list of items
  const list = [...this.state.list];
  // filter out the item being deleted
  const updatedList = list.filter(item => item.id !== id);

  this.setState({ list: updatedList });
}

render() {
  return (
    <div>

    <h1 className="app-title">MY LIST</h1>
      
      <div className="container">
      <div
        style={{
          padding: 30,
          textAlign: "left",
          maxWidth: 500,
          margin: "auto"
        }}
      >
        <h3 className="container" >Add an Item...</h3>
        <br />
        {/*The input used to add new items*/}
        <input className="input"
          type="text"
          placeholder="Type item here"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        {/*The Button used to add new items*/}
        <button className = "addButton"
          onClick={() => this.addItem()}
          disabled={!this.state.newItem.length}
        >
          <i class="material-icons"> + </i>
        </button>
        <br /> <br />
        <ul>
          {/*The new list generated after the changes (add or delet items)*/}
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                {/*The Button used to delete new items*/}
                <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                  <i class="material-icons">x</i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}
}


export default App;
