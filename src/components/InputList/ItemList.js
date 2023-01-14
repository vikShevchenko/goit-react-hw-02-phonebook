import {List, Element, Button} from './ItemList.styled'
export const ItemList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <Element key={item.id}>
          {item.name} {item.number}
          <Button onClick={() => onDelete(item.name)}>Delete</Button>
        </Element>
      ))}
    </List>
  );
};
