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
import { ref, watch } from "vue";
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
		@include heading;
		@include border;
		@include w-m-p;
	}

	&__info {
		@include border;
		@include w-m-p;
		font-size: 18px;
		line-height: 17px;
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