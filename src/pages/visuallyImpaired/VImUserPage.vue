<template>
	<the-spinner v-if="isUserLoaded === false"/>
	<div v-else class="page">
		<div class="border">
			<h2 class="page__heading">
				{{ userById.username }}
			</h2>
		</div>
		<section class="description">
			<div class="border">
				<p class="page__info">
					{{ userById.name }}
				</p>
			</div>
			<div class="border">
				<p class="page__info">
					{{ userById.email }}
				</p>
			</div>
			<div class="border">
				<p class="page__info">
					{{ userById.phone }}
				</p>
			</div>
			<div class="border">
				<p class="page__info">
					{{ userById.website }}
				</p>
			</div>
			<div class="border">
				<p class="page__info">
					{{ userById.company.name }}
				</p>
			</div>
			<div class="border">
				<p class="page__info">
					{{ userById.company.bs }}
				</p>
			</div>
		</section>
		<router-view/>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import { useUsersStore } from "../../stores/users";
import { storeToRefs } from "pinia";
import { scrollToTheTop } from "../../utils/scrollToTheTop";
import TheSpinner from '../../components/TheSpinner.vue';

const isUserLoaded = ref(false);
const route = useRoute();
const userStore = useUsersStore();
const {loadUserById} = userStore;
const {userById} = storeToRefs(userStore);

watch(() => route.params.id,
		() => {
			if (typeof route.params.id === 'undefined') {
				return;
			}
			scrollToTheTop();
			loadUserById(route.params.id, isUserLoaded);
		},
		{immediate: true}
)

</script>

<style scoped lang="scss">
@import '../../style/variables';
@import '../../style/mixins';

.page {
	@include looksLikeTable;

	&__heading {
		@include heading(800, 50px, 4rem);
		@include border;
		@include w-m-p;

		@media screen and (max-width: 1000px) {
			@include heading(800, 40px, 2.5rem);
		}
	}

	&__info {
		@include border;
		@include w-m-p;
		font-size: 3rem;
		line-height: 54px;

		@media screen and (max-width: 1000px) {
			font-size: 1.5rem;
			line-height: 34px;
		}
	}

	.description {
		display: flex;
		flex-direction: column;
	}

	.border {
		border-bottom: $border;
	}
}

</style>