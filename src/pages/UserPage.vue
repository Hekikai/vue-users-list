<template>
	<div class="page">
		<h2 class="page__heading">
			{{ userById.username }}
		</h2>
		<div class="description">
			<p class="page__info">
				{{ userById.name }}
			</p>
			<p class="page__info">
				{{ userById.email }}
			</p>
			<p class="page__info">
				{{ userById.phone }}
			</p>
			<p class="page__info">
				{{ userById.website }}
			</p>
			<p class="page__info">
				{{ userById.company.name }}
			</p>
			<p class="page__info">
				{{ userById.company.bs }}
			</p>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useUsersStore } from "../stores/users";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useUsersStore();
const {loadUserById} = store;
const {userById} = storeToRefs(store);

watch(() => route.params.id,
		() => {
			if(typeof route.params.id === 'undefined') {
				return;
			}
			loadUserById(route.params.id)
		},
		{immediate: true}
)

</script>

<style scoped lang="scss">
@import '../style/variables';
@import '../style/mixins';

.page {
	width: 50%;
	padding: $padding;
	border: 1px solid $border-color;
	margin: min(20px, 1vw) auto 0 auto;

	.description {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	&__heading {
		@include heading;
		margin-bottom: 20px;
	}

	&__info {
		padding: 20px;
		border: 1px solid $border-color;
		font-size: 18px;
		line-height: 17px;
	}
}

</style>