import { RAWG_API_KEY } from '$env/static/private'
import { GenreEnum, type GameResult } from '@/types/gameAPI';


export const getLatestGames = (limit: number = 10): Promise<GameResult> => {
    try {
        console.log("fetching latest games from lib/server...", limit);

        const options = {
            method: 'GET',
            headers: {
                // Add any necessary headers here
            }
        };

        return fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=released&page_size=${limit}`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
                throw error; // Re-throw the error for further handling
            });


    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getGamesByGenre = async (limit: number = 10, genre: string): Promise<GameResult> => {
    try {

        if (!genre) throw ("Genre is required");

        const genreEnumValue = GenreEnum[Object.keys(GenreEnum).find(key => key.toLowerCase() === genre.toLowerCase()) as keyof typeof GenreEnum];
        
        if (!genreEnumValue) {
            throw new Error(`Invalid genre: ${genre}`);
        }


        const options = {
            method: 'GET'
        };
        
        return fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=released&genres=${genreEnumValue}&limit=${limit}`, options)
            .then(async (response) => {

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data: GameResult = await response.json();

                return (data);

            })
            .catch(error => {
                console.error(error);
                throw error; // Re-throw the error for further handling
            })


    } catch (error) {
        console.error(error);
        throw error;
    }
}