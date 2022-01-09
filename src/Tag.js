import React from 'react'

export default function Tag({tags}){

return(
  <div className="tags">
  <boomdotdev className="tag"></boomdotdev>
  <task className="tag"></task>
  <tags className="tag"></tags>
  <react className="tag"></react>
  {tags.map((t) => {
      return <t className="tag"></t>
  })}
  </div>
)

}