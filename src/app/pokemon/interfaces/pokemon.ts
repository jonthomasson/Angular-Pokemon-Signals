export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
}

export interface Pokemon {
  id: number;
  name: string;
  height: string;
  weight: string;
  abilities: PokemonAbility[];
  held_items: PokemonHeldItem[];
  moves: PokemonMove[];
  type: PokemonType[];
}


export interface PokemonAbility {
  ability: PokemonResult;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonHeldItem {
  item: PokemonResult;
}

export interface PokemonMove {
  move: PokemonResult;
}

export interface PokemonType {
  type: PokemonResult;
}

export interface PokemonResult {
  name: string;
  url: string;
}
