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
				if (this.users.length !== 0) {
					this.users.length = 0;
				}
				res.forEach((user) => {
					this.users.push(user);
				})
			})
		},
		loadUserById(id, isDisplayed) {
			userService.loadUser(id).then(res => {
				this.userById = res;
				isDisplayed.value = true;
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
