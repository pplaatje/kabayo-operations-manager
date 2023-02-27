import OrderableList from "./OrderableList"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const LiveOverview = () => {
  
  const riderList = [
    {
      "id": "1",
      "entities": {
        "rider": {
          "displayName": "Jula Plaatje",
        },
        "horse": {
          "displayName": "Magic Bluebell"  
        }
      },
      "displayNationality": "NL"
    },
    {
      "id": "2",
      "entities": {
        "rider": {
          "displayName": "Ella Plaatje",
        },
        "horse": {
          "displayName": "Fioni fiona"  
        }
      },
      "displayNationality": "NL"
    },
    {
      "id": "3",
      "entities": {
        "rider": {
          "displayName": "Patrick Plaatje",
        },
        "horse": {
          "displayName": "Flush"  
        }
      },
      "displayNationality": "NL"
    }
  ]
  
  
  
  return (
    <DndProvider backend={HTML5Backend}>
      <OrderableList items={riderList} />
    </DndProvider>
  )
}

export default LiveOverview;