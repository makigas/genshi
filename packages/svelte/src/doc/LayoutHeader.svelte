<script lang="ts">
	import genshiLogoDark from './genshi@dark.png';
	import genshiLogoLight from './genshi.png';
	import { base } from '$app/paths';
</script>

<header>
	<a href={base}>
		<picture class="logo">
			<source media="(prefers-color-scheme: dark)" srcset={genshiLogoDark} />
			<source media="(prefers-color-scheme: light)" srcset={genshiLogoLight} />
			<img src={genshiLogoLight} alt="Genshi" />
		</picture>
	</a>
</header>

<style>
	header {
		text-align: center;
		margin-bottom: 1rem;
	}
	.logo img {
		max-width: 100%;
		height: 6rem;
		object-fit: contain;
	}
</style>
