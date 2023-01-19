import { nanoid } from 'nanoid';
import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ItemForm } from './InputForm/ItemForm.js';
import { ItemList } from './InputList/ItemList.js';
import Filter from './Filter/Filter.js';
//-------------------------------------------------------
const Global = createGlobalStyle`
*{margin: 0px;
  padding: 0px;
  box-sizing: border-box; 
}`;

//------------------------------------------------------

  const cont = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]



export class App extends Component {
  state = {
    contacts: cont,
    filter: ''
  };

  addForm = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(3), name, number }],
    }));
  };

  deleteItem = itemName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.name !== itemName),
    }));
  };
  //=========================================================================
  addData = (data) => {
     console.log(data)
     this.setState((prev) => ({
       filter: prev.contacts.filter(val => val.name === data)
     }));
     
   }
  //=========================================================================
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
        <Global />
        <ItemForm onSubmit={this.addForm} />
        <Filter onInput={this.addData} rendering={this.state.filter}/>
        <ItemList items={this.state.contacts} onDelete={this.deleteItem} />
      </div>
    );
  }
}
