<template>
	<main class="main">
		<v-im-user-card
				v-for="user in getUsers"
				:paramId="user.id"
				:key="user.id"
		>
			{{ user.name }}
		</v-im-user-card>
	</main>
</template>

<script setup>
import { onMounted } from "vue";
import VImUserCard from '../../components/visuallyImpaired/user/VImUserCard.vue';
import { useUsersStore } from "../../stores/users";

const userStore = useUsersStore();
const {getUsers, loadUsers} = userStore;

onMounted(() => loadUsers())
</script>

<style scoped lang="scss">

.main {
	margin: min(20px, 2vw) auto;
	width: calc(100%/1.5 - 60px);

	@media screen and (max-width: 1024px) {
		width: calc(100% - 60px);
	}
}

</style>