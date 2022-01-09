import React from 'react'

export default function Tag(props){

return(
  <div>
    <boomdotdev className="tag"></boomdotdev>
    <task className="tag"></task>
    <tags className="tag"></tags>
    <react className="tag"></react>
  {props.tags.map((t) => {
      return <t className="tag"></t>
  })}
  </div>
)

}