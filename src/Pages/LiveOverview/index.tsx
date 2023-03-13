import DraggableList from "./DraggableList"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import LiveOverviewRow from "./LiveOverviewRow"
import TextOverviewRow from "./TextOverviewRow"

import './css/style.css'


const riderList = [
  {
    "id": "1",
    "status": "Active",
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
    "status": "In ring",
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
,
  {
    "id": "4",
    "status": "Inrijden",
    "entities": {
      "rider": {
        "displayName": "Hilda Boersma",
        "displayNationality": "NL"
      },
      "horse": {
        "displayName": "Gironne Z",
        "gender": "mare",
        "age": "6",
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
    "title": "Pony's springen 0,60m - 0,70m",
    "sections": [{
      id: 1,
      type: "text",
      content: "Parcours verkennen"
    },{
      id: 2,
      type: "list",
      content: riderList,
      height: 0.6,
      status: "active"
    },{
      id: 3,
      type: "text",
      content: "Parcours ophogen"
    },{
      id: 4,
      type: "list",
      content: riderList,
      height: 0.7
    },{
      id: 5,
      type: "text",
      content: "Prijsuitreiking"      
    }],
    "status": "active"
  },
  {
    "id": "2",
    "title": "Pony's springen 0,80m",
    "sections": [{
      id: 1,
      type: "list",
      content: riderList,
      height: 0.8
    }],
    "status": "next"      
  },
  {
    "id": "3",
    "title": "Pony's springen 0,90m",
    "sections": [{
      id: 1,
      type: "list",
      content: riderList,
      height: 0.9
    },{
      id: 2,
      type: "text",
      content: "Prijsuitreiking"
    }],
    "status": "upcoming"
  }
];

const LiveOverview = () => {
  
  const itemList = (riderList:any, programItem:any) => {
    if(typeof riderList !== 'undefined'){
      const rl = riderList.content.map((combination:any) => { 
        const id = programItem.id+"-"+combination.id;
        let combinationStatus = "";
        if(programItem.status === "active" && riderList.status === "active"){
          combinationStatus = combination.status;
        }
        return (
          <LiveOverviewRow
            id = {id}
            riderName = {combination.entities.rider.displayName}
            horseName = {combination.entities.horse.displayName}
            horseAge = {combination.entities.horse.age}
            horseGender = {combination.entities.horse.gender}
            horseClassification = {combination.entities.horse.classification}
            height = {riderList.height}
            combinationStatus={combinationStatus}
          />
        )
      })
      return rl;
    }
  }
  
  return (
    <div className="page">
      <div className="header">
        <h1>Klein Concourse Hippique - Sjaerdema-Liaukemaruiters</h1>
        <div>
          Date
        </div>
      </div>
    {
      programList.map((programItem) => {
        return (
          <div key={`${programItem.id}`} className="programItem">
            <h2>{ programItem.title }</h2>
            { 
            programItem.sections.map((section:any) => {
              switch(section.type){
              case "list":
                return (
                  <DndProvider backend={HTML5Backend} key={`dndProvider`}>
                    <DraggableList items={itemList(section, programItem)} />
                  </DndProvider>
                )
              case "text":
                return (
                  <TextOverviewRow text={ section.content } className="textItemRow" />
                )
              }
          })}
          </div>
        )
      })
    }
    </div>
  )
}

export default LiveOverview;