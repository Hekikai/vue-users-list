import { defineStore } from 'pinia'
import userService from "../services/models/user.service";
export const useUsersStore = defineStore('userStore', {
	state: () => ({
		users: [],
		userById: {}
	}),
	actions: {
		loadUsers() {
			userService.fetchUsers().then(res => {
				res.forEach((user) => {
					this.users.push(user);
				})
			})
		},
		loadUserById(id) {
			userService.loadUser(id).then(res => {
				this.userById = res;
			})
		}
	},
	getters: {
		getUsers() {
			return this.users;
		},
		getUserById() {
			return this.userById;
		}
	},
})
