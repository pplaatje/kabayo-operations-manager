import DraggableList from "./DraggableList"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import LiveOverviewRow from "./LiveOverviewRow"

const LiveOverview = () => {

  const riderList = [
    {
      "id": "1",
      "status": "In ring",
      "entities": {
        "rider": {
          "displayName": "Jula Plaatje",
          "displayNationality": "NL"
        },
        "horse": {
          "displayName": "Magic Bluebell",
          "gender": "mare",
          "age": "14",
          "classification": "D",
          "pedigree": {
            "father": {
              "displayName": "Unknown"
            },
            "mother":  {
              "displayName": "Unknown"
            }
          }
        }
      }
    },
    {
      "id": "2",
      "status": "Inrijden",
      "entities": {
        "rider": {
          "displayName": "Ella Plaatje",
          "displayNationality": "NL"
        },
        "horse": {
          "displayName": "Fioni fiona",
          "gender": "mare",
          "age": "11",
          "classification": "B",
          "pedigree": {
            "father": {
              "displayName": "Unknown"
            },
            "mother":  {
              "displayName": "Unknown"
            }
          }
        }
      }
    },
    {
      "id": "3",
      "status": "Inrijden",
      "entities": {
        "rider": {
          "displayName": "Patrick Plaatje",
          "displayNationality": "NL"
        },
        "horse": {
          "displayName": "Flush",
          "gender": "stallion",
          "age": "8",
          "classification": "P",
          "pedigree": {
            "father": {
              "displayName": "Unknown"
            },
            "mother":  {
              "displayName": "Unknown"
            }
          }
        }
      }
    }
  ]
  
  const programList = [
    {
      "id": "1",
      "section": {
        type: "text",
        content: "Parcours verkennen 0,50cm - 0,70cm"
      },
      "status": "active"
    },
    {
      "id": "1",
      "section": {
        type: "list",
        content: riderList
      },
      "status": "next"      
    },
    {
      "id": "1",
      "section": {
        type: "text",
        content: "Prijsuitreiking"
      },
      "status": "upcoming"
    }
  ];
  
  const itemList = riderList.map((programItem) => {
    return (
      <LiveOverviewRow
        id={programItem.id}
        riderName = {programItem.entities.rider.displayName}
        horseName = {programItem.entities.horse.displayName}
        horseAge = {programItem.entities.horse.age}
        horseGender = {programItem.entities.horse.gender}
        horseClassification = {programItem.entities.horse.classification}
        combinationStatus={programItem.status}
      />
    )
  })
  
  return (
    <div>
      <div>
        <h1>Pony's springen 0,60m</h1>
      </div>
      <DndProvider backend={HTML5Backend}>
        <DraggableList items={itemList} />
      </DndProvider>
      <div>
        <h1>Pony's springen 0,70m</h1>
      </div>
      <DndProvider backend={HTML5Backend}>
        <DraggableList items={itemList} />
      </DndProvider>
    </div>
  )
}

export default LiveOverview;