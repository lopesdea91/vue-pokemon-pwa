import { RouteRecordRaw } from 'vue-router'
import NotFoundPage from '../pages/_404/NotFoundPage.vue'

const route: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundPage
}

export default route