import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue';
import UserPage from '../pages/UserPage.vue';
import UserPostsPage from '../pages/UserPostsPage.vue';
import UserPosts from '../components/user/UserPosts.vue';
import PostPage from '../pages/PostPage.vue';

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
		children: [
			{
				path: '',
				component: UserPosts
			}
		]
	},
	{
		path: '/users/:id/posts',
		component: UserPostsPage,
		name: 'UserPostsPage'
	},
	{
		path: '/users/:id/posts/:postId',
		component: PostPage,
		name: 'PostPage'
	}
];


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
