import PropTypes from 'prop-types';
import { List, Element, Button } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <>
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

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
