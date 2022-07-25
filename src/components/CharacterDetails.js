import React from "react";

export default function CharacterDetails (props) {
    const [selectedSkill, setSelectedSkill] = React.useState(0);
    const [selectedConstellation, setSelectedConstellation] = React.useState(0);

    function changeSkill (skillIndex) {
        setSelectedSkill(skillIndex);
    }
    function changeConstellation (constellationIndex) {
        setSelectedConstellation(constellationIndex);
    }
    // Processing character's name to query images from API
    var name = props.imagesSrc;
    name = name === 'raiden-shogun' ? 'raiden' : name;
    name = name === 'kujou-sara' ? 'sara' : name;
    name = name === 'kamisato-ayaka' ? 'ayaka' : name;
    name = name === 'kaedehara-kazuha' ? 'kazuha' : name;
    name = name === 'sangonomiya-kokomi' ? 'kokomi' : name;
    return (
        <div className="character-details">
            {/* Character info desktop */}
            <div id="display-char" className="character-info d-none d-lg-block">
                <div className="d-flex flex-row align-items-stretch pt-5 ">
                    <div className="col-4">
                        <div className="container pe-3">
                            <h2 className={props.vision.toLowerCase()}>{props.name}</h2>
                            <img className="stars mb-2" src={`/assets/img/${props.rarity}.png`} alt="Character rarity"/>
                            <img className="vision mb-5" src={`/assets/img/element-${props.vision}.png`} alt="Character vision"/>
                            <p>{props.description === "" ? "No description provided for this character" : props.description}</p>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="container">
                            <img className="img-fluid" src={`https://api.genshin.dev/characters/${name}/gacha-splash`} alt={`character-splach-${props.name}`}/>
                        </div>
                    </div>                    
                </div>
            </div>
            {/* Character info mobile */}
            <div id="display-char" className="character-info d-block d-lg-none">
                <div className="container pe-3">
                    <div className="col-8">
                        <h2 className={props.vision.toLowerCase()}>{props.name}</h2>
                        <img className="stars mb-2" src={`/assets/img/${props.rarity}.png`} alt="Character rarity"/>
                        <img className="vision mb-5" src={`/assets/img/element-${props.vision}.png`} alt="Character vision"/>                        
                    </div>
                    <p>{props.description === "" ? "No description provided for this character" : props.description}</p>
                </div>
                <div className="col-12 text-center">
                    <div className="container">
                        <img className="img-fluid" src={`https://api.genshin.dev/characters/${name}/gacha-splash`} alt={`character-splach-${props.name}`}/>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="character-data">
                <div className="container mb-5">
                    <h2 className={props.vision.toLowerCase()}>Skills</h2>
                </div>
                <div className="d-flex flex-row align-items-start">
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedSkill === 0 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/talent-na`} onClick={() => changeSkill(0)} onError={(event) => event.target.src = './assets/img/default-skill.png'} alt={`character-na-${props.name}`}/>
                    </div>
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedSkill === 1 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/talent-skill`} onError={(event) => event.target.src = './assets/img/default-skill.png'} onClick={() => changeSkill(1)} alt={`character-skill-${props.name}`}/>    
                    </div>
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedSkill === 2 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/talent-burst`} onError={(event) => event.target.src = './assets/img/default-skill.png'} onClick={() => changeSkill(2)} alt={`character-burst-${props.name}`}/>     
                    </div>
                </div>
                <div className="container-fluid my-4">
                    <p className="name">{props.skillTalents[selectedSkill].name}</p>
                    <p className="type">{props.skillTalents[selectedSkill].unlock}</p>
                    <p>{props.skillTalents[selectedSkill].description}</p>
                </div>
            </div>
            {/* Constellations */}
            <div className="character-data">
                <div className="container mb-5">
                    <h2 className={props.vision.toLowerCase()}>Constellations</h2>
                </div>
                <div className="d-flex flex-row align-items-start overflow-scroll pb-4">
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedConstellation === 0 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/constellation-1`} onClick={() => changeConstellation(0)} onError={(event) => event.target.src = './assets/img/default-constellation.png'} alt={`constellation-1`}/>
                    </div>
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedConstellation === 1 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/constellation-2`} onClick={() => changeConstellation(1)} onError={(event) => event.target.src = './assets/img/default-constellation.png'} alt={`constellation-2`}/>
                    </div>
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedConstellation === 2 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/constellation-3`} onClick={() => changeConstellation(2)} onError={(event) => event.target.src = './assets/img/default-constellation.png'} alt={`constellation-3`}/>
                    </div>
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedConstellation === 3 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/constellation-4`} onClick={() => changeConstellation(3)} onError={(event) => event.target.src = './assets/img/default-constellation.png'} alt={`constellation-4`}/>
                    </div>
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedConstellation === 4 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/constellation-5`} onClick={() => changeConstellation(4)} onError={(event) => event.target.src = './assets/img/default-constellation.png'} alt={`constellation-5`}/>
                    </div>
                    <div className="col-lg-1 col-md-2 col-3 mx-2">
                        <img className={selectedConstellation === 5 ? `img-fluid img-active` : `img-fluid`} src={`https://api.genshin.dev/characters/${name}/constellation-6`} onClick={() => changeConstellation(5)} onError={(event) => event.target.src = './assets/img/default-constellation.png'} alt={`constellation-6`}/>
                    </div>
                </div>
                <div className="container-fluid my-4">
                    <p className="name">{props.constellations[selectedConstellation].name}</p>
                    <p className="type">{props.constellations[selectedConstellation].unlock}</p>
                    <p>{props.constellations[selectedConstellation].description}</p>
                </div>
            </div>
        </div>
    );
}