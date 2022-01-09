import React from 'react'

export default function Tag({tags}){

return(
  <div>
  <boomdotdev></boomdotdev>
  <task></task>
  <tags></tags>
  <react></react>
  {tags.map((t) => {
      return <t></t>
  })}
  </div>
)

}