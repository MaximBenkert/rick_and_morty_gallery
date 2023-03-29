import {RickAndMortyCharacter} from "../model/RickAndMortyCharacter";

export type CharacterCardProps = {

    rickAndMortyCharacter: RickAndMortyCharacter
    key: RickAndMortyCharacter["id"]
}

export type NameAndImage = {
    name: RickAndMortyCharacter["name"]
    image: RickAndMortyCharacter["image"]
}
export default function CharacterCard(props: CharacterCardProps) {
    return(
        <div>
            {props.rickAndMortyCharacter.name}
        <img src={props.rickAndMortyCharacter.image}  alt="rickandmortyimage"/>
        </div>


    )
}

