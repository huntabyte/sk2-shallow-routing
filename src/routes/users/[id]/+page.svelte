<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ user } = data);
</script>

<Card.Root class="border-none">
	<Card.Header>
		<Card.Title>{user.firstName} {user.lastName}</Card.Title>
		<Card.Description>Profile and contact details</Card.Description>
	</Card.Header>
	<Card.Content>
		<Avatar.Root>
			<Avatar.Image src={user.image} />
			<Avatar.Fallback>{user.firstName[0] + user.lastName[0]}</Avatar.Fallback>
		</Avatar.Root>
		<div class="mt-4">
			<div class="text-sm text-muted-foreground">Email</div>
			<div class="text-lg">{user.email}</div>
		</div>
		<div class="mt-4">
			<div class="text-sm text-muted-foreground">Phone</div>
			<div class="text-lg">{user.username}</div>
		</div>
	</Card.Content>
</Card.Root>
