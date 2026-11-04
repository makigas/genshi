<script>
	import '@fontsource/montserrat/400.css';
	import '@fontsource/montserrat/700.css';
	import '@makigas/genshi';
	import LayoutHeader from '../doc/LayoutHeader.svelte';
	import LayoutNav from '../doc/LayoutNav.svelte';
	import LayoutFooter from '../doc/LayoutFooter.svelte';
	import Wrapper from '$lib/layout/Wrapper.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Genshi-Svelte</title>
</svelte:head>

<div class="docs">
	<Wrapper>
		<div class="app">
			<div class="app-left">
				<LayoutHeader />
				<LayoutNav />
			</div>
			<main>
				{@render children?.()}
			</main>
		</div>
	</Wrapper>
	<LayoutFooter />
</div>

<style>
	:global(:root) {
		--genshi-link-color: var(--genshi-red-700);
	}

	@media screen and (prefers-color-scheme: dark) {
		:global(:root) {
			--genshi-link-color: var(--genshi-red-200);
		}
	}

	.docs {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.app {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	main {
		min-width: 0;
	}

	@media screen and (min-width: 1024px) {
		.app {
			gap: 3rem;
			justify-content: center;
			grid-template-columns: 12rem 65ch;
		}
	}
</style>
