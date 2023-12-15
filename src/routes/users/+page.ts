import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	async function getUsers() {
		const res = await fetch('https://dummyjson.com/users?limit=15&select=id,username,email');
		const data = await res.json();
		return data.users as Array<{ id: string; username: string; email: string }>;
	}

	return {
		users: await getUsers()
	};
};
