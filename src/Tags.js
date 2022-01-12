import React,{ useRef } from 'react'

export default function Tag({tags}){

const tag = useRef()
const tagEle = tag.current



ReactDOM.render(<boomdotdev className="tag"></boomdotdev>, tagEle)
ReactDOM.render(<task className="tag"></task>, tagEle)
ReactDOM.render(<tags className="tag"></tags>, tagEle)
ReactDOM.render(<react className="tag"></react>, tagEle)

return(
  <div ref={tag} className="tags"></div>
)

}