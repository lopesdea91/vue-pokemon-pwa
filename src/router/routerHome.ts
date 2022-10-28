import { RouteRecordRaw } from 'vue-router'
import PokemonIdPage from '../pages/pokemonId/PokemonIdPage.vue'

const route: RouteRecordRaw = {
    path: '/pokemon/:id',
    name: 'pokemonId',
    component: PokemonIdPage
}

export default route