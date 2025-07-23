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

    // Style for Text Form
    let textUtilsStyle = {
        border: "1px solid black",
        borderRadius: "20px",
        background: "lightgray",
        height: "40em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }

    // Style for Text Form
    let textCounterStyle = {
        border: "1px solid black",
        borderRadius: "20px",
        background: "lightgray",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        padding: "10px"
    }

    // Style for Text Form
    let textPreviewStyle = {
        border: "1px solid black",
        borderRadius: "20px",
        background: "lightgray",
        height: "28em",
        display: "flex",
        flexDirection: "column",
        padding: "10px"
    }

    let [text, setText] = useState("");
    return (
        <div style={{ display: "flex", gap: "-2px" }}>
            {/* Text Utils Form */}
            <div className='container text-center w-50' style={textUtilsStyle}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="textForm" rows="16" value={text} onChange={handleOnChange} style={{ resize: 'none' }}></textarea>
                </div>
                <div className="mb-3">
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

            {/* Text Counter */}
            <div className="container w-50 " >
                <div style={textCounterStyle}>
                    <h1 className=''>Counter</h1>
                    <b>Word: {text.split(" ").length}</b>
                    <b>Sentence: {text.split(".").length - 1}</b>
                    <b>Character: {text.length}</b>
                    <b>Reading Time: {text.split(" ").length * 0.008}</b>
                </div>
                <div style={textPreviewStyle} className='my-3'>
                    <h1 className='text-center'>Preview</h1>
                    <p style={{
                        overflow: "scroll",
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}>{text}</p>
                </div>
            </div>
        </div>
    )
}
