import React from 'react';
import Item from './Item/Item';

class Items extends React.Component {
  render() {
    return (
      <>
        <ul className="items">
          {this.props.itemlist.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              // img={item.main_image}
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
