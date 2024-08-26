import { getLatestGames } from '$lib/server/gameAPI';
import { redis } from '@/lib/server/redis';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => { 
   
    const cached = await redis.get('featuredGamesHome'); 

    if(cached) {
        const ttl = await redis.ttl('featuredGamesHome');

        setHeaders({
            'Cache-Control': `public, max-age=${ttl}`
        })

        

        return {
            games: JSON.parse(cached)
        }
    } else{
        const data = await getLatestGames();
        redis.set('featuredGamesHome', JSON.stringify(data), "EX", 3600)
        return {
            games: data
        }
    }

};