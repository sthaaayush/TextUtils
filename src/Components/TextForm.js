import React, { useState } from 'react'

export default function TextForm({ heading, mode, alerts }) {
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
        alerts("Text Cleared", "danger");
        // console.log("Clear was clicked"); // For debugging
    }

    // Function to clear the text input
    // const copyText = () => {
    //     navigator.clipboard.writeText(text);
    //     alerts("Text Copied", "primary");
    //     // console.log("Copy was clicked"); // For debugging
    // }
    const copyText = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(() => alerts("Text Copied!", "primary"))
                .catch((err) => {
                    console.error("Copy failed:", err);
                    alerts("Copy failed", "danger");
                });
        } else {
            // Fallback: create a hidden textarea (for older mobile browsers)
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";  // Avoid scrolling to bottom
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                const successful = document.execCommand("copy");
                if (successful) {
                    alerts("Text Copied!", "primary");
                } else {
                    alerts("Copy not supported", "warning");
                }
            } catch (err) {
                console.error("Fallback copy failed", err);
                alerts("Copy failed", "danger");
            }

            document.body.removeChild(textArea);
        }
    };

    // Function to clear the text input
    const clearSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // console.log("Clear Space was clicked"); // For debugging
    }

    // Function to capitalize first word of the text input
    const capitalize = () => {
        let newText = text.split(" ")
            .map((txt) => {
                return txt[0].toUpperCase() + txt.slice(1);
            }).join(" ");
        setText(newText);
        // console.log(newText); // For debugging
    }

    // Function to inverse case the text input
    const caseInverse = () => {
        let newText = text.split(" ").map((txt) => {
            let inverseCaseTxt = "";
            for (let x in txt) {
                if (/[A-Z]/.test(txt[x])) { //Checks for capital character
                    inverseCaseTxt = inverseCaseTxt + txt[x].toLowerCase();
                }
                else if (/[a-z]/.test(txt[x])) {//Checks for small character
                    inverseCaseTxt = inverseCaseTxt + txt[x].toUpperCase();
                }
                else {//Checks for non-character
                    inverseCaseTxt = inverseCaseTxt + txt[x];
                }
            }
            return inverseCaseTxt;
        }).join(" ");
        setText(newText)
        // console.log(newText); // For debugging
    }

    // Style for Text Form
    const textUtilsStyle = {
        // border: "1px solid black",
        borderRadius: "20px",
        height: "40em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }

    // Style for Text Form
    const textCounterStyle = {
        // border: "1px solid black",
        borderRadius: "20px",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        padding: "10px"
    }

    // Style for Text Form
    const textPreviewStyle = {
        // border: "1px solid black",
        borderRadius: "20px",
        height: "28em",
        display: "flex",
        flexDirection: "column",
        padding: "10px"
    }



    let [text, setText] = useState("");
    return (
        <>
            <div className="textform-wrapper">
                {/* Text Utils Form */}
                <div className={`container text-center w-50 bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} border border-2 border-${mode === 'light' ? 'dark' : 'light'}`} style={textUtilsStyle}>
                    <h2>{heading}</h2>
                    <div className="mb-3">
                        <textarea className={`form-control bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} border border-2 border-${mode === 'light' ? 'dark' : 'light'}`} id="textForm" rows="16" value={text} onChange={handleOnChange} style={{ resize: 'none', boxShadow: "black 1px 1px 3px 0px" }}></textarea>
                    </div>
                    <div className="mb-3">
                        <button className='btn btn-outline-primary mx-1 my-1' onClick={setUpText}>
                            Uppercase
                        </button>
                        <button className='btn btn-outline-secondary mx-1 my-1' onClick={setLowText}>
                            Lowercase
                        </button>
                        <button className="btn btn-outline-danger mx-1 my-1" onClick={clearText}>
                            Clear
                        </button>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={clearSpace}>
                            Clear Space
                        </button>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={capitalize}>
                            Capitalize
                        </button>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={caseInverse}>
                            InVeRsE
                        </button>
                        <button className="btn btn-outline-info mx-1 my-1" onClick={copyText}>
                            <i className="bi bi-clipboard-check"></i>
                        </button>

                    </div>
                </div>

                {/* Text Counter */}
                <div className="container w-50 " >
                    <div className={`container bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} border border-2 border-${mode === 'light' ? 'dark' : 'light'}`} style={textCounterStyle}>
                        <h2 className=''>Counter</h2>
                        <b>Word: {text.split(" ").length}</b>
                        <b>Sentence: {text.split(".").length - 1}</b>
                        <b>Character: {text.length}</b>
                        <b>Reading Time: {text.split(" ").length * 0.008} Min</b>
                    </div>
                    <div style={textPreviewStyle} className={`container bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} my-3 border border-2 border-${mode === 'light' ? 'dark' : 'light'}`} >
                        <h2 className='text-center'>Preview</h2>
                        <i className="bi bi-clipboard-check-fill" style={{ cursor: "pointer", }} onClick={() => { navigator.clipboard.writeText(document.querySelector(".preview").textContent); }}></i>
                        <p className="preview" style={{
                            overflow: "scroll",
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
