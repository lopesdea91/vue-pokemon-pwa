import { PokemonResponse, Pokemon } from '../types'

export default (data: PokemonResponse): Pokemon => {
	const types = data.types.map(el => el.type)
	const type = types.length
		? types[0].name
		: null

	return {
		id: data.id,
		name: data.name,
		order: data.order,
		height: data.height,
		weight: data.weight,
		imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
		abilities: data.abilities.map(el => el.ability),
		types,
		type
	}
}