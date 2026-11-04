<script lang="ts">
	import Button from '$lib/form/Button.svelte';
	import Checkbox from '$lib/form/Checkbox.svelte';
	import RadioButton from '$lib/form/RadioButton.svelte';
	import RadioGroup from '$lib/form/RadioGroup.svelte';
	import Select from '$lib/form/Select.svelte';
	import SelectOption from '$lib/form/SelectOption.svelte';
	import Textarea from '$lib/form/Textarea.svelte';
	import TextField from '$lib/form/TextField.svelte';

	type Plan = 'premium' | 'standard';

	type Region = 'europe' | 'africa' | 'oceania' | 'america' | 'asia';

	type Newsletter = 'none' | 'daily' | 'weekly';

	interface Form {
		name: string;
		email: string;
		password: string;
		plan: Plan;
		region: Region[];
		bio: string;
		newsletter: Newsletter;
		readTOS: boolean;
		sellSoul: boolean;
	}

	let form = $state({
		name: 'John Doe',
		email: 'john.doe@example.com',
		password: '12341234',
		plan: 'premium',
		region: ['europe'],
		bio: '',
		newsletter: 'daily',
		readTOS: false,
		sellSoul: true,
	} satisfies Form);

	let tosValid = $state(true);
	let formSent = $state(false);

	let render = $derived.by(() => {
		const snapshot = $state.snapshot(form);
		return JSON.stringify(snapshot, null, 2);
	});

	function sendData(event: SubmitEvent) {
		event.preventDefault();
		const formData = $state.snapshot(form);
		console.log(formData);
		formSent = true;
		tosValid = formData.readTOS;
	}
</script>

<pre class="code">{render}</pre>

<form onsubmit={sendData}>
	<TextField
		bind:value={form.name}
		label="Name"
		size="lg"
		validation={formSent && 'invalid'}
		helper={formSent ? 'This username is taken' : undefined} />
	<TextField bind:value={form.email} type="email" label="E-mail" mono />
	<TextField bind:value={form.password} type="password" label="Password" />
	<TextField readonly label="Referer code" value="123412341234" helper="You cannot change that" />

	<Select bind:value={form.plan} label="Plan">
		<SelectOption disabled>(Pick one)</SelectOption>
		<SelectOption value="premium">Premium Plan</SelectOption>
		<SelectOption value="standard">Normal Plan</SelectOption>
	</Select>

	<Select multiple rows={3} bind:value={form.region} label="Regions">
		<SelectOption value="africa">Africa</SelectOption>
		<SelectOption value="america">America</SelectOption>
		<SelectOption value="asia">Asia</SelectOption>
		<SelectOption value="europe">Europe</SelectOption>
		<SelectOption value="oceania">Oceania</SelectOption>
	</Select>

	<Textarea bind:value={form.bio} label="Bio" placeholder="Tell us about yourself" />

	<RadioGroup label="Receive newsletter">
		<RadioButton bind:group={form.newsletter} value="daily" label="Every day!" />
		<RadioButton bind:group={form.newsletter} value="weekly" label="Once a week" />
		<RadioButton
			bind:group={form.newsletter}
			value="none"
			label="No, I want to continue being a bad developer" />
	</RadioGroup>

	<RadioGroup label="Accept terms">
		<Checkbox
			bind:checked={form.readTOS}
			validation={!tosValid && 'invalid'}
			label="I have read the terms and conditions"
			helper={!tosValid ? "But you haven't read the TOS!" : undefined} />
		<Checkbox bind:checked={form.sellSoul} label="Sell my soul to the marketing team" />
	</RadioGroup>

	<Button type="submit" color="suggested" bold>Create account</Button>
</form>
