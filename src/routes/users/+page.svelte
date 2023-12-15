<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { PageData } from './$types';
	import { goto, preloadData, pushState } from '$app/navigation';
	import ProfilePage from './[id]/+page.svelte';
	import { page } from '$app/stores';

	export let data: PageData;
	$: ({ users } = data);

	async function onProfileLinkClick(e: MouseEvent & { currentTarget: HTMLAnchorElement }) {
		if (e.metaKey || e.ctrlKey) return;
		e.preventDefault();

		const { href } = e.currentTarget;

		const result = await preloadData(href);

		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { profile: result.data });
		} else {
			goto(href);
		}
	}

	let profileDialogOpen = false;

	$: if ($page.state.profile) {
		profileDialogOpen = true;
	} else {
		profileDialogOpen = false;
	}
</script>

<div class="py-16">
	<Card.Root>
		<Card.Header>
			<Card.Title>Users</Card.Title>
			<Card.Description>See who is using your app</Card.Description>
		</Card.Header>
		<Card.Content>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Username</Table.Head>
						<Table.Head>Email</Table.Head>
						<Table.Head></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each users as user}
						<Table.Row>
							<Table.Cell>{user.username}</Table.Cell>
							<Table.Cell>{user.email}</Table.Cell>
							<Table.Cell>
								<a href="/users/{user.id}" on:click={onProfileLinkClick}>View Profile</a>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
</div>

<Dialog.Root
	open={profileDialogOpen}
	onOpenChange={(open) => {
		if (!open) {
			history.back();
		}
	}}
>
	<Dialog.Content>
		<ProfilePage data={$page.state.profile} />
	</Dialog.Content>
</Dialog.Root>
