import React from 'react';
import Item from '../../../components/Item/Item';

class Items extends React.Component {
  render() {
    const { itemlist } = this.props;
    return (
      <>
        <ul className="items">
          {itemlist.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.image}
              color={item.color}
              is_new={item.is_new}
              is_conscious={item.is_conscious}
            />
          ))}
        </ul>
        <div>
          <button className="showMoreBtn">더 많은 제품 보기</button>
        </div>
      </>
    );
  }
}

export default Items;
