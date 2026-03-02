import { useEffect } from "react";

function LetterItem({ letter }) {
    useEffect(() => {
        console.log("LetterItem mounted:", letter.id);

        return () => {
            console.log("LetterItem unmounted:", letter.id);
        };
    }, []);

    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
            }}  
        >
            {letter.content}
        </div>
    );
}

export default LetterItem;