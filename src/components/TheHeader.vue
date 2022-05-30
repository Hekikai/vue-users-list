<template>
	<header ref="header" class="header">
		<router-link :to="{path: pathToTheHomePage()}">
			<div class="header__logo">
				CONCERT CLUB
			</div>
		</router-link>
		<span @click.self="$router.push(handleRedirectToVersion())" v-if="reactiveWidth > 512"
					class="header__link">
			<router-link :to="handleRedirectToVersion()">
				<template v-if="!$route.path.includes('visImpaired')">
					Версия для слабовидящих
				</template>
				<template v-else>
					Обычная версия
				</template>
			</router-link>
		</span>
		<the-eye v-else @click="$router.push(handleRedirectToVersion())"/>
	</header>
</template>

<script setup>
import TheEye from './TheEye.vue';
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const header = ref(null);
const reactiveWidth = ref(null);

const handleRedirectToVersion = () => {
	if (route.path.startsWith('/visImpaired')) {
		const visImpairedLength = route.path.split('/')[1].length;
		const path = route.path.substring(visImpairedLength + 1);
		return {path};
	} else {
		const path = '/visImpaired' + route.path;
		return {path};
	}
}

const pathToTheHomePage = () => {
	return route.path.startsWith('/visImpaired')
			? '/visImpaired/users'
			: '/users'
}

const outputSize = (e) => {
	reactiveWidth.value = e[0].contentRect.width;
}

onMounted(() => {
	new ResizeObserver(outputSize).observe(header.value);
});
</script>

<style scoped lang="scss">
@import "../style/variables";

.header {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: $main-black-color;
	height: 70px;
	position: sticky;
	top: 0;

	svg {
		height: 100%;
		cursor: pointer;
		fill: white;
	}

	&__link {
		padding: 10px 40px;
		background-color: $white-color;

		a {
			font: 14px/17px 'Proxima Nova', sans-serif;
			font-weight: 600;
			color: $main-black-color;
		}

		&:hover {
			cursor: pointer;
		}

	}

	&__logo {
		font: 1.75rem/60px 'Alegreya Sans SC', sans-serif;
		color: $white-color;
	}

}
</style>