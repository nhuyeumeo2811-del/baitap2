import { useState } from "react";

function LetterForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;

        onAdd(text) ;
        setText("") ;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Viết Letter..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: "100%", padding:"8px" }}
                />
                <button style={{ marginTop: "10px" }}>Gửi</button>
        </form>
    );
}
export default LetterForm;