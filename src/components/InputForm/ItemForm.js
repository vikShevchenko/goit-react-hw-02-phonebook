import PropTypes from 'prop-types'
import {Heading, Container, Title, Button} from './ItemForm.styled'

export const ItemForm = ({ onSubmit }) => {
  const hendleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
  };
  return (
    <><Heading>Phonebook</Heading>
    <Container>
    <form onSubmit={hendleSubmit}>
      <Title>Name</Title>
      <input
      type="text" 
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <Title>Number</Title>
      <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button>Add contact</Button>
    </form>
    </Container>
    </>
  );
};

ItemForm.propTypes ={
  onSubmit: PropTypes.func.isRequired
}