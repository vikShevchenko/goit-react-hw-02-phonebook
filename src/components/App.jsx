import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ItemForm } from './InputForm/ItemForm.js';
import { ItemList } from './InputList/ItemList.js';

export class App extends Component {
  state = {
    contacts: [],
  };

  addForm = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {id: nanoid(3), name, number }],
    }));
  };

   deleteItem = itemName => {
    //console.log(prevState)
    this.setState(prevState => ({
      
     contacts: prevState.contacts.filter(item => item.name !== itemName)
   }));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ItemForm onSubmit={this.addForm} />
        <ItemList items={this.state.contacts} 
        onDelete={this.deleteItem}/>
      </div>
    );
  }
}
