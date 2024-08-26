import { RAWG_API_KEY } from '$env/static/private'
import type { GameResult } from '@/types/gameAPI';
import { json } from '@sveltejs/kit';

export async function GET(event): Promise<Response> {

  const { id } = event.params;

  try {
    const options = {
      method: 'GET'
    };

    return fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=released&genres=${id}&limit=10`, options)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: GameResult = await response.json();
        return json(data);

      })
      .catch(error => {
        console.error(error);
        throw error; // Re-throw the error for further handling
      })




    // return Response.json({
    //   "count": 180934,
    //   "next": "https://api.rawg.io/api/games?genres=4&key=eb5b0718276e4817b1cbb2cce57127ec&limit=2&ordering=released&page=2",
    //   "previous": null,
    //   "results": [
    //     {
    //       "slug": "see-light",
    //       "name": "See Light",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": [
    //         {
    //           "store": {
    //             "id": 1,
    //             "name": "Steam",
    //             "slug": "steam"
    //           }
    //         }
    //       ],
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/3ab/3ab752af20e4e41fbb110e1810ee808d.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 328,
    //       "updated": "2019-08-28T22:13:53",
    //       "id": 11417,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 40836,
    //           "name": "Full controller support",
    //           "slug": "full-controller-support",
    //           "language": "eng",
    //           "games_count": 9473,
    //           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
    //         },
    //         {
    //           "id": 40847,
    //           "name": "Steam Achievements",
    //           "slug": "steam-achievements",
    //           "language": "eng",
    //           "games_count": 20092,
    //           "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
    //         },
    //         {
    //           "id": 16,
    //           "name": "Horror",
    //           "slug": "horror",
    //           "language": "eng",
    //           "games_count": 17748,
    //           "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
    //         },
    //         {
    //           "id": 31,
    //           "name": "Singleplayer",
    //           "slug": "singleplayer",
    //           "language": "eng",
    //           "games_count": 94283,
    //           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
    //         },
    //         {
    //           "id": 34,
    //           "name": "Violent",
    //           "slug": "violent",
    //           "language": "eng",
    //           "games_count": 4087,
    //           "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
    //         },
    //         {
    //           "id": 42392,
    //           "name": "Приключение",
    //           "slug": "prikliuchenie",
    //           "language": "rus",
    //           "games_count": 18381,
    //           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
    //         },
    //         {
    //           "id": 42398,
    //           "name": "Инди",
    //           "slug": "indi-2",
    //           "language": "rus",
    //           "games_count": 32347,
    //           "image_background": "https://media.rawg.io/media/games/ed5/ed5b7d01dd68fd8d598c91ad61f153af.jpg"
    //         },
    //         {
    //           "id": 42402,
    //           "name": "Насилие",
    //           "slug": "nasilie",
    //           "language": "rus",
    //           "games_count": 3367,
    //           "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
    //         },
    //         {
    //           "id": 42417,
    //           "name": "Экшен",
    //           "slug": "ekshen",
    //           "language": "rus",
    //           "games_count": 20346,
    //           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/3ab/3ab752af20e4e41fbb110e1810ee808d.jpg"
    //         },
    //         {
    //           "id": 92909,
    //           "image": "https://media.rawg.io/media/screenshots/691/691181cdb8be7d47a07b0d8d31cc6855.jpg"
    //         },
    //         {
    //           "id": 92910,
    //           "image": "https://media.rawg.io/media/screenshots/483/483e9d15bf332e172b05f434339ed206.jpg"
    //         },
    //         {
    //           "id": 92911,
    //           "image": "https://media.rawg.io/media/screenshots/c5c/c5c234d0dabfd066d630579c78bbcc73.jpg"
    //         },
    //         {
    //           "id": 92912,
    //           "image": "https://media.rawg.io/media/screenshots/e36/e36657d9a2fa2bbc302d17e15bcc2201.jpg"
    //         },
    //         {
    //           "id": 92913,
    //           "image": "https://media.rawg.io/media/screenshots/966/966276780d1704a0386a9cc9de9e9eb9.jpg"
    //         },
    //         {
    //           "id": 92914,
    //           "image": "https://media.rawg.io/media/screenshots/3ab/3ab752af20e4e41fbb110e1810ee808d.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 51,
    //           "name": "Indie",
    //           "slug": "indie"
    //         },
    //         {
    //           "id": 3,
    //           "name": "Adventure",
    //           "slug": "adventure"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "salty-fish-go",
    //       "name": "Salty Fish Go!",
    //       "playtime": 1,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         },
    //         {
    //           "platform": {
    //             "id": 5,
    //             "name": "macOS",
    //             "slug": "macos"
    //           }
    //         }
    //       ],
    //       "stores": [
    //         {
    //           "store": {
    //             "id": 1,
    //             "name": "Steam",
    //             "slug": "steam"
    //           }
    //         }
    //       ],
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/fac/fac34caddaf7c01121a480f20be6f687.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 18,
    //       "added_by_status": {
    //         "owned": 18
    //       },
    //       "metacritic": null,
    //       "suggestions_count": 175,
    //       "updated": "2019-08-28T22:05:05",
    //       "id": 45893,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 40836,
    //           "name": "Full controller support",
    //           "slug": "full-controller-support",
    //           "language": "eng",
    //           "games_count": 9473,
    //           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
    //         },
    //         {
    //           "id": 40845,
    //           "name": "Partial Controller Support",
    //           "slug": "partial-controller-support",
    //           "language": "eng",
    //           "games_count": 6822,
    //           "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
    //         },
    //         {
    //           "id": 40847,
    //           "name": "Steam Achievements",
    //           "slug": "steam-achievements",
    //           "language": "eng",
    //           "games_count": 20092,
    //           "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Funny",
    //           "slug": "funny",
    //           "language": "eng",
    //           "games_count": 10934,
    //           "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
    //         },
    //         {
    //           "id": 120,
    //           "name": "Memes",
    //           "slug": "memes",
    //           "language": "eng",
    //           "games_count": 928,
    //           "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
    //         },
    //         {
    //           "id": 188,
    //           "name": "Parkour",
    //           "slug": "parkour",
    //           "language": "eng",
    //           "games_count": 1190,
    //           "image_background": "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg"
    //         },
    //         {
    //           "id": 50,
    //           "name": "Sexual Content",
    //           "slug": "sexual-content",
    //           "language": "eng",
    //           "games_count": 1812,
    //           "image_background": "https://media.rawg.io/media/screenshots/49d/49dd1acb774d1d182e90b667d61b7155.jpg"
    //         },
    //         {
    //           "id": 31,
    //           "name": "Singleplayer",
    //           "slug": "singleplayer",
    //           "language": "eng",
    //           "games_count": 94283,
    //           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
    //         },
    //         {
    //           "id": 42405,
    //           "name": "Сексуальный контент",
    //           "slug": "seksualnyi-kontent",
    //           "language": "rus",
    //           "games_count": 1813,
    //           "image_background": "https://media.rawg.io/media/games/23b/23b42b7a896140f4ce1d0df8c42fa012.jpg"
    //         },
    //         {
    //           "id": 42417,
    //           "name": "Экшен",
    //           "slug": "ekshen",
    //           "language": "rus",
    //           "games_count": 20346,
    //           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    //         },
    //         {
    //           "id": 42482,
    //           "name": "Смешная",
    //           "slug": "smeshnaia",
    //           "language": "rus",
    //           "games_count": 3044,
    //           "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
    //         },
    //         {
    //           "id": 42561,
    //           "name": "Мемы",
    //           "slug": "memy",
    //           "language": "rus",
    //           "games_count": 869,
    //           "image_background": "https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg"
    //         },
    //         {
    //           "id": 42608,
    //           "name": "Раннер",
    //           "slug": "ranner",
    //           "language": "rus",
    //           "games_count": 263,
    //           "image_background": "https://media.rawg.io/media/screenshots/101/101918027b51efecf26466a313729f8f.jpg"
    //         },
    //         {
    //           "id": 42643,
    //           "name": "Паркур",
    //           "slug": "parkur-2",
    //           "language": "rus",
    //           "games_count": 306,
    //           "image_background": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/fac/fac34caddaf7c01121a480f20be6f687.jpg"
    //         },
    //         {
    //           "id": 652872,
    //           "image": "https://media.rawg.io/media/screenshots/925/925aaeec2fa0278735dc36710595a76d.jpg"
    //         },
    //         {
    //           "id": 652873,
    //           "image": "https://media.rawg.io/media/screenshots/008/008515d2f379982b7bb33187e787c67e.jpg"
    //         },
    //         {
    //           "id": 652874,
    //           "image": "https://media.rawg.io/media/screenshots/797/797d0ff9200da95f00892c676bca387a.jpg"
    //         },
    //         {
    //           "id": 652875,
    //           "image": "https://media.rawg.io/media/screenshots/b12/b1291344d875305d5a8a548ee5446cf1.jpg"
    //         },
    //         {
    //           "id": 652876,
    //           "image": "https://media.rawg.io/media/screenshots/f95/f9525437bf017c5106344b4f3658949a.jpg"
    //         },
    //         {
    //           "id": 652877,
    //           "image": "https://media.rawg.io/media/screenshots/fac/fac34caddaf7c01121a480f20be6f687.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         },
    //         {
    //           "platform": {
    //             "id": 5,
    //             "name": "Apple Macintosh",
    //             "slug": "mac"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "neon-the-ninja",
    //       "name": "Neon the Ninja",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": [
    //         {
    //           "store": {
    //             "id": 1,
    //             "name": "Steam",
    //             "slug": "steam"
    //           }
    //         }
    //       ],
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/a1d/a1d983644fd3f1829ce632909abe80ce.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 148,
    //       "updated": "2019-08-28T22:04:58",
    //       "id": 46104,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 243,
    //           "name": "1990's",
    //           "slug": "1990s",
    //           "language": "eng",
    //           "games_count": 315,
    //           "image_background": "https://media.rawg.io/media/games/96a/96a48ac7487d9db9179d83170afcb16a.jpg"
    //         },
    //         {
    //           "id": 45,
    //           "name": "2D",
    //           "slug": "2d",
    //           "language": "eng",
    //           "games_count": 85731,
    //           "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
    //         },
    //         {
    //           "id": 40836,
    //           "name": "Full controller support",
    //           "slug": "full-controller-support",
    //           "language": "eng",
    //           "games_count": 9473,
    //           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
    //         },
    //         {
    //           "id": 134,
    //           "name": "Anime",
    //           "slug": "anime",
    //           "language": "eng",
    //           "games_count": 5088,
    //           "image_background": "https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg"
    //         },
    //         {
    //           "id": 40847,
    //           "name": "Steam Achievements",
    //           "slug": "steam-achievements",
    //           "language": "eng",
    //           "games_count": 20092,
    //           "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
    //         },
    //         {
    //           "id": 40850,
    //           "name": "Steam Leaderboards",
    //           "slug": "steam-leaderboards",
    //           "language": "eng",
    //           "games_count": 4409,
    //           "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
    //         },
    //         {
    //           "id": 179,
    //           "name": "Cartoon",
    //           "slug": "cartoon",
    //           "language": "eng",
    //           "games_count": 1793,
    //           "image_background": "https://media.rawg.io/media/screenshots/98a/98a2a281f8744ec2c93175b19184a0d4.jpg"
    //         },
    //         {
    //           "id": 123,
    //           "name": "Comedy",
    //           "slug": "comedy",
    //           "language": "eng",
    //           "games_count": 5378,
    //           "image_background": "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg"
    //         },
    //         {
    //           "id": 49,
    //           "name": "Difficult",
    //           "slug": "difficult",
    //           "language": "eng",
    //           "games_count": 7400,
    //           "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
    //         },
    //         {
    //           "id": 14,
    //           "name": "Early Access",
    //           "slug": "early-access",
    //           "language": "eng",
    //           "games_count": 7090,
    //           "image_background": "https://media.rawg.io/media/screenshots/654/6540928602af293014efa90d75c420b7.jpg"
    //         },
    //         {
    //           "id": 42,
    //           "name": "Great Soundtrack",
    //           "slug": "great-soundtrack",
    //           "language": "eng",
    //           "games_count": 3091,
    //           "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
    //         },
    //         {
    //           "id": 186,
    //           "name": "Ninja",
    //           "slug": "ninja",
    //           "language": "eng",
    //           "games_count": 1463,
    //           "image_background": "https://media.rawg.io/media/games/c35/c354856af9151dc63844be4f9843d2c2.jpg"
    //         },
    //         {
    //           "id": 146,
    //           "name": "Nonlinear",
    //           "slug": "nonlinear",
    //           "language": "eng",
    //           "games_count": 401,
    //           "image_background": "https://media.rawg.io/media/screenshots/628/628af9f1b736963621270d1f949dccf1.jpg"
    //         },
    //         {
    //           "id": 74,
    //           "name": "Retro",
    //           "slug": "retro",
    //           "language": "eng",
    //           "games_count": 17491,
    //           "image_background": "https://media.rawg.io/media/games/218/218167ff4011acc825c844d0070940a0.jpg"
    //         },
    //         {
    //           "id": 31,
    //           "name": "Singleplayer",
    //           "slug": "singleplayer",
    //           "language": "eng",
    //           "games_count": 94283,
    //           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
    //         },
    //         {
    //           "id": 15,
    //           "name": "Stealth",
    //           "slug": "stealth",
    //           "language": "eng",
    //           "games_count": 3278,
    //           "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
    //         },
    //         {
    //           "id": 166,
    //           "name": "Stylized",
    //           "slug": "stylized",
    //           "language": "eng",
    //           "games_count": 820,
    //           "image_background": "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg"
    //         },
    //         {
    //           "id": 42392,
    //           "name": "Приключение",
    //           "slug": "prikliuchenie",
    //           "language": "rus",
    //           "games_count": 18381,
    //           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
    //         },
    //         {
    //           "id": 42396,
    //           "name": "Для одного игрока",
    //           "slug": "dlia-odnogo-igroka",
    //           "language": "rus",
    //           "games_count": 12690,
    //           "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
    //         },
    //         {
    //           "id": 42398,
    //           "name": "Инди",
    //           "slug": "indi-2",
    //           "language": "rus",
    //           "games_count": 32347,
    //           "image_background": "https://media.rawg.io/media/games/ed5/ed5b7d01dd68fd8d598c91ad61f153af.jpg"
    //         },
    //         {
    //           "id": 42401,
    //           "name": "Отличный саундтрек",
    //           "slug": "otlichnyi-saundtrek",
    //           "language": "rus",
    //           "games_count": 4323,
    //           "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
    //         },
    //         {
    //           "id": 42407,
    //           "name": "Аниме",
    //           "slug": "anime-2",
    //           "language": "rus",
    //           "games_count": 3073,
    //           "image_background": "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg"
    //         },
    //         {
    //           "id": 42411,
    //           "name": "Ранний доступ",
    //           "slug": "rannii-dostup",
    //           "language": "rus",
    //           "games_count": 6608,
    //           "image_background": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg"
    //         },
    //         {
    //           "id": 42417,
    //           "name": "Экшен",
    //           "slug": "ekshen",
    //           "language": "rus",
    //           "games_count": 20346,
    //           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    //         },
    //         {
    //           "id": 42420,
    //           "name": "Сложная",
    //           "slug": "slozhnaia",
    //           "language": "rus",
    //           "games_count": 3222,
    //           "image_background": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg"
    //         },
    //         {
    //           "id": 42463,
    //           "name": "Платформер",
    //           "slug": "platformer-2",
    //           "language": "rus",
    //           "games_count": 3097,
    //           "image_background": "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg"
    //         },
    //         {
    //           "id": 42467,
    //           "name": "Ретро",
    //           "slug": "retro-2",
    //           "language": "rus",
    //           "games_count": 2689,
    //           "image_background": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg"
    //         },
    //         {
    //           "id": 42482,
    //           "name": "Смешная",
    //           "slug": "smeshnaia",
    //           "language": "rus",
    //           "games_count": 3044,
    //           "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
    //         },
    //         {
    //           "id": 42483,
    //           "name": "Рисованная графика",
    //           "slug": "risovannaia-grafika",
    //           "language": "rus",
    //           "games_count": 645,
    //           "image_background": "https://media.rawg.io/media/screenshots/271/271458a145626b16058f3023308be3fb.jpg"
    //         },
    //         {
    //           "id": 42491,
    //           "name": "Мясо",
    //           "slug": "miaso",
    //           "language": "rus",
    //           "games_count": 2802,
    //           "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
    //         },
    //         {
    //           "id": 42534,
    //           "name": "Мультфильм",
    //           "slug": "multfilm",
    //           "language": "rus",
    //           "games_count": 540,
    //           "image_background": "https://media.rawg.io/media/games/b17/b17485d757ca36b5f1ad376b6b096885.jpg"
    //         },
    //         {
    //           "id": 42539,
    //           "name": "Скролл-шутер",
    //           "slug": "skroll-shuter",
    //           "language": "rus",
    //           "games_count": 852,
    //           "image_background": "https://media.rawg.io/media/screenshots/973/973a0d79ffb799e10e2fa92d4f584f41.jpg"
    //         },
    //         {
    //           "id": 42562,
    //           "name": "Для всей семьи",
    //           "slug": "dlia-vsei-semi",
    //           "language": "rus",
    //           "games_count": 2231,
    //           "image_background": "https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg"
    //         },
    //         {
    //           "id": 42571,
    //           "name": "Мультипликация",
    //           "slug": "multiplikatsiia",
    //           "language": "rus",
    //           "games_count": 871,
    //           "image_background": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg"
    //         },
    //         {
    //           "id": 42601,
    //           "name": "Цветастая",
    //           "slug": "tsvetastaia",
    //           "language": "rus",
    //           "games_count": 2088,
    //           "image_background": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
    //         },
    //         {
    //           "id": 42612,
    //           "name": "Быстрая",
    //           "slug": "bystraia",
    //           "language": "rus",
    //           "games_count": 1124,
    //           "image_background": "https://media.rawg.io/media/screenshots/0f5/0f585fa72f534f62f9e5da051179f5de.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/a1d/a1d983644fd3f1829ce632909abe80ce.jpg"
    //         },
    //         {
    //           "id": 654555,
    //           "image": "https://media.rawg.io/media/screenshots/28e/28ed3ca4213219dbfafa483abf5963c3.jpg"
    //         },
    //         {
    //           "id": 654556,
    //           "image": "https://media.rawg.io/media/screenshots/7c4/7c4737c323c97c7a88054a00d0596a10.jpg"
    //         },
    //         {
    //           "id": 654557,
    //           "image": "https://media.rawg.io/media/screenshots/a3c/a3c5675298302770da60b75db7dacd1e.jpg"
    //         },
    //         {
    //           "id": 654558,
    //           "image": "https://media.rawg.io/media/screenshots/2c7/2c7e2eb95de73de11f76d7e581f0d2ce.jpg"
    //         },
    //         {
    //           "id": 654559,
    //           "image": "https://media.rawg.io/media/screenshots/a1d/a1d983644fd3f1829ce632909abe80ce.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 51,
    //           "name": "Indie",
    //           "slug": "indie"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "i_amexe",
    //       "name": "I_AM.exe",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": [
    //         {
    //           "store": {
    //             "id": 1,
    //             "name": "Steam",
    //             "slug": "steam"
    //           }
    //         }
    //       ],
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/1cb/1cb2c527862115f73eac59c907bfa0f5.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 253,
    //       "updated": "2019-08-28T22:04:57",
    //       "id": 46193,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 40836,
    //           "name": "Full controller support",
    //           "slug": "full-controller-support",
    //           "language": "eng",
    //           "games_count": 9473,
    //           "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
    //         },
    //         {
    //           "id": 31,
    //           "name": "Singleplayer",
    //           "slug": "singleplayer",
    //           "language": "eng",
    //           "games_count": 94283,
    //           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
    //         },
    //         {
    //           "id": 42392,
    //           "name": "Приключение",
    //           "slug": "prikliuchenie",
    //           "language": "rus",
    //           "games_count": 18381,
    //           "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
    //         },
    //         {
    //           "id": 42398,
    //           "name": "Инди",
    //           "slug": "indi-2",
    //           "language": "rus",
    //           "games_count": 32347,
    //           "image_background": "https://media.rawg.io/media/games/ed5/ed5b7d01dd68fd8d598c91ad61f153af.jpg"
    //         },
    //         {
    //           "id": 42417,
    //           "name": "Экшен",
    //           "slug": "ekshen",
    //           "language": "rus",
    //           "games_count": 20346,
    //           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/1cb/1cb2c527862115f73eac59c907bfa0f5.jpg"
    //         },
    //         {
    //           "id": 655113,
    //           "image": "https://media.rawg.io/media/screenshots/113/113cdc0d469bfeac193b0c5a109d56a8.jpg"
    //         },
    //         {
    //           "id": 655114,
    //           "image": "https://media.rawg.io/media/screenshots/c01/c019f6cb6b800e7dfb2cee993310882a.jpg"
    //         },
    //         {
    //           "id": 655115,
    //           "image": "https://media.rawg.io/media/screenshots/fcd/fcdf5addeb851efe04d1aea1e0be1fc1.jpg"
    //         },
    //         {
    //           "id": 655116,
    //           "image": "https://media.rawg.io/media/screenshots/97d/97d75b2c4f84640570d2eca94ba9e367.jpg"
    //         },
    //         {
    //           "id": 655117,
    //           "image": "https://media.rawg.io/media/screenshots/6b8/6b8d38b3254ef7a300984b0c4d237f52.jpg"
    //         },
    //         {
    //           "id": 655118,
    //           "image": "https://media.rawg.io/media/screenshots/1cb/1cb2c527862115f73eac59c907bfa0f5.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 51,
    //           "name": "Indie",
    //           "slug": "indie"
    //         },
    //         {
    //           "id": 3,
    //           "name": "Adventure",
    //           "slug": "adventure"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "no-mans-land",
    //       "name": "No Mans Land",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": [
    //         {
    //           "store": {
    //             "id": 1,
    //             "name": "Steam",
    //             "slug": "steam"
    //           }
    //         }
    //       ],
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/bd8/bd8a60064ceb39cd22f5e3c81a913fbb.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 71,
    //       "updated": "2019-08-28T22:04:55",
    //       "id": 46256,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 40837,
    //           "name": "In-App Purchases",
    //           "slug": "in-app-purchases",
    //           "language": "eng",
    //           "games_count": 1197,
    //           "image_background": "https://media.rawg.io/media/games/936/93643e6e38420134882f69625c98f4de.jpg"
    //         },
    //         {
    //           "id": 40847,
    //           "name": "Steam Achievements",
    //           "slug": "steam-achievements",
    //           "language": "eng",
    //           "games_count": 20092,
    //           "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
    //         },
    //         {
    //           "id": 14,
    //           "name": "Early Access",
    //           "slug": "early-access",
    //           "language": "eng",
    //           "games_count": 7090,
    //           "image_background": "https://media.rawg.io/media/screenshots/654/6540928602af293014efa90d75c420b7.jpg"
    //         },
    //         {
    //           "id": 31,
    //           "name": "Singleplayer",
    //           "slug": "singleplayer",
    //           "language": "eng",
    //           "games_count": 94283,
    //           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
    //         },
    //         {
    //           "id": 397,
    //           "name": "Online multiplayer",
    //           "slug": "online-multiplayer",
    //           "language": "eng",
    //           "games_count": 3793,
    //           "image_background": "https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg"
    //         },
    //         {
    //           "id": 42398,
    //           "name": "Инди",
    //           "slug": "indi-2",
    //           "language": "rus",
    //           "games_count": 32347,
    //           "image_background": "https://media.rawg.io/media/games/ed5/ed5b7d01dd68fd8d598c91ad61f153af.jpg"
    //         },
    //         {
    //           "id": 42411,
    //           "name": "Ранний доступ",
    //           "slug": "rannii-dostup",
    //           "language": "rus",
    //           "games_count": 6608,
    //           "image_background": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg"
    //         },
    //         {
    //           "id": 42417,
    //           "name": "Экшен",
    //           "slug": "ekshen",
    //           "language": "rus",
    //           "games_count": 20346,
    //           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/bd8/bd8a60064ceb39cd22f5e3c81a913fbb.jpg"
    //         },
    //         {
    //           "id": 655603,
    //           "image": "https://media.rawg.io/media/screenshots/b78/b78db7179279982bc2ad0135bfa93a62.jpg"
    //         },
    //         {
    //           "id": 655604,
    //           "image": "https://media.rawg.io/media/screenshots/879/8797908d491047f9527446444a25a27a.jpg"
    //         },
    //         {
    //           "id": 655605,
    //           "image": "https://media.rawg.io/media/screenshots/94b/94bc16d0bc0c3835e446acfc9944da8e.jpg"
    //         },
    //         {
    //           "id": 655606,
    //           "image": "https://media.rawg.io/media/screenshots/006/006e92b5e2ced5b86b937bbc29204af2.jpg"
    //         },
    //         {
    //           "id": 655607,
    //           "image": "https://media.rawg.io/media/screenshots/bd8/bd8a60064ceb39cd22f5e3c81a913fbb.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 51,
    //           "name": "Indie",
    //           "slug": "indie"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "jarheads",
    //       "name": "Jarheads",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         },
    //         {
    //           "platform": {
    //             "id": 5,
    //             "name": "macOS",
    //             "slug": "macos"
    //           }
    //         },
    //         {
    //           "platform": {
    //             "id": 6,
    //             "name": "Linux",
    //             "slug": "linux"
    //           }
    //         }
    //       ],
    //       "stores": [
    //         {
    //           "store": {
    //             "id": 1,
    //             "name": "Steam",
    //             "slug": "steam"
    //           }
    //         }
    //       ],
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/9f0/9f06061be3db05fe7a7c0af470f514de.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 221,
    //       "updated": "2019-08-28T22:05:16",
    //       "id": 45508,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 9,
    //           "name": "Online Co-Op",
    //           "slug": "online-co-op",
    //           "language": "eng",
    //           "games_count": 2356,
    //           "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
    //         },
    //         {
    //           "id": 31,
    //           "name": "Singleplayer",
    //           "slug": "singleplayer",
    //           "language": "eng",
    //           "games_count": 94283,
    //           "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
    //         },
    //         {
    //           "id": 397,
    //           "name": "Online multiplayer",
    //           "slug": "online-multiplayer",
    //           "language": "eng",
    //           "games_count": 3793,
    //           "image_background": "https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg"
    //         },
    //         {
    //           "id": 42417,
    //           "name": "Экшен",
    //           "slug": "ekshen",
    //           "language": "rus",
    //           "games_count": 20346,
    //           "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    //         },
    //         {
    //           "id": 42421,
    //           "name": "Стратегия",
    //           "slug": "strategiia",
    //           "language": "rus",
    //           "games_count": 9323,
    //           "image_background": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/9f0/9f06061be3db05fe7a7c0af470f514de.jpg"
    //         },
    //         {
    //           "id": 648882,
    //           "image": "https://media.rawg.io/media/screenshots/f39/f395b95cde6d3b566c56340a70d142d9.jpg"
    //         },
    //         {
    //           "id": 648883,
    //           "image": "https://media.rawg.io/media/screenshots/447/447ececeb64964497874b3e7db9d8856.jpg"
    //         },
    //         {
    //           "id": 648884,
    //           "image": "https://media.rawg.io/media/screenshots/198/198cebf748e108959d078e8a8d031132.jpg"
    //         },
    //         {
    //           "id": 648885,
    //           "image": "https://media.rawg.io/media/screenshots/be2/be25d857d3417ed85f68574b862ab2d7.jpg"
    //         },
    //         {
    //           "id": 648886,
    //           "image": "https://media.rawg.io/media/screenshots/9f0/9f06061be3db05fe7a7c0af470f514de.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         },
    //         {
    //           "platform": {
    //             "id": 5,
    //             "name": "Apple Macintosh",
    //             "slug": "mac"
    //           }
    //         },
    //         {
    //           "platform": {
    //             "id": 6,
    //             "name": "Linux",
    //             "slug": "linux"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 10,
    //           "name": "Strategy",
    //           "slug": "strategy"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "wild-buster-heroes-of-titan",
    //       "name": "Wild Buster: Heroes of Titan",
    //       "playtime": 3,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": [
    //         {
    //           "store": {
    //             "id": 1,
    //             "name": "Steam",
    //             "slug": "steam"
    //           }
    //         }
    //       ],
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/6e4/6e4704778367a2f11a3f871f05b0828b.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 22,
    //       "added_by_status": {
    //         "owned": 22
    //       },
    //       "metacritic": null,
    //       "suggestions_count": 262,
    //       "updated": "2019-04-22T09:29:40",
    //       "id": 45757,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 40847,
    //           "name": "Steam Achievements",
    //           "slug": "steam-achievements",
    //           "language": "eng",
    //           "games_count": 20092,
    //           "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
    //         },
    //         {
    //           "id": 14,
    //           "name": "Early Access",
    //           "slug": "early-access",
    //           "language": "eng",
    //           "games_count": 7090,
    //           "image_background": "https://media.rawg.io/media/screenshots/654/6540928602af293014efa90d75c420b7.jpg"
    //         },
    //         {
    //           "id": 24,
    //           "name": "RPG",
    //           "slug": "rpg",
    //           "language": "eng",
    //           "games_count": 10649,
    //           "image_background": "https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"
    //         },
    //         {
    //           "id": 1656,
    //           "name": "mmo",
    //           "slug": "mmo",
    //           "language": "eng",
    //           "games_count": 1083,
    //           "image_background": "https://media.rawg.io/media/screenshots/f84/f84ce6dafbd0513b61b13e262dad0f54.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/6e4/6e4704778367a2f11a3f871f05b0828b.jpg"
    //         },
    //         {
    //           "id": 651466,
    //           "image": "https://media.rawg.io/media/screenshots/510/510040656e20b43e758fb90b8fb2a0fa.jpg"
    //         },
    //         {
    //           "id": 651467,
    //           "image": "https://media.rawg.io/media/screenshots/657/6571708116da638dabe1faeb95f21a05.jpg"
    //         },
    //         {
    //           "id": 651468,
    //           "image": "https://media.rawg.io/media/screenshots/3ff/3ff0ffbf4bec4d46e4fce7f37fb8c17f.jpg"
    //         },
    //         {
    //           "id": 651469,
    //           "image": "https://media.rawg.io/media/screenshots/8bc/8bc3f41d09ce5414d223f3980d9f010f.jpg"
    //         },
    //         {
    //           "id": 651470,
    //           "image": "https://media.rawg.io/media/screenshots/6e4/6e4704778367a2f11a3f871f05b0828b.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 59,
    //           "name": "Massively Multiplayer",
    //           "slug": "massively-multiplayer"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         },
    //         {
    //           "id": 5,
    //           "name": "RPG",
    //           "slug": "role-playing-games-rpg"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "line-of-defense",
    //       "name": "Line of Defense",
    //       "playtime": 5,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/f97/f97e4cbd593b378b590f8b12dae50a92.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 8,
    //       "added_by_status": {
    //         "owned": 8
    //       },
    //       "metacritic": null,
    //       "suggestions_count": 558,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 41397,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/f97/f97e4cbd593b378b590f8b12dae50a92.jpg"
    //         },
    //         {
    //           "id": 591877,
    //           "image": "https://media.rawg.io/media/screenshots/d87/d87b9a068624bc215e8756657a842256.jpg"
    //         },
    //         {
    //           "id": 591878,
    //           "image": "https://media.rawg.io/media/screenshots/ef9/ef97a9a5be5b2f0532971c97079691b2.jpg"
    //         },
    //         {
    //           "id": 591879,
    //           "image": "https://media.rawg.io/media/screenshots/ac3/ac3e5256b1e80c87413126c182c384d6.jpg"
    //         },
    //         {
    //           "id": 591880,
    //           "image": "https://media.rawg.io/media/screenshots/999/9997c84f676954418172afb0b1ddd420_ZZCKEwM.jpg"
    //         },
    //         {
    //           "id": 591881,
    //           "image": "https://media.rawg.io/media/screenshots/ea7/ea7804a048581de396dd440bacae514a.jpg"
    //         },
    //         {
    //           "id": 591882,
    //           "image": "https://media.rawg.io/media/screenshots/fc3/fc362007e13409129d3901921f6d5474.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 59,
    //           "name": "Massively Multiplayer",
    //           "slug": "massively-multiplayer"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "kung-fu-superstar",
    //       "name": "Kung Fu Superstar",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 16,
    //             "name": "PlayStation 3",
    //             "slug": "playstation3"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/81a/81a4d3304f87a9285bdf4598206b49ea.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 127,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 41486,
    //       "score": null,
    //       "clip": null,
    //       "tags": [
    //         {
    //           "id": 275,
    //           "name": "Movie",
    //           "slug": "movie",
    //           "language": "eng",
    //           "games_count": 791,
    //           "image_background": "https://media.rawg.io/media/screenshots/64d/64dc39fbf4fb5e1df988564900b0a02c.jpg"
    //         },
    //         {
    //           "id": 402,
    //           "name": "Training",
    //           "slug": "training",
    //           "language": "eng",
    //           "games_count": 1456,
    //           "image_background": "https://media.rawg.io/media/screenshots/120/120aea0c9d5671357062881b6939c442.jpg"
    //         },
    //         {
    //           "id": 406,
    //           "name": "Story",
    //           "slug": "story",
    //           "language": "eng",
    //           "games_count": 7618,
    //           "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
    //         },
    //         {
    //           "id": 1529,
    //           "name": "fight",
    //           "slug": "fight",
    //           "language": "eng",
    //           "games_count": 5720,
    //           "image_background": "https://media.rawg.io/media/games/907/9072a603448c13e1223b53dcc8019cca.jpg"
    //         }
    //       ],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/81a/81a4d3304f87a9285bdf4598206b49ea.jpg"
    //         },
    //         {
    //           "id": 594922,
    //           "image": "https://media.rawg.io/media/screenshots/9c4/9c4d4aac34b26e4ea89c179a671fb55f.jpg"
    //         },
    //         {
    //           "id": 594923,
    //           "image": "https://media.rawg.io/media/screenshots/81a/81a4d3304f87a9285bdf4598206b49ea.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 2,
    //             "name": "PlayStation",
    //             "slug": "playstation"
    //           }
    //         }
    //       ],
    //       "genres": [
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "absolute-force-online",
    //       "name": "Absolute Force Online",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/be9/be93b6a9e7a8e67ff7e60c37f7450a2b.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [
    //         {
    //           "id": 3,
    //           "title": "meh",
    //           "count": 1,
    //           "percent": 100
    //         }
    //       ],
    //       "ratings_count": 1,
    //       "reviews_text_count": 0,
    //       "added": 2,
    //       "added_by_status": {
    //         "owned": 1,
    //         "dropped": 1
    //       },
    //       "metacritic": null,
    //       "suggestions_count": 489,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 41718,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 1,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/be9/be93b6a9e7a8e67ff7e60c37f7450a2b.jpg"
    //         },
    //         {
    //           "id": 601275,
    //           "image": "https://media.rawg.io/media/screenshots/7e5/7e562e32fd08d605cf1d016b0c348caa.jpg"
    //         },
    //         {
    //           "id": 601276,
    //           "image": "https://media.rawg.io/media/screenshots/9e2/9e2c941a3f4af7a75ba54f6918985e39.jpg"
    //         },
    //         {
    //           "id": 601277,
    //           "image": "https://media.rawg.io/media/screenshots/ff6/ff629bb09c1528e373fa5b3046eef28a.jpg"
    //         },
    //         {
    //           "id": 601278,
    //           "image": "https://media.rawg.io/media/screenshots/064/0647cc6f81f6ec00232f6e1d582274a8.jpg"
    //         },
    //         {
    //           "id": 601279,
    //           "image": "https://media.rawg.io/media/screenshots/398/398137f614118b6ba8f7e1f6cc3989e6.jpg"
    //         },
    //         {
    //           "id": 601280,
    //           "image": "https://media.rawg.io/media/screenshots/948/948824093bf44a841fb1036cfbd4d83c.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 59,
    //           "name": "Massively Multiplayer",
    //           "slug": "massively-multiplayer"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "toon-army",
    //       "name": "Toon Army",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/34f/34fd6ade14b93ed74ae831c32557316c.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 397,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 35837,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/34f/34fd6ade14b93ed74ae831c32557316c.jpg"
    //         },
    //         {
    //           "id": 394209,
    //           "image": "https://media.rawg.io/media/screenshots/233/23392541772a6ad53e2d2b77e58472ec.jpg"
    //         },
    //         {
    //           "id": 394210,
    //           "image": "https://media.rawg.io/media/screenshots/461/46172d182ecfafaaa9be0471e5d2de5e.jpg"
    //         },
    //         {
    //           "id": 394211,
    //           "image": "https://media.rawg.io/media/screenshots/c1c/c1cb86bf6ea53cd13915832f22393b4d.jpg"
    //         },
    //         {
    //           "id": 394212,
    //           "image": "https://media.rawg.io/media/screenshots/53f/53f2ffe463d92b3235e5954cea8c939d.jpg"
    //         },
    //         {
    //           "id": 394213,
    //           "image": "https://media.rawg.io/media/screenshots/d14/d14f84cd27784d0e07fb6f17ec1e91d1.jpg"
    //         },
    //         {
    //           "id": 394214,
    //           "image": "https://media.rawg.io/media/screenshots/bd2/bd2d9f65f0afc21fc5f0630b4d0bd799.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "prism-threat-level-red",
    //       "name": "PRISM: Threat Level Red",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/632/632aa48fc9781a73f57290e2799ac832.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 364,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 35859,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/632/632aa48fc9781a73f57290e2799ac832.jpg"
    //         },
    //         {
    //           "id": 395341,
    //           "image": "https://media.rawg.io/media/screenshots/fb6/fb6c57be88e49be148870a7aa3d1dc62.jpg"
    //         },
    //         {
    //           "id": 395342,
    //           "image": "https://media.rawg.io/media/screenshots/e26/e26369352bff7fe54390ad13262c23dd.jpg"
    //         },
    //         {
    //           "id": 395343,
    //           "image": "https://media.rawg.io/media/screenshots/c38/c381ba1ebf2221217256227bad3251c5.jpg"
    //         },
    //         {
    //           "id": 395344,
    //           "image": "https://media.rawg.io/media/screenshots/a23/a23015312d687ab5d11837e675de722d.jpg"
    //         },
    //         {
    //           "id": 395345,
    //           "image": "https://media.rawg.io/media/screenshots/ff9/ff9a9d864a4919efb0c3a0b74a30b1a7.jpg"
    //         },
    //         {
    //           "id": 395346,
    //           "image": "https://media.rawg.io/media/screenshots/985/985442a5bbe831b8b356f35a03e2f9b8.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "seed-2001ii",
    //       "name": "Seed (2001/II)",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/04e/04e48ccffb74725be7e703971677d5b9.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 448,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 35927,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/04e/04e48ccffb74725be7e703971677d5b9.jpg"
    //         },
    //         {
    //           "id": 399042,
    //           "image": "https://media.rawg.io/media/screenshots/557/55708549c8549351f450dca3d58af460.jpg"
    //         },
    //         {
    //           "id": 399043,
    //           "image": "https://media.rawg.io/media/screenshots/3ce/3cee140874e9b325656450bdabffe5bb.jpg"
    //         },
    //         {
    //           "id": 399044,
    //           "image": "https://media.rawg.io/media/screenshots/da7/da724eb5ff65f2a7bc9124aa44d0b718.jpg"
    //         },
    //         {
    //           "id": 399045,
    //           "image": "https://media.rawg.io/media/screenshots/56b/56bf4196c6fc2c5786c73367afad291e.jpg"
    //         },
    //         {
    //           "id": 399046,
    //           "image": "https://media.rawg.io/media/screenshots/73c/73c48b174d9b92ebc4bd35b4849c2d20.jpg"
    //         },
    //         {
    //           "id": 399047,
    //           "image": "https://media.rawg.io/media/screenshots/144/144b1d9aa3b378c2ab98cbb335417f9d.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "universal-combat-hold-the-line",
    //       "name": "Universal Combat: Hold the Line",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/e8a/e8a92118dd0cc731d41f13789cc1fcbd.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 303,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 36121,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/e8a/e8a92118dd0cc731d41f13789cc1fcbd.jpg"
    //         },
    //         {
    //           "id": 406888,
    //           "image": "https://media.rawg.io/media/screenshots/c09/c099117d4727ec2654a83bffb4be60ee.jpg"
    //         },
    //         {
    //           "id": 406889,
    //           "image": "https://media.rawg.io/media/screenshots/42a/42a12f216b85136833b0b29ab0be1f9d.jpg"
    //         },
    //         {
    //           "id": 406890,
    //           "image": "https://media.rawg.io/media/screenshots/76a/76a3c959126822b1d44ebcc08099259f.jpg"
    //         },
    //         {
    //           "id": 406891,
    //           "image": "https://media.rawg.io/media/screenshots/b94/b9408be9ffff0602708948d20f9c62db.jpg"
    //         },
    //         {
    //           "id": 406892,
    //           "image": "https://media.rawg.io/media/screenshots/124/1245808dc933650eba791c30c1de4675.jpg"
    //         },
    //         {
    //           "id": 406893,
    //           "image": "https://media.rawg.io/media/screenshots/791/7919b76e172c32a59095b1bba6086cb9.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         },
    //         {
    //           "id": 14,
    //           "name": "Simulation",
    //           "slug": "simulation"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "wrath-skeller",
    //       "name": "Wrath & Skeller",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/957/9571be3a37244fdb966930042582b24f.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 382,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 36158,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/957/9571be3a37244fdb966930042582b24f.jpg"
    //         },
    //         {
    //           "id": 407602,
    //           "image": "https://media.rawg.io/media/screenshots/c68/c681f5fb775f1f225a29384061da3ad2.jpg"
    //         },
    //         {
    //           "id": 407603,
    //           "image": "https://media.rawg.io/media/screenshots/3e3/3e362eede7848b5723f0c039270e365b.jpg"
    //         },
    //         {
    //           "id": 407604,
    //           "image": "https://media.rawg.io/media/screenshots/219/219008313c8f8117c08a82b5363bdf05.jpg"
    //         },
    //         {
    //           "id": 407605,
    //           "image": "https://media.rawg.io/media/screenshots/340/34032cd914cc42c15ec6b65754c187ef.jpg"
    //         },
    //         {
    //           "id": 407606,
    //           "image": "https://media.rawg.io/media/screenshots/36e/36e46024010af7e9cd5254af8fd36361.jpg"
    //         },
    //         {
    //           "id": 407607,
    //           "image": "https://media.rawg.io/media/screenshots/957/9571be3a37244fdb966930042582b24f.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         },
    //         {
    //           "id": 5,
    //           "name": "RPG",
    //           "slug": "role-playing-games-rpg"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "negative-space",
    //       "name": "Negative Space",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/1d1/1d1cf0a9e82254d7d85554461f6fd0ee.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 375,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 36175,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/1d1/1d1cf0a9e82254d7d85554461f6fd0ee.jpg"
    //         },
    //         {
    //           "id": 407887,
    //           "image": "https://media.rawg.io/media/screenshots/0e7/0e76ea17bf56d5a0aaaf72a99cc8064a.jpg"
    //         },
    //         {
    //           "id": 407888,
    //           "image": "https://media.rawg.io/media/screenshots/1ad/1ad4d518e09ef6eb2f78e966776d8cfc.jpg"
    //         },
    //         {
    //           "id": 407889,
    //           "image": "https://media.rawg.io/media/screenshots/1c3/1c3ba5a5c33bf13897871429df6dbcf9.jpg"
    //         },
    //         {
    //           "id": 407890,
    //           "image": "https://media.rawg.io/media/screenshots/529/52995102995df04e35ea9bdaeb2e1d4c.jpg"
    //         },
    //         {
    //           "id": 407891,
    //           "image": "https://media.rawg.io/media/screenshots/250/2506c5e64983dc286ae4d99dc2da122e.jpg"
    //         },
    //         {
    //           "id": 407892,
    //           "image": "https://media.rawg.io/media/screenshots/1a4/1a4ffa977aa08910bb5c4f0b3ea17bda.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "cyberfuge-second-battalion",
    //       "name": "Cyberfuge: Second Battalion",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/878/87823df4d3d5087bed968218527a3c18.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 490,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 36248,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/878/87823df4d3d5087bed968218527a3c18.jpg"
    //         },
    //         {
    //           "id": 410114,
    //           "image": "https://media.rawg.io/media/screenshots/6ba/6ba25fe997aaf728be95f778837f6f78.jpg"
    //         },
    //         {
    //           "id": 410115,
    //           "image": "https://media.rawg.io/media/screenshots/c77/c77fc93250d2d787cf5bb3838397076c.jpg"
    //         },
    //         {
    //           "id": 410116,
    //           "image": "https://media.rawg.io/media/screenshots/dc7/dc7de78706a3aa0fba550ba1194e19f5.jpg"
    //         },
    //         {
    //           "id": 410117,
    //           "image": "https://media.rawg.io/media/screenshots/62e/62e9a62cb5116e6c5b7275548769bde1.jpg"
    //         },
    //         {
    //           "id": 410118,
    //           "image": "https://media.rawg.io/media/screenshots/7d3/7d381390db7d15215e6c78d108b43b3c.jpg"
    //         },
    //         {
    //           "id": 410119,
    //           "image": "https://media.rawg.io/media/screenshots/30f/30f997869946d070263ddf5f594af3b0.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "vatan",
    //       "name": "Vatan",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/ba1/ba13be1c07b79c796ea90d90edbffb7a.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 479,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 36323,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/ba1/ba13be1c07b79c796ea90d90edbffb7a.jpg"
    //         },
    //         {
    //           "id": 412233,
    //           "image": "https://media.rawg.io/media/screenshots/a4d/a4df951a901d9f524ef59a92718b0af0.jpg"
    //         },
    //         {
    //           "id": 412234,
    //           "image": "https://media.rawg.io/media/screenshots/db4/db45a9ab648793b4183068926fb45fda.jpg"
    //         },
    //         {
    //           "id": 412235,
    //           "image": "https://media.rawg.io/media/screenshots/d01/d01901dc296a48effba798e0946fb04d.jpg"
    //         },
    //         {
    //           "id": 412236,
    //           "image": "https://media.rawg.io/media/screenshots/eed/eed5dcc43c58889d0514a1f3f88c807c.jpg"
    //         },
    //         {
    //           "id": 412237,
    //           "image": "https://media.rawg.io/media/screenshots/bcf/bcf29178312e8cce97a085bbe7589ceb.jpg"
    //         },
    //         {
    //           "id": 412238,
    //           "image": "https://media.rawg.io/media/screenshots/f3d/f3df24f6b50415816e35d50dd786429d.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "six-gun",
    //       "name": "Six Gun",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/367/367d543ad131acc7b85947a5ff062508.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 524,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 36595,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/367/367d543ad131acc7b85947a5ff062508.jpg"
    //         },
    //         {
    //           "id": 421107,
    //           "image": "https://media.rawg.io/media/screenshots/05a/05a96f4d4873bd08d575c9e5550bb93c.jpg"
    //         },
    //         {
    //           "id": 421108,
    //           "image": "https://media.rawg.io/media/screenshots/609/60979d157cb90890a223c120d6536ba3.jpg"
    //         },
    //         {
    //           "id": 421109,
    //           "image": "https://media.rawg.io/media/screenshots/25b/25b3bf283401527ac6b33aac0501fa01.jpg"
    //         },
    //         {
    //           "id": 421110,
    //           "image": "https://media.rawg.io/media/screenshots/016/016c1b9ac954e237d314b7d9f489ddc0.jpg"
    //         },
    //         {
    //           "id": 421111,
    //           "image": "https://media.rawg.io/media/screenshots/f67/f67ca3bf62613f925863dc9008f9d62f.jpg"
    //         },
    //         {
    //           "id": 421112,
    //           "image": "https://media.rawg.io/media/screenshots/69d/69d59945899369350622ce027c3d2765.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 2,
    //           "name": "Shooter",
    //           "slug": "shooter"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         }
    //       ]
    //     },
    //     {
    //       "slug": "erebus-travia-reborn",
    //       "name": "Erebus: Travia Reborn",
    //       "playtime": 0,
    //       "platforms": [
    //         {
    //           "platform": {
    //             "id": 4,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "stores": null,
    //       "released": null,
    //       "tba": false,
    //       "background_image": "https://media.rawg.io/media/screenshots/794/794bfc99e32e7111fc27d1aa2302f45f.jpg",
    //       "rating": 0,
    //       "rating_top": 0,
    //       "ratings": [],
    //       "ratings_count": 0,
    //       "reviews_text_count": 0,
    //       "added": 0,
    //       "added_by_status": null,
    //       "metacritic": null,
    //       "suggestions_count": 468,
    //       "updated": "2019-01-09T12:41:06",
    //       "id": 40167,
    //       "score": null,
    //       "clip": null,
    //       "tags": [],
    //       "esrb_rating": null,
    //       "user_game": null,
    //       "reviews_count": 0,
    //       "community_rating": 0,
    //       "saturated_color": "0f0f0f",
    //       "dominant_color": "0f0f0f",
    //       "short_screenshots": [
    //         {
    //           "id": -1,
    //           "image": "https://media.rawg.io/media/screenshots/794/794bfc99e32e7111fc27d1aa2302f45f.jpg"
    //         },
    //         {
    //           "id": 552318,
    //           "image": "https://media.rawg.io/media/screenshots/03c/03c48298f95298e7278b96d18f283c4a.jpg"
    //         },
    //         {
    //           "id": 552319,
    //           "image": "https://media.rawg.io/media/screenshots/30d/30d3faa8830740a2d2e565a8b77c2d66.jpg"
    //         },
    //         {
    //           "id": 552320,
    //           "image": "https://media.rawg.io/media/screenshots/004/00424d494b1e2f077637ba2328688c2e.jpg"
    //         },
    //         {
    //           "id": 552321,
    //           "image": "https://media.rawg.io/media/screenshots/6d5/6d5e67483809c40b2864995568acbcbd.jpg"
    //         },
    //         {
    //           "id": 552322,
    //           "image": "https://media.rawg.io/media/screenshots/f23/f2387aa54d915446513fe0b8daf9c00a.jpg"
    //         },
    //         {
    //           "id": 552323,
    //           "image": "https://media.rawg.io/media/screenshots/5fb/5fb6fe8d245fd0608348b7194dcbb1dd.jpg"
    //         }
    //       ],
    //       "parent_platforms": [
    //         {
    //           "platform": {
    //             "id": 1,
    //             "name": "PC",
    //             "slug": "pc"
    //           }
    //         }
    //       ],
    //       "genres": [
    //         {
    //           "id": 59,
    //           "name": "Massively Multiplayer",
    //           "slug": "massively-multiplayer"
    //         },
    //         {
    //           "id": 4,
    //           "name": "Action",
    //           "slug": "action"
    //         },
    //         {
    //           "id": 5,
    //           "name": "RPG",
    //           "slug": "role-playing-games-rpg"
    //         }
    //       ]
    //     }
    //   ],
    //   "user_platforms": false
    // })

  } catch (error) {
    console.error(error);
    throw error;
  }




}
