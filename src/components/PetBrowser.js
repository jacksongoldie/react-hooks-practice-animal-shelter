import React from "react";

import Pet from "./Pet";


function PetBrowser({pets, onAdoptPet}) {

  const petsToDisplay = pets.map((pet) =>{
    return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  })
  return <div className="ui cards">{petsToDisplay}</div>;
}

export default PetBrowser;
