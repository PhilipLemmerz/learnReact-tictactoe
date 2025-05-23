import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [isPlayerName, setIsPlayerName] = useState(initialName)

    function handleEditState() {
        setIsEditing((isEditingState) => !isEditingState);
    }

    function handleNameInput(e) {
        setIsPlayerName(e.target.value);
    }

    return (
        <li id="players" className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing && <input type="text" required value={isPlayerName} onChange={handleNameInput}></input>}
                {!isEditing && <span className="player-name" >{isPlayerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditState}>{isEditing ? "save" : "edit"}</button>

        </li>
    )
}