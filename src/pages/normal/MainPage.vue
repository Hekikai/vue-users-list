<template>
	<main class="main">
		<user-card
				v-for="user in getUsers"
				:paramId="user.id"
				:key="user.id"
		>
			{{ user.name }}
		</user-card>
	</main>
</template>

<script setup>
import { onMounted } from "vue";
import UserCard from '../../components/normal/user/UserCard.vue';
import { useUsersStore } from "../../stores/users";

const userStore = useUsersStore();
const {getUsers, loadUsers} = userStore;

onMounted(() => loadUsers())
</script>

<style scoped lang="scss">

.main {
	margin: min(60px, 2vw) auto;
	width: calc(100% / 2 - 60px);

	@media screen and (max-width: 1024px) {
		width: calc(100% - 60px);
	}
}

</style>