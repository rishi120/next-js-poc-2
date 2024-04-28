import React from 'react'

export default function Archivelayout({ archive, latest }) {
    return (
        <div>
            <div id='archive-filter'>
                <h1>{archive}</h1>
            </div>
            <div id='archive-latest'>
                <h1>{latest}</h1>
            </div>
        </div>
    )
}
