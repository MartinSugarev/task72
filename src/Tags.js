import React  from 'react'

export default function Tag({tags}){


return(
  <div className="tags">
    {tags.map((t) => {
      return <div className="tag">{'#' + t}</div>
    })}
  </div>
)

}