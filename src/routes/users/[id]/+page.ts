import type { User } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	async function getUser(id: string) {
		const res = await fetch(`https://dummyjson.com/users/${id}`);
		const data = await res.json();
		return data as User;
	}

	return {
		user: await getUser(params.id)
	};
};
