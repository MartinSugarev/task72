import React from 'react'

export default function Tag(props){

const el = (<boomdotdev className="tag"></boomdotdev>);
const el1 = (<task className="tag"></task>)
const el2 = (<tags className="tag"></tags>)
const el3 = ( <react className="tag"></react>)



ReactDOM.render(el, document.getElementById("tags"))
ReactDOM.render(el1, document.getElementById("tags"))
ReactDOM.render(el2, document.getElementById("tags"))
ReactDOM.render(el3, document.getElementById("tags"))

return(
  <div className="tags">
      {props.tags}
  </div>
)

}