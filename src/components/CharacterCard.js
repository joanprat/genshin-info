import React from "react";
export default function CharacterCard (props) {
    // Processing character's name to query images from API
    var name = props.name;
    name = name === 'raiden-shogun' ? 'raiden' : name;
    name = name === 'kujou-sara' ? 'sara' : name;
    name = name === 'kamisato-ayaka' ? 'ayaka' : name;
    name = name === 'kaedehara-kazuha' ? 'kazuha' : name;
    name = name === 'sangonomiya-kokomi' ? 'kokomi' : name;
    return (
        <div className="col-lg-2 col-md-3 col-4 char-card pe-4" onClick={() => props.handleClick(props.index)}>
            <img className={`bg-${props.vision.toLowerCase()}`} src={`https://api.genshin.dev/characters/${name}/gacha-card`} onError={(event) => event.target.parentNode.style.display = 'none'} alt={`character-${props.index}`}/>
        </div>
    );
}