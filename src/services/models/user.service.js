import BaseService from "../base.service";

class UserService extends BaseService {
	async fetchUsers() {
		try {
			const result = await fetch(`${ this.PATH }/users`);
			return await result.json();
		} catch (error) {
			throw new Error(`Error while fetching users - ${ error.message }`);
		}
	}

	async loadUser(id) {
		try {
			const result = await fetch(`${this.PATH}/users/${id}`);
			return await result.json();
		} catch (error) {

		}
	}
}

export default new UserService();