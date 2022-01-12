import React  from 'react'
import './Tags.css'

export default function Tags({tags}){


return(
  <div className="tags">
    {tags.map((t, index) => {
      return <div key={index} className="tag">{'#' + t}</div>
    })}
  </div>
)

}