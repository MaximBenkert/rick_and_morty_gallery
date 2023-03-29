import CharacterCard from "./CharacterCard";

import {RickAndMortyCharacter} from "../model/RickAndMortyCharacter";
import React, {ChangeEvent, useState} from "react";





type CharacterGalleryProps = {
    characters: RickAndMortyCharacter [],
}


export default function CharacterGallery(props : CharacterGalleryProps ){

    return  <div className="character-gallery">
        { props.characters.map( (rickAndMortyCharacter) =>
            <CharacterCard key={rickAndMortyCharacter.id} rickAndMortyCharacter={rickAndMortyCharacter}  /> )  }
    </div>
}

