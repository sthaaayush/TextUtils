import React from 'react'

export default function About() {
    return (
        <div className="container my-5">
            <div className="card shadow-lg border-0" style={{borderRadius: "40px"}}>
                <div className="card-body" style={{borderRadius: "40px"}}>
                    <h2 className="card-title text-center mb-4">About TextUtils</h2>
                    <p className="card-text">
                        <strong>TextUtils</strong> is a simple and efficient text manipulation tool built with React. It provides
                        users with the ability to convert text to uppercase, lowercase, remove extra spaces, and even count words
                        and characters. Whether you're a student, writer, or developer, TextUtils is designed to help you format
                        and analyze your text quickly.
                    </p>
                    <p className="card-text">
                        This app is styled with <strong>Bootstrap</strong> for a clean and responsive user interface. The goal is
                        to make text processing fast, intuitive, and accessible on all devices.
                    </p>
                    <p className="card-text">
                        As a lightweight tool, TextUtils is perfect for everyday use without the clutter of unnecessary features.
                    </p>
                </div>
            </div>
        </div>
    )
}
