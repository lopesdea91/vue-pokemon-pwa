import { reactive, readonly } from "vue"
import { request } from "../../utils/request";
import pokemonParseRequest from "../../utils/pokemonParseRequest";
import { ApiPokemon, Pokemon, PokemonResponse } from "../../types";

interface IState {
	load: boolean,
	pokemon: Partial<Pokemon>
}

const _state = reactive<IState>({
	load: false,
	pokemon: {
		id: 0,
		name: '',
		order: 0,
		height: 0,
		weight: 0,
		type: null,
		imageUrl: ''
	}
})

const state = readonly(_state)

const actions = {
	async fetchId(id: string) {
		_state.load = true;

		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

		const result = await request(url);

		const parseRequest = pokemonParseRequest(result);

		setTimeout(() => {
			_state.load = false;
			_state.pokemon = parseRequest;
		}, 1000)
	},

	reset() {
		_state.pokemon = {};
	}
}

export default { state, actions }