import BaseService from "../base.service";

class CommentsService extends BaseService {
	async getCommentsById(id) {
		try {
			const result = await fetch(`${ this.PATH }/posts/${ id }/comments`);
			return await result.json();
		} catch (error) {

		}
	}

	async addCommentToPost(postId, dto) {
		try {
			console.log(postId)
			const result = await fetch(`${this.PATH}/posts/${postId}/comments`, {
				method: "POST",
				body: JSON.stringify(dto),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			});
			return await result.json();
		} catch (error) {

		}
	}
}

export default new CommentsService();