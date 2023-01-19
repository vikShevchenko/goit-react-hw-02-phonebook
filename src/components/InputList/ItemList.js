import PropTypes from 'prop-types'
import {List, Element, Button} from './ItemList.styled'

export const ItemList = ({ items, onDelete }) => {
  
  return (
    <>
    <h5>Contacts</h5>
    <List>
      {items.map(item => (
        <Element key={item.id}>
          {item.name}: {item.number}
          <Button onClick={() => onDelete(item.name)}>Delete</Button>
        </Element>
      ))}
    </List>
    </>
  );
};

ItemList.propTypes ={
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}
