import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({
  pokemon: {
    id,
    name,
    hp,
    sprites: { front, back },
  },
}) {
  const [frontSprite, setFrontSprite] = useState(true);
  function changeSprite() {
    setFrontSprite(!frontSprite);
  }
  return (
    <Card>
      <div onClick={changeSprite}>
        <div className="image">
          {}
          <img alt={`Front: ${name}`} src={frontSprite ? front : back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
