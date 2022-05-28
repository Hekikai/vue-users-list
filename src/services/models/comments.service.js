import BaseService from "../base.service";

class CommentsService extends BaseService {
	async getCommentsById(id) {
		try {
			const result = await fetch(`${ this.PATH }/posts/${ id }/comments`);
			return await result.json();
		} catch (error) {

		}
	}
}

export default new CommentsService();