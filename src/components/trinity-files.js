import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
  <div className="trinity-semester" style={{textAlign: "center"}}>
    
    {/** Name Of the Semester */}
    <h2>{semesterShorthand[name] || name}</h2>
    
    <div className="trinity-module-container">
    {modulesArr.map( module => 
      <Module 
        sectionsObj={module.sections} 
        name={module.name}
      />  
    )}
    </div>

  </div>
  )
}

function Module({sectionsObj, name}) {
  const sectionsArr = obj2arr(sectionsObj, "files")
  
  return (
    <div id={name.replaceAll(" ", "") } className="trinity-module">
      <h3>{name}</h3>
      <div className="trinity-sections-container">
      {sectionsArr.map( section => 
        <Section 
          files={section.files} 
          name={section.name}
        />
      )}
      </div>

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
    <div className="trinity-section">
      
      <h4 className="name"> {name} </h4>
      
      <ul className="trinity-files-list">
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
  <li className="trinity-file">
    <a href={file.publicURL} alt={file.name}> 
      {file.name}
    </a>
  </li>
  )
}

const TrinityFiles = ({semestersObj}) => {
  let semestersArr = obj2arr(semestersObj, "modules")
  
  // we want them in the right order
  const semesterShorthandNames = Object.keys(semesterShorthand)
  semestersArr = semestersArr.sort((a, b) => {
    const indexa = semesterShorthandNames.indexOf(a.name)
    const indexb = semesterShorthandNames.indexOf(b.name)
    return indexa - indexb
  })

  return (
    <div>

      <div className="full-center-flex light-section">
        <ul className="trinity-modules-list">

          {/* List all of the Semesters */}
          {semestersArr.map(semester => {
            const text = semester.name
            const modulesArr = obj2arr(semester.modules, "sections")
            return ( 
              <li key={text}>
                <AnchorLink to={`/trinity#${text}`} stripHash>{semesterShorthand[text]}</AnchorLink>
                <ul>

                  {/* List all of the modules in that semester */}
                  {modulesArr.map(module => {
                    const text = module.name                 
                    return ( 
                      <li key={text}>
                        <AnchorLink to={`/trinity#${text.replaceAll(" ", "") }`} stripHash>{text}</AnchorLink>
                      </li>
                    )}
                  )}

                </ul>
              </li>
            )}
          )}
        
        </ul>
      </div>
      
      {semestersArr.map( (semester, index) =>         
        <div id={semester.name}
            className={"full-center-flex " + ((index%2 === 1)?"light-section":"dark-section")}
            >
          <Semester modulesObj={semester.modules} name={semester.name}/>
        </div>
      )}
      
    </div>
  )
}

export default TrinityFiles