import { createRouter, createWebHistory } from 'vue-router'
import UsersPage from '../pages/UsersPage.vue';
import UserPage from '../pages/UserPage.vue';

const routes = [
	{
		path: '/',
		redirect: '/users'
	},
	{
		path: '/users',
		name: 'Users',
		component: UsersPage
	},
	{
		path: '/users/:id',
		component: UserPage
	}
]


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router;
