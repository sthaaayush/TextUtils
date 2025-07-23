import React, { useState } from 'react'

export default function TextForm({ heading }) {
    // Function to change text to uppercase
    const setUpText = () => {
        setText(text.toUpperCase());
        // console.log("Uppercase was clicked"); // For debugging
    }

    // Function to change text to Lowercase
    const setLowText = () => {
        setText(text.toLowerCase());
        // console.log("Lowercase was clicked"); // For debugging
    }

    // Function to handle text change
    const handleOnChange = (e) => {
        setText(e.target.value);
        // console.log("Text changed"); // For debugging
    }

    // Function to clear the text input
    const clearText = () => {
        setText("");
        // console.log("Clear was clicked"); // For debugging
    }

    let [text, setText] = useState("Enter Text Here");
    return (
        <div className='container text-center w-50 '>
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textForm" rows="6" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-primary mx-1 my-1' onClick={setUpText}>
                    Uppercase
                </button>
                <button className='btn btn-secondary mx-1 my-1' onClick={setLowText}>
                    Lowercase
                </button>
                <button className="btn btn-danger mx-1 my-1" onClick={clearText}>
                    Clear
                </button>
            </div>
        </div>
    )
}
