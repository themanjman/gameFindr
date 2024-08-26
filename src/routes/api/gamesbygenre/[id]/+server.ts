import { RAWG_API_KEY } from '$env/static/private'
import { redis } from '@/lib/server/redis';
import type { GameResult } from '@/types/gameAPI';
import { json } from '@sveltejs/kit';

export async function GET(event): Promise<Response> {

  try {
    const options = {
      method: 'GET'
    };
    const { id } = event.params;

    const cached = await redis.get(`gamesByGenre-${id}`);
    

    if (cached) {
      return json(JSON.parse(cached)); 

    } else {

      console.log("Cache not found, fetching from API...");

      return fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=released&genres=${id}&limit=10`, options)
        .then(async (response) => {
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data: GameResult = await response.json();
          
          redis.set(`gamesByGenre-${id}`, JSON.stringify(data), "EX", 3600)
          
          return json(data);
  
        })
        .catch(error => {
          console.error(error);
          throw error; // Re-throw the error for further handling
        })



    }


  } catch (error) {
    console.error(error);
    throw error;
  }




}
