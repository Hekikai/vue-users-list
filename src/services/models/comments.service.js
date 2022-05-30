import BaseService from "../base.service";

class CommentsService extends BaseService {
	async getCommentsById(id) {
		try {
			const result = await fetch(`${ this.PATH }/posts/${ id }/comments`);
			return await result.json();
		} catch (error) {
			throw new Error(`Error while fetching comments by post id - ${error.message}`);
		}
	}

	async addCommentToPost(postId, dto) {
		try {
			const result = await fetch(`${this.PATH}/posts/${postId}/comments`, {
				method: "POST",
				body: JSON.stringify(dto),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			});
			return await result.json();
		} catch (error) {
			throw new Error(`Error while adding comment to the post - ${error.message}`);
		}
	}
}

export default new CommentsService();