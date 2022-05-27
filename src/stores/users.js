import { defineStore } from 'pinia'
import userService from "../services/models/user.service";
export const useUsersStore = defineStore('userStore', {
	state: () => ({
		users: []
	}),
	actions: {
		loadUsers() {
			userService.fetchUsers().then(res => {
				res.forEach((user) => {
					this.users.push(user);
				})
			})
		}
	},
	getters: {
		getUsers() {
			return this.users;
		}
	},
})
