import { RouteRecordRaw } from 'vue-router'

import home from './routerHome'
import pokemonId from './routerPokemonId'
import notFound from './routerNotFound'

export const routes: RouteRecordRaw[] = [
    home,
    pokemonId,
    notFound
]