import CharacterCard from "./CharacterCard";
import {NameAndImage} from "./CharacterCard";
import {CharacterCardProps} from "./CharacterCard";
import {RickAndMortyCharacter} from "./RickAndMortyCharacter";
type CharacterGalleryProps = {characters: RickAndMortyCharacter []}

export default function CharacterGallery(props: CharacterGalleryProps){

    return(// css
        <div>
            {
                props.characters.map ((rickAndMortyCharacterNameAndImage)=>{
                    return (
                        <div>
                            <CharacterCard rickAndMortyCharacter={rickAndMortyCharacterNameAndImage}/>
                        </div>
                    )
                    }
                )
            }
        </div>
    )
}

