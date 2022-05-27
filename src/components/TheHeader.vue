<template>
	<header class="header">
		<div class="header__logo">
			CONCERT CLUB
		</div>
		<div class="header__link">
			Версия для слабовидящих
		</div>
	</header>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "src/style/variables";

.header {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: $main-black-color;
	height: 70px;
	position: sticky;
	top: 0;

	&__logo {
		font-family: 'Alegreya Sans SC', sans-serif;
		font-size: 1.75rem;
		line-height: 60px;
		color: $white-color;
	}

	&__link {
		font-family: 'Proxima Nova', sans-serif;
		font-size: 14px;
		line-height: 17px;
		background-color: $white-color;
		padding: 10px 40px;
		font-weight: 600;
		color: $main-black-color;
		&:hover {
			cursor: pointer;
		}
	}
}
</style>