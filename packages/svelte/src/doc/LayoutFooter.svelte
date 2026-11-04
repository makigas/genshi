<footer>
	<div class="GenshiWrapper GenshiWrapper--breath">
		<div class="copy">
			<p>&copy; 2022-2025 makigas</p>
			<p>
				<svg aria-hidden="true" viewBox="0 0 47 7" version="1.1" height="21px">
					<g fill="currentColor">
						<path
							d="m 0,6 0,-5 2,0 0,1 2,0 0,-1 2,0 0,1 1,0 0,4 -2,0 0,-2 L 4,4 4,5 3,5 3,4 2,4 2,6 0,6 Z">
						</path>
						<path
							d="m 9,6 0,-1 -1,0 0,-1 1,0 0,-1 L 12,3 12,2 9,2 l 0,-1 L 13,1 l 0,1 1,0 0,4 -5,0 z m 1,-1 L 12,5 12,4 10,4 l 0,1 z">
						</path>
						<path
							d="m 15,6 0,-6 2,0 0,3 1,0 0,-1 2,0 0,1 -1,0 0,1 1,0 0,1 1,0 0,1 -2,0 0,-1 -1,0 0,-1 -1,0 0,2 -2,0 z">
						</path>
						<path
							d="m 22,6 0,-1 1,0 0,-2 -1,0 0,-1 3,0 0,3 1,0 0,1 -4,0 z m 1,-5 0,-1 2,0 0,1 -2,0 z">
						</path>
						<path
							d="m 27,7 0,-1 4,0 0,-1 -3,0 0,-1 -1,0 0,-2 1,0 0,-1 5,0 0,5 -1,0 0,1 -5,0 z m 2,-3 2,0 0,-2 -2,0 0,2 z">
						</path>
						<path
							d="m 35,6 0,-1 -1,0 0,-1 1,0 0,-1 3,0 0,-1 -3,0 0,-1 4,0 0,1 1,0 0,4 -5,0 z m 1,-1 2,0 0,-1 -2,0 0,1 z">
						</path>
						<path
							d="m 47,1 0,1 L 43,2 l 0,1 3,0 0,1 1,0 0,1 -1,0 0,1 L 41,6 l 0,-1 4,0 0,-1 L 42,4 l 0,-1 -1,0 0,-1 1,0 0,-1 5,0 z">
						</path>
					</g>
				</svg>
			</p>
		</div>

		<div class="colophon">
			<p>Licensed under the terms of the GNU LGPL license.</p>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: auto;
		background-color: var(--genshi-gray-100);
		border-top: 1px solid var(--genshi-gray-300);
		padding-top: 1em;
		padding-bottom: 1em;
	}

	@media screen and (prefers-color-scheme: dark) {
		footer {
			background-color: var(--genshi-gray-900);
			border-top: 1px solid var(--genshi-gray-700);
		}
	}

	.GenshiWrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		.GenshiWrapper {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.copy {
			text-align: left;
		}

		.colophon {
			text-align: right;
		}
	}

	.colophon {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	.copy {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	p {
		margin: 0;
	}
</style>
