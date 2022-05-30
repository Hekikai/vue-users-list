import { defineStore } from "pinia";
import postsService from "../services/models/posts.service";

export const usePostsStore = defineStore('postsStore', {
	state: () => ({
		posts: []
	}),
	actions: {
		loadPostsByUserId(id, isDisplayed = {}) {
			postsService.getPostsByUserId(id).then(res => {
				if(this.posts.length !== 0) {
					this.posts.length = 0;
				}
				res.forEach(post => this.posts.push(post));
				isDisplayed.value = true;
			})
		}
	},
	getters: {
		getPosts() {
			return this.posts;
		}
	}
})