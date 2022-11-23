import React from 'react'

export default function Button({ ...props }) {
    return (
        <button type="button" className="btn btn-info" onClick={props.onClick} >{props.children}</button>
    )
}