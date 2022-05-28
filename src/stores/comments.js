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
		}
	},
	getters: {
		getComments() {
			return this.comments;
		}
	}
})