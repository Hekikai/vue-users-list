import { defineStore } from "pinia";
import commentsService from "../services/models/comments.service";

export const useCommentsStore = defineStore('commentsStore', {
	state: () => ({
		comments: []
	}),
	actions: {
		loadCommentsByPostId(id) {
			commentsService.getCommentsById(id).then(res => {
				if (this.comments.length !== 0) {
					this.comments.length = 0;
				}
				res.forEach((comment) => this.comments.push(comment));
			})
		},
		addCommentToPost(postId, dto) {
			commentsService.addCommentToPost(postId, dto).then(res => {
				this.comments.push(res);
			})
			return Promise.resolve();
		}
	},
	getters: {
		getComments() {
			return this.comments;
		}
	}
})