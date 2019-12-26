import React, {Component} from 'react'
import Photo from './Photo'



function PhotoWall(props) {
    return <div className="photogrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
}


export default PhotoWall