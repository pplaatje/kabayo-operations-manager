import update from 'immutability-helper'
import { useCallback, useState } from "react";
import ListItem from './ListItem';

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

const OrderableList = (props:any) => {

  const [ListItems, setListItems] = useState(props.items);
  
  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setListItems((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      }),
    )
  }, [])

  
  const renderItem = useCallback(
    (card: Item, index: number) => {
      console.log(card)
      return (
        <ListItem
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveItem={moveItem}
        />
      )
    },
    [],
  )
  
  return (
    
      <div>
      {
        ListItems.map((card:any, i:any) => {
          var c:Item = {
            id: card.id,
            text: card.entities.rider.displayName
          }
          return renderItem(c, i)
        })
      }
      </div>
  )
  
}

export default OrderableList;