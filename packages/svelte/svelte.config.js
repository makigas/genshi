import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const docsLayout = join(__dirname, './src/doc/DocsLayout.svelte');

const theme = 'catppuccin-frappe';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['bash', 'json', 'svelte'],
});

const transformers = [
	{
		pre(node) {
			this.addClassToHast(node, 'code');
		},
	},
];

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svelte.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme, transformers }));
			return `{@html \`${html}\` }`;
		},
	},
	layout: {
		docs: docsLayout,
	},
};

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		paths: {
			base: '/genshi-svelte',
		},
	},
	extensions: ['.svelte', '.svelte.md'],
};

export default config;
