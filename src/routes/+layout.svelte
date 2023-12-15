<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import '../app.pcss';
</script>

<div class="min-h-screen">
	<div class="w-full border-b border-border">
		<nav class="container flex items-center gap-2 h-[57px]">
			<a href="/" class={buttonVariants({ variant: 'ghost' })}>Home</a>
			<a href="/users" class={buttonVariants({ variant: 'ghost' })}>Users</a>
		</nav>
	</div>
	<div class="relative flex min-h-full flex-col" id="page">
		<div class="flex-1 container">
			<slot />
		</div>
	</div>
</div>
