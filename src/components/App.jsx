import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            <Footer />
            {notes.map(createNotes =>
                <Note
                    key={createNotes.key}
                    title={createNotes.title}
                    content={createNotes.content}
                />
            )
            }
        </div>
    );
}

export default App;