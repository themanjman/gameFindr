import { getGamesByGenre } from "@/lib/server/gameAPI";
import type { PageServerLoad } from "./$types";
import { redis } from "@/lib/server/redis";
import type { GameResult } from "@/types/gameAPI";

export const load: PageServerLoad = async ({ setHeaders, params }) => {
    const cached: string | null  = await redis.get(`genrePage-${params.slug}`); 

    let cachedJSON: GameResult | null = null;

    if(cached) {
        cachedJSON = JSON.parse(cached);
    }




    if (cachedJSON && cachedJSON.results && cachedJSON.results.length > 0) {
        console.log("Cache found for genre: ", params.slug);

        const ttl = await redis.ttl(`genrePage-${params.slug}`) || 0; // Ensure ttl is defined

        setHeaders({
            'Cache-Control': `public, max-age=${ttl}`
        })

        return {
            games: cachedJSON
        }
    } else {
        console.log("Cache not found for genre: ", params.slug, ", fetching from API...");

        const data = await getGamesByGenre(10, params.slug);
        redis.set(`genrePage-${params.slug}`, JSON.stringify(data), "EX", 3600)
        return { games: data };
    }
};