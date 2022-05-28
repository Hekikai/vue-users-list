<template>
	<header class="header">
		<router-link to="/users">
			<div class="header__logo">
				CONCERT CLUB
			</div>
		</router-link>
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
	
	@media screen and (max-width: 100px) {
		justify-content: left;
	}

	&__logo {
		font: 1.75rem/60px 'Alegreya Sans SC', sans-serif;
		color: $white-color;
	}

	&__link {
		font: 14px/17px 'Proxima Nova', sans-serif;
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