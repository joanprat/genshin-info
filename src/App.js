import React from "react";
// Components
import Navbar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import CharacterDetails from "./components/CharacterDetails";
import Footer from "./components/Footer";
export default function App () {
    const [allCharacters, loadAllCharacters] = React.useState([]);
    const [allCharactersCards, loadAllCharactersCards] = React.useState([]);
    const [currentCharacter, setCurrentCharacter] = React.useState(null);

    // Queries data from API and saves it to a variable.
    React.useEffect(() => {
        fetch('https://api.genshin.dev/characters/all')
            .then(res =>  res.json())
            .then(data => loadAllCharacters(data));
    }, []);

    // Creates character components and saves them in to a variable.
    React.useEffect(() => {
        console.log("Loading characters...");
        var key = 0;
        loadAllCharactersCards(allCharacters.map(character => {
            return (
                <CharacterCard
                    key={key++}
                    index={key}
                    name={character.name.replace(' ', '-').toLowerCase()} 
                    vision={character.vision}
                    handleClick={showData}
                />                
            );
        }));
    }, [allCharacters]);

    // Show the selected character
    function showData (characterIndex) {
        document.body.style.backgroundImage = `url(./assets/img/bg-${allCharacters[characterIndex].vision.toLowerCase()}.png)`;
        setCurrentCharacter(allCharacters[characterIndex]);
    }
    return (
        <main>
            <Navbar />
            <section className="container">
                <article className="container-fluid p-0 my-5 overflow-scroll">
                    <div className="d-flex flex-row py-2">
                        {allCharactersCards}                            
                    </div>
                </article>
                
                {
                    currentCharacter && 
                        <article className="container-fluid my-5 fade-animation">
                            <CharacterDetails  
                                name={currentCharacter.name}
                                imagesSrc={currentCharacter.name.replace(' ', '-').toLowerCase()}
                                vision={currentCharacter.vision}
                                rarity={currentCharacter.rarity}
                                description={currentCharacter.description}
                                skillTalents={currentCharacter.skillTalents}
                                passiveTalents={currentCharacter.passiveTalents}
                                constellations={currentCharacter.constellations}
                            />
                        </article>
                }
                
            </section>
            <Footer />
        </main>
    );
}