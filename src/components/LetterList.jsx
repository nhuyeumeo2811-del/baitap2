import LetterItem from "./LetterItem";

function LetterList({ letters }) {
    return(
        <div style={{ marginTop: "20px" }}>
            {letters.lendth === 0 && <p>Chưa có letter nào</p> }
            {letters.map((letter) => (
                <LetterItem key={letter.id} letter={letter} />
            ))}
        </div>
    );
}

export default LetterList;