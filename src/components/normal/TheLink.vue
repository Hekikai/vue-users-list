<template>
	<div :class="$style.link">
		<router-link to="">
			<template v-if="reactiveWidth > 764">
				<slot/>
			</template>
			<template v-else>
				<the-eye/>
			</template>
		</router-link>
	</div>
</template>

<script setup>
import TheEye from './TheEye.vue';
import { onMounted, ref } from "vue";

const reactiveWidth = ref(null);

const outputSize = (e) => {
	reactiveWidth.value = e[0].contentRect.width;
}

onMounted(() => {
	const observer = new ResizeObserver(outputSize).observe(header.value);
});

</script>

<style module lang="scss">
@import '../../style/variables';

.link {
	font: 14px/17px 'Proxima Nova', sans-serif;
	background-color: $white-color;
	padding: 10px 40px;
	font-weight: 600;
	color: $main-black-color;

	&:hover {
		cursor: pointer;
	}
}

</style>