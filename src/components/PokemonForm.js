import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: "",
    },
  });
  function handleFormSubmit() {
    addNewPokemon(formData);
    setFormData({
      name: "",
      hp: 0,
      sprites: {
        front: "",
        back: "",
      },
    });
  }
  function handleFormChange(e) {
    const sprites = { ...formData.sprites };
    if (e.target.name === "backUrl") {
      sprites.back = e.target.value;
      setFormData({ ...formData, sprites });
    } else if (e.target.name === "frontUrl") {
      sprites.front = e.target.value;
      setFormData({ ...formData, sprites });
    } else {
      const key = e.target.name;
      const value =
        e.target.name === "hp"
          ? e.target.value === ""
            ? 0
            : parseInt(e.target.value, 10)
          : e.target.value;
      setFormData({ ...formData, [key]: value });
    }
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleFormChange}
            value={formData.name}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            type="number"
            onChange={handleFormChange}
            value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
