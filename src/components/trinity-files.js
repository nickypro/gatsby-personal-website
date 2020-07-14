import React from "react"

function obj2arr(obj, subsetname) {
  return Object.keys(obj)
    .sort()
    .map(itemName => 
    ({
      name: itemName, 
      [subsetname]: obj[itemName]
    })
  ) 
}

const semesterShorthand = {
  jf1: "Year 1 - Semester 1",
  jf2: "Year 1 - Semester 2",
  sf1: "Year 2 - Semester 1",
  sf2: "Year 2 - Semester 2",
  js1: "Year 3 - Semester 1",
  js2: "Year 3 - Semester 2",
  ss1: "Year 4 - Semester 1",
  ss2: "Year 4 - Semester 2",
}

function Semester({modulesObj, name}) {
  const modulesArr = obj2arr(modulesObj, "sections")
  
  return (
  <div className="trinity-modules-container">
    
    {/** Name Of the Semester */}
    <h2>{semesterShorthand[name] || name}</h2>

    {modulesArr.map( module => 
      <Module 
        sectionsObj={module.sections} 
        name={module.name}
      />  
    )}
  </div>
  )
}

function Module({sectionsObj, name}) {
  const sectionsArr = obj2arr(sectionsObj, "files")
  
  return (
    <div>
      <h3>{name}</h3>
      {sectionsArr.map( section => 
        <Section 
          files={section.files} 
          name={section.name}
        />
      )}

    </div>
  )
}

function Section({files, name}) {
  /* Sort the files first */
  const sortedFiles = files.sort((a,b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  /* Return a list of the files */
  return (
    <div>
      
      <h4> {name} </h4>
      
      <ul>
        {/* List all files for section */}
        {sortedFiles.map(file => 
          <File file={file}/>
        )}
      </ul>

    </div>
  )
}

function File({file}) {
  return ( 
  <li>
    <a href={file.publicURL} alt={file.name}> 
      {file.name}
    </a>
  </li>
  )
}

const TrinityFiles = ({semestersObj}) => {
  const semestersArr = obj2arr(semestersObj, "modules")

  return (
    <div>

      {/*
      <ul className="trinity-modules-list">
      {modules.map(text => 
        <li key={text}>{text}</li>
      )}
      </ul>
      */}
      {semestersArr.map( (semester, index) =>         
        <div className={"full-center-flex " + (index%2 === 0)?"light-section":"dark-section"}>
          <Semester modulesObj={semester.modules} name={semester.name}/>
        </div>
      )}
      
    </div>
  )
}

export default TrinityFiles