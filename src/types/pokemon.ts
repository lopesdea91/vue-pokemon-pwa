export type ApiPokemon = {
	name: string;
	url: string;
};

export type PokemonAbility = {
	name: string, url: string
}
export type PokemonSprites = {
	back_default: string | null
	back_female: string | null
	back_shiny: string | null
	back_shiny_female: string | null
	front_default: string | null
	front_female: string | null
	front_shiny: string | null
	front_shiny_female: string | null
}
export type PokemonType = {
	name: string, url: string
}
type PokemonCommun = {
	id: number
	name: string
	order: number
	height: number
	weight: number
}
export interface PokemonResponse extends PokemonCommun {
	abilities: { ability: PokemonAbility }[],
	types: { type: PokemonType }[]
}
export interface Pokemon extends PokemonCommun {
	abilities: PokemonAbility[],
	types: PokemonType[],
	type: string | null,
	imageUrl: string
};