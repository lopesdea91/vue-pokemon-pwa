import { reactive, readonly } from "vue"
import { request } from "../../utils/request";
import pokemonParseRequest from "../../utils/pokemonParseRequest";
import { ApiPokemon, Pokemon, PokemonResponse } from "../../types";

interface IState {
	load: boolean,
	items: Pokemon[]
	total: number
	page: number
	limit: number
}

const _state = reactive<IState>({
	load: false,
	items: [],
	total: 0,
	page: 1,
	limit: 20,
})

const state = readonly(_state)

const actions = {
	async fetch() {
		_state.load = true;

		const page = _state.page
		const limit = _state.limit

		let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

		if (page > 1) {
			url += `&offset=${page * limit}`
		}

		const result: { results: ApiPokemon[], count: number } = await request(url);

		console.log('result', result);

		const allPromise = result.results.map((el) => request(el.url));

		const resultData: PokemonResponse[] = await Promise.all(allPromise);

		const parseRequest = resultData.map(pokemonParseRequest);

		_state.load = false;

		_state.items = parseRequest;
		_state.total = result.count;
	},
	handlePagination(page: number) {
		_state.page = page;

		this.fetch()
	},
	async openPageOnce() {
		if (!_state.items.length) {
			await this.fetch()
		}
	}
}

export default { state, actions }