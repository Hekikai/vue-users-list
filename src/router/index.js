import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/normal/MainPage.vue';
import UserPage from '../pages/normal/UserPage.vue';
import UserPostsPage from '../pages/normal/UserPostsPage.vue';
import UserPosts from '../components/normal/user/UserPosts.vue';
import PostPage from '../pages/normal/PostPage.vue';

import VImMainPage from '../pages/visuallyImpaired/VImMainPage.vue';
import VImUserPage from '../pages/visuallyImpaired/VImUserPage.vue';
import VImUserPostsPage from '../pages/visuallyImpaired/VImUserPostsPage.vue';
import VImUserPosts from '../components/visuallyImpaired/user/VImUserPosts.vue';
import VImPostPage from '../pages/visuallyImpaired/VImPostPage.vue';

import The404Page from '../components/The404Page.vue';

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
		name: 'UserPage',
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
	},
	{
		path: '/visImpaired/users',
		name: 'VImMainPage',
		component: VImMainPage
	},
	{
		path: '/visImpaired/users/:id',
		name: 'VImUserPage',
		component: VImUserPage,
		children: [
			{
				path: '',
				component: VImUserPosts
			}
		]
	},
	{
		path: '/visImpaired/users/:id/posts',
		component: VImUserPostsPage,
		name: 'VImUserPostsPage'
	},
	{
		path: '/visImpaired/users/:id/posts/:postId',
		component: VImPostPage,
		name: 'VImPostPage'
	},
	{
		name: '404Page',
		path: '/:pathMatch(.*)*',
		component: The404Page
	}
];


const router = createRouter({
	history: createWebHistory('/vue-users-list'),
	routes
});

export default router;
