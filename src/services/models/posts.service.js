import BaseService from "../base.service";

class PostsService extends BaseService {
	async getPostsByUserId(id) {
		try {
			const result = await fetch(`${ this.PATH }/posts?userId=${ id }`);
			return await result.json();
		} catch (error) {

		}
	}

	async getCommentsByPostId() {

	}
}

export default new PostsService();