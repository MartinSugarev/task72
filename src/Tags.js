import React  from 'react'
import './Tags.css'

export default function Tags({tags}){


return(
  <>
    {tags.map((t, index) => {
      return <div key={index} className="tag">{'#' + t}</div>
    })}
  </>
)

}