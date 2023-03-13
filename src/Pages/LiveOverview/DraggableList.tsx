import update from 'immutability-helper'
import { useCallback, useState } from "react";
import ListItem from './ListItem';

export interface Item {
  content: any
}

export interface ContainerState {
  cards: Item[]
}

const DraggableList = (props:any) => {

  const [ListItems, setListItems] = useState(props.items);
  
  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    console.log("DragIndex", dragIndex);
    console.log("HoverIndex", hoverIndex);
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
    (card: any, index: number) => {
        return (
          <ListItem
            key={card.id}
            index={index}
            id={card.id}
            content={card.content}
            moveItem={moveItem}
          />
        )
    },
    [],
  )
  
  return (
      <div>
      {
        ListItems && ListItems.map((listItem:any, i:number) => {
          var c:Item = {
            content: listItem
          }
          return renderItem(c, i)
        })
      }
      </div>
  )
  
}

export default DraggableList;