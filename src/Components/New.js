// import React from 'react'
import React, { useState, useEffect } from 'react'

const New = () => {
  const biodata = [
    {
      id: 0,
      name: 'Peter Parker',
      Age: 25,
      home: 'NY',
    },
    {
      id: 1,
      name: 'iron Parker',
      Age: 25,
      home: 'NY',
    },
  ]

  const [name, setname] = useState(biodata)
  const clickmade = () => {
    // setname({ ...name, name: 'Tim Cook' })
    setname([])
  }
  const removelem = (id) => {
    // alert(id)
    // const newbiodata = () => {s
    const newbiodata = biodata.filter((ele) => {
      console.log(ele.id)
      return ele.id !== id
    })
    setname(newbiodata)
  }
  return (
    <>
      {name.map((nm) => {
        return (
          <div className="card" key={nm.id}>
            <div className="card-body">
              <h5 className="card-title">{nm.name}</h5>
              <p className="card-text">
                {nm.Age}, {nm.home}
              </p>
              {/* {console.log(nm.id)} */}
              <button className="btn red" onClick={() => removelem(nm.id)}>
                clear
              </button>
            </div>
          </div>
        )
      })}
      <button onClick={clickmade}>Clear console</button>
    </>
  )
}

export default New
