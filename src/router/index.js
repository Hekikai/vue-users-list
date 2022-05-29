import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/normal/MainPage.vue';
import UserPage from '../pages/normal/UserPage.vue';
import UserPostsPage from '../pages/normal/UserPostsPage.vue';
import UserPosts from '../components/normal/user/UserPosts.vue';
import PostPage from '../pages/normal/PostPage.vue';

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
	history: createWebHistory('/vue-users-list'),
	routes
});

export default router;
