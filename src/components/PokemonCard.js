import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {

  const [isFront, setIsFront] = useState(true)

  const handleToggle = () => {
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div>
        <div className="image">
        {isFront ? 
          <img onClick={handleToggle} src={poke.sprites.front} alt="oh no!" /> 
          : 
          <img onClick={handleToggle} src={poke.sprites.back} alt="oh no!" />
        }
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
