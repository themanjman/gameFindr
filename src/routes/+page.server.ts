import { getLatestGames } from '$lib/server/gameAPI';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => { 
    return { games: await getLatestGames() }; 
};