import BaseService from "../base.service";

class PostsService extends BaseService {
	async getPostsByUserId(id) {
		try {
			const result = await fetch(`${ this.PATH }/posts?userId=${ id }`);
			return await result.json();
		} catch (error) {
			throw new Error(`Error while fetching posts by user id - ${error.message}`);
		}
	}
}

export default new PostsService();