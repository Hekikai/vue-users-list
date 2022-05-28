import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue';
import UserPage from '../pages/UserPage.vue';
import UserPostsPage from '../pages/UserPostsPage.vue';

const routes = [
	{
		path: '/',
		redirect: '/users'
	},
	{
		path: '/users',
		name: 'MainPage',
		component: MainPage
	},
	{
		path: '/users/:id',
		component: UserPage,
	},
	{
		path: '/users/:id/posts',
		component: UserPostsPage,
		name: 'UserPostsPage'
	}
]


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router;
