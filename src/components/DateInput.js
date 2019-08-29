import React, { useState } from 'react';




export function DateInput(props) {
    const [value, setValue] = useState('')
    
    
    return (
        <form onSubmit={() => {props.newDate(value)}}>
            <h4>Select a Prevoius Day</h4>
            <input type={`date`} name={`date`} value={value} onChange={(e) => setValue(e.target.value)}></input>
        </form>
    )
}