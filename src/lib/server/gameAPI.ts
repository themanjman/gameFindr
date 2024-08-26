import { RAWG_API_KEY } from '$env/static/private'
import type { GameResult } from '@/types/gameAPI';


export const getLatestGames = (limit: number = 10): GameResult => {
    try {
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         // Add any necessary headers here
        //     }
        // };
        
        // return fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=released&page_size=${limit}`, options)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         throw error; // Re-throw the error for further handling
        //     });
    
        return {
            "count": 872466,
            "next": "https://api.rawg.io/api/games?key=eb5b0718276e4817b1cbb2cce57127ec&ordering=released&page=2&page_size=10",
            "previous": null,
            "results": [
                {
                    "id": 987698,
                    "slug": "heroes-of-might-magic-olden-era",
                    "name": "Heroes of Might & Magic: Olden Era",
                    "released": null,
                    "tba": true,
                    "background_image": "https://media.rawg.io/media/screenshots/69e/69ece38d22dcc1c44de7ddb7901a1a41.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 1,
                    "added_by_status": {
                        "toplay": 1
                    },
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-23T14:18:55",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 535002,
                                "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [
                        {
                            "id": 10,
                            "name": "Strategy",
                            "slug": "strategy",
                            "games_count": 57216,
                            "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg"
                        }
                    ],
                    "stores": [],
                    "clip": null,
                    "tags": [],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/69e/69ece38d22dcc1c44de7ddb7901a1a41.jpg"
                        },
                        {
                            "id": 4085104,
                            "image": "https://media.rawg.io/media/screenshots/69e/69ece38d22dcc1c44de7ddb7901a1a41.jpg"
                        }
                    ]
                },
                {
                    "id": 987691,
                    "slug": "real-anime-situation-dt",
                    "name": "Real Anime Situation! DT",
                    "released": null,
                    "tba": false,
                    "background_image": "https://media.rawg.io/media/screenshots/554/55468e42326e57441f175d5f3b4e5d55.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 0,
                    "added_by_status": null,
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-23T14:16:48",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 535002,
                                "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [],
                    "stores": [
                        {
                            "id": 988649,
                            "store": {
                                "id": 5,
                                "name": "GOG",
                                "slug": "gog",
                                "domain": "gog.com",
                                "games_count": 6277,
                                "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                            }
                        }
                    ],
                    "clip": null,
                    "tags": [
                        {
                            "id": 134,
                            "name": "Anime",
                            "slug": "anime",
                            "language": "eng",
                            "games_count": 13790,
                            "image_background": "https://media.rawg.io/media/games/67a/67aef58e8ead90609f7adbd20d72a033.jpg"
                        },
                        {
                            "id": 70,
                            "name": "War",
                            "slug": "war",
                            "language": "eng",
                            "games_count": 9396,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        },
                        {
                            "id": 406,
                            "name": "Story",
                            "slug": "story",
                            "language": "eng",
                            "games_count": 11429,
                            "image_background": "https://media.rawg.io/media/games/370/370a4cbcfa75e5238ee8f74bf323694d.jpg"
                        },
                        {
                            "id": 981,
                            "name": "battle",
                            "slug": "battle",
                            "language": "eng",
                            "games_count": 10654,
                            "image_background": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg"
                        },
                        {
                            "id": 808,
                            "name": "character",
                            "slug": "character",
                            "language": "eng",
                            "games_count": 8853,
                            "image_background": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg"
                        },
                        {
                            "id": 217,
                            "name": "Romance",
                            "slug": "romance",
                            "language": "eng",
                            "games_count": 8155,
                            "image_background": "https://media.rawg.io/media/games/8b9/8b9e77be7f0f7941b11ae4b21ca2db43.jpg"
                        },
                        {
                            "id": 1221,
                            "name": "history",
                            "slug": "history",
                            "language": "eng",
                            "games_count": 2373,
                            "image_background": "https://media.rawg.io/media/games/08e/08e8d09cd5aae30959c4486649fda3e6.jpg"
                        },
                        {
                            "id": 1709,
                            "name": "work",
                            "slug": "work",
                            "language": "eng",
                            "games_count": 9237,
                            "image_background": "https://media.rawg.io/media/games/bfb/bfb28df4f345165327555507c955a62a.jpg"
                        },
                        {
                            "id": 892,
                            "name": "love",
                            "slug": "love",
                            "language": "eng",
                            "games_count": 6368,
                            "image_background": "https://media.rawg.io/media/screenshots/a71/a716436bd36cbea4979b0ad7ecae578d.jpg"
                        },
                        {
                            "id": 2865,
                            "name": "girl",
                            "slug": "girl",
                            "language": "eng",
                            "games_count": 2062,
                            "image_background": "https://media.rawg.io/media/games/ae3/ae33061011b43b679b307adbcf492ef2.jpg"
                        },
                        {
                            "id": 688,
                            "name": "relationship",
                            "slug": "relationship",
                            "language": "eng",
                            "games_count": 1020,
                            "image_background": "https://media.rawg.io/media/games/d3e/d3ee2d7653cf9d4640335ff7a471ab07.jpg"
                        },
                        {
                            "id": 2835,
                            "name": "word",
                            "slug": "word",
                            "language": "eng",
                            "games_count": 2066,
                            "image_background": "https://media.rawg.io/media/screenshots/625/625813992758891d0a81aa1e1cc41c34.jpg"
                        },
                        {
                            "id": 3584,
                            "name": "characters",
                            "slug": "characters",
                            "language": "eng",
                            "games_count": 1221,
                            "image_background": "https://media.rawg.io/media/games/291/291037ffc44a560a4e22986e3700be33.jpg"
                        },
                        {
                            "id": 3865,
                            "name": "wind",
                            "slug": "wind",
                            "language": "eng",
                            "games_count": 133,
                            "image_background": "https://media.rawg.io/media/screenshots/618/618ad45dbba4ef1816cc724e36073bad.jpg"
                        },
                        {
                            "id": 1047,
                            "name": "moe",
                            "slug": "moe",
                            "language": "eng",
                            "games_count": 129,
                            "image_background": "https://media.rawg.io/media/screenshots/569/569bb4f78e647c5b41a734769d126d2e.jpg"
                        },
                        {
                            "id": 2110,
                            "name": "novel",
                            "slug": "novel",
                            "language": "eng",
                            "games_count": 137,
                            "image_background": "https://media.rawg.io/media/screenshots/f8e/f8e6986bd8bfb82a278c160f450e25dc.jpg"
                        },
                        {
                            "id": 5037,
                            "name": "crush",
                            "slug": "crush",
                            "language": "eng",
                            "games_count": 135,
                            "image_background": "https://media.rawg.io/media/screenshots/6f0/6f0b1809e3a93f17f774acfaaf78a8a0_6gO1JBD.jpg"
                        }
                    ],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/554/55468e42326e57441f175d5f3b4e5d55.jpg"
                        },
                        {
                            "id": 4085068,
                            "image": "https://media.rawg.io/media/screenshots/77a/77a0f95fe928890310be30eb65fbfc2e.jpg"
                        },
                        {
                            "id": 4085069,
                            "image": "https://media.rawg.io/media/screenshots/cfa/cfaef720818af7908cf06f0e353e7654.jpg"
                        },
                        {
                            "id": 4085070,
                            "image": "https://media.rawg.io/media/screenshots/dba/dba3a602a89b3d6809bd9d49dea1679d.jpg"
                        },
                        {
                            "id": 4085071,
                            "image": "https://media.rawg.io/media/screenshots/451/451dffb55a2632ed5da7e67f05178b90.jpg"
                        },
                        {
                            "id": 4085072,
                            "image": "https://media.rawg.io/media/screenshots/554/55468e42326e57441f175d5f3b4e5d55.jpg"
                        }
                    ]
                },
                {
                    "id": 987516,
                    "slug": "dying-light-the-beast",
                    "name": "Dying Light: The Beast",
                    "released": null,
                    "tba": true,
                    "background_image": "https://media.rawg.io/media/screenshots/e82/e827a66e7aa78cc030f21e81c305fcf9.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 4,
                    "added_by_status": {
                        "toplay": 4
                    },
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-20T21:14:19",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [],
                    "parent_platforms": [],
                    "genres": [
                        {
                            "id": 4,
                            "name": "Action",
                            "slug": "action",
                            "games_count": 181834,
                            "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                        },
                        {
                            "id": 2,
                            "name": "Shooter",
                            "slug": "shooter",
                            "games_count": 59498,
                            "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                        }
                    ],
                    "stores": [],
                    "clip": null,
                    "tags": [],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/e82/e827a66e7aa78cc030f21e81c305fcf9.jpg"
                        },
                        {
                            "id": 4083762,
                            "image": "https://media.rawg.io/media/screenshots/e82/e827a66e7aa78cc030f21e81c305fcf9.jpg"
                        }
                    ]
                },
                {
                    "id": 987515,
                    "slug": "mafia-the-old-country",
                    "name": "Mafia: The Old Country",
                    "released": null,
                    "tba": true,
                    "background_image": "https://media.rawg.io/media/screenshots/77f/77f3574b2c78d8685c40cf67b4384b2b.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 9,
                    "added_by_status": {
                        "yet": 1,
                        "toplay": 8
                    },
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-20T20:37:15",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 186,
                                "name": "Xbox Series S/X",
                                "slug": "xbox-series-x",
                                "image": null,
                                "year_end": null,
                                "year_start": 2020,
                                "games_count": 972,
                                "image_background": "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        },
                        {
                            "platform": {
                                "id": 187,
                                "name": "PlayStation 5",
                                "slug": "playstation5",
                                "image": null,
                                "year_end": null,
                                "year_start": 2020,
                                "games_count": 1107,
                                "image_background": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        },
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 534854,
                                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        },
                        {
                            "platform": {
                                "id": 2,
                                "name": "PlayStation",
                                "slug": "playstation"
                            }
                        },
                        {
                            "platform": {
                                "id": 3,
                                "name": "Xbox",
                                "slug": "xbox"
                            }
                        }
                    ],
                    "genres": [
                        {
                            "id": 4,
                            "name": "Action",
                            "slug": "action",
                            "games_count": 181834,
                            "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                        }
                    ],
                    "stores": [
                        {
                            "id": 988474,
                            "store": {
                                "id": 1,
                                "name": "Steam",
                                "slug": "steam",
                                "domain": "store.steampowered.com",
                                "games_count": 97921,
                                "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                            }
                        }
                    ],
                    "clip": null,
                    "tags": [],
                    "esrb_rating": {
                        "id": 6,
                        "name": "Rating Pending",
                        "slug": "rating-pending"
                    },
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/77f/77f3574b2c78d8685c40cf67b4384b2b.jpg"
                        },
                        {
                            "id": 4083759,
                            "image": "https://media.rawg.io/media/screenshots/13a/13a0c30f914cc2e22c5de76e1a4b284a.jpg"
                        },
                        {
                            "id": 4083760,
                            "image": "https://media.rawg.io/media/screenshots/737/7372ff1ea81052012c59c999cc8ef072.jpg"
                        },
                        {
                            "id": 4083761,
                            "image": "https://media.rawg.io/media/screenshots/77f/77f3574b2c78d8685c40cf67b4384b2b.jpg"
                        }
                    ]
                },
                {
                    "id": 987348,
                    "slug": "defect-decp",
                    "name": "defect d.e.c.p",
                    "released": null,
                    "tba": true,
                    "background_image": null,
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 0,
                    "added_by_status": null,
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-16T17:48:57",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 534854,
                                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [
                        {
                            "id": 4,
                            "name": "Action",
                            "slug": "action",
                            "games_count": 181834,
                            "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                        }
                    ],
                    "stores": [],
                    "clip": null,
                    "tags": [],
                    "esrb_rating": null,
                    "short_screenshots": []
                },
                {
                    "id": 987091,
                    "slug": "liminal-border-part-iii",
                    "name": "Liminal Border Part III",
                    "released": null,
                    "tba": false,
                    "background_image": "https://media.rawg.io/media/screenshots/ec9/ec9feb6e30e705ca8d36dc4775585c4e.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 0,
                    "added_by_status": null,
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-12T06:50:20",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 534854,
                                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [],
                    "stores": [
                        {
                            "id": 988050,
                            "store": {
                                "id": 5,
                                "name": "GOG",
                                "slug": "gog",
                                "domain": "gog.com",
                                "games_count": 6277,
                                "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                            }
                        }
                    ],
                    "clip": null,
                    "tags": [
                        {
                            "id": 144,
                            "name": "Crime",
                            "slug": "crime",
                            "language": "eng",
                            "games_count": 2882,
                            "image_background": "https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg"
                        },
                        {
                            "id": 406,
                            "name": "Story",
                            "slug": "story",
                            "language": "eng",
                            "games_count": 11429,
                            "image_background": "https://media.rawg.io/media/games/370/370a4cbcfa75e5238ee8f74bf323694d.jpg"
                        },
                        {
                            "id": 625,
                            "name": "party",
                            "slug": "party",
                            "language": "eng",
                            "games_count": 4119,
                            "image_background": "https://media.rawg.io/media/games/b61/b6193c5c1f917f38dce568f335f80c16.jpg"
                        },
                        {
                            "id": 774,
                            "name": "nature",
                            "slug": "nature",
                            "language": "eng",
                            "games_count": 6020,
                            "image_background": "https://media.rawg.io/media/games/23a/23acbd56da0c30bca0227967a5720c96.jpg"
                        },
                        {
                            "id": 1709,
                            "name": "work",
                            "slug": "work",
                            "language": "eng",
                            "games_count": 9237,
                            "image_background": "https://media.rawg.io/media/games/bfb/bfb28df4f345165327555507c955a62a.jpg"
                        },
                        {
                            "id": 1411,
                            "name": "build",
                            "slug": "build",
                            "language": "eng",
                            "games_count": 5036,
                            "image_background": "https://media.rawg.io/media/games/201/201feb4db3118c1440ebdce03e61e3fb.jpg"
                        },
                        {
                            "id": 3046,
                            "name": "destroy",
                            "slug": "destroy",
                            "language": "eng",
                            "games_count": 4611,
                            "image_background": "https://media.rawg.io/media/games/c16/c160077f8977cb22f14e56408c1560ef.jpg"
                        },
                        {
                            "id": 822,
                            "name": "escape",
                            "slug": "escape",
                            "language": "eng",
                            "games_count": 7631,
                            "image_background": "https://media.rawg.io/media/games/28c/28c4b2b8d8c190e8ba4133bef8f96f83.jpg"
                        },
                        {
                            "id": 3803,
                            "name": "boss",
                            "slug": "boss",
                            "language": "eng",
                            "games_count": 3105,
                            "image_background": "https://media.rawg.io/media/games/876/87695e289689a74aa507ce3df0afae35.jpg"
                        },
                        {
                            "id": 712,
                            "name": "school",
                            "slug": "school",
                            "language": "eng",
                            "games_count": 4575,
                            "image_background": "https://media.rawg.io/media/games/24d/24d7163164c078e49f4c7e45e55fdf9e.jpg"
                        },
                        {
                            "id": 1778,
                            "name": "food",
                            "slug": "food",
                            "language": "eng",
                            "games_count": 4921,
                            "image_background": "https://media.rawg.io/media/screenshots/66d/66dca08d36f0cd820c91d97c73a30924.jpeg"
                        },
                        {
                            "id": 992,
                            "name": "student",
                            "slug": "student",
                            "language": "eng",
                            "games_count": 1528,
                            "image_background": "https://media.rawg.io/media/screenshots/159/15922f21a14389fddb2cd0e009b45c83.jpg"
                        },
                        {
                            "id": 6043,
                            "name": "communication",
                            "slug": "communication",
                            "language": "eng",
                            "games_count": 185,
                            "image_background": "https://media.rawg.io/media/screenshots/fa7/fa72c19549451d626bb86140bbc517d5.jpg"
                        },
                        {
                            "id": 5512,
                            "name": "business",
                            "slug": "business",
                            "language": "eng",
                            "games_count": 1628,
                            "image_background": "https://media.rawg.io/media/screenshots/ccd/ccd81afb299b0cbd0feb70bfaa4b678e.jpg"
                        },
                        {
                            "id": 1429,
                            "name": "girls",
                            "slug": "girls",
                            "language": "eng",
                            "games_count": 2052,
                            "image_background": "https://media.rawg.io/media/screenshots/fe9/fe9eb79703dc3c900ca502a7f71611c1.jpg"
                        },
                        {
                            "id": 3584,
                            "name": "characters",
                            "slug": "characters",
                            "language": "eng",
                            "games_count": 1221,
                            "image_background": "https://media.rawg.io/media/games/291/291037ffc44a560a4e22986e3700be33.jpg"
                        },
                        {
                            "id": 7258,
                            "name": "shape",
                            "slug": "shape",
                            "language": "eng",
                            "games_count": 368,
                            "image_background": "https://media.rawg.io/media/screenshots/549/549f10641fb6aea302f5c6dffe4ccd17.jpg"
                        },
                        {
                            "id": 2786,
                            "name": "skills",
                            "slug": "skills",
                            "language": "eng",
                            "games_count": 496,
                            "image_background": "https://media.rawg.io/media/screenshots/e6b/e6bd460a9059ff429a0b9fc8f926b427.jpg"
                        },
                        {
                            "id": 2110,
                            "name": "novel",
                            "slug": "novel",
                            "language": "eng",
                            "games_count": 137,
                            "image_background": "https://media.rawg.io/media/screenshots/f8e/f8e6986bd8bfb82a278c160f450e25dc.jpg"
                        },
                        {
                            "id": 1163,
                            "name": "learning",
                            "slug": "learning",
                            "language": "eng",
                            "games_count": 682,
                            "image_background": "https://media.rawg.io/media/screenshots/77e/77eff21a522211431e41963c89248ec9.jpg"
                        }
                    ],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/ec9/ec9feb6e30e705ca8d36dc4775585c4e.jpg"
                        },
                        {
                            "id": 4080805,
                            "image": "https://media.rawg.io/media/screenshots/b20/b20cb40870453978603b65874bd8136e.jpg"
                        },
                        {
                            "id": 4080806,
                            "image": "https://media.rawg.io/media/screenshots/a1f/a1f8126ed3358a4d5b956ca6fda12904.jpg"
                        },
                        {
                            "id": 4080807,
                            "image": "https://media.rawg.io/media/screenshots/7e7/7e762f32aad5e0e3cead02811fabd255.jpg"
                        },
                        {
                            "id": 4080808,
                            "image": "https://media.rawg.io/media/screenshots/3bf/3bf501474c2e370aa3695f7b5ff649fa.jpg"
                        },
                        {
                            "id": 4080809,
                            "image": "https://media.rawg.io/media/screenshots/227/22792dd1fce5c8dec6120d9e66f0d929.jpg"
                        },
                        {
                            "id": 4080810,
                            "image": "https://media.rawg.io/media/screenshots/367/3673cfb7321b6c511462c25a679b6df8.jpg"
                        }
                    ]
                },
                {
                    "id": 986973,
                    "slug": "alabaster-dawn",
                    "name": "Alabaster Dawn",
                    "released": null,
                    "tba": true,
                    "background_image": "https://media.rawg.io/media/screenshots/04f/04f10a2504069392c048edfcf5787448.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 1,
                    "added_by_status": {
                        "toplay": 1
                    },
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-10T21:09:27",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 534854,
                                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [
                        {
                            "id": 4,
                            "name": "Action",
                            "slug": "action",
                            "games_count": 181834,
                            "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                        },
                        {
                            "id": 5,
                            "name": "RPG",
                            "slug": "role-playing-games-rpg",
                            "games_count": 56908,
                            "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                        }
                    ],
                    "stores": [],
                    "clip": null,
                    "tags": [],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/04f/04f10a2504069392c048edfcf5787448.jpg"
                        },
                        {
                            "id": 4079761,
                            "image": "https://media.rawg.io/media/screenshots/19e/19e028c006dad5cf2d9c5158750cd65d.jpg"
                        },
                        {
                            "id": 4079762,
                            "image": "https://media.rawg.io/media/screenshots/156/156635fcc6294e0336115c3218d8deda.jpg"
                        },
                        {
                            "id": 4079763,
                            "image": "https://media.rawg.io/media/screenshots/d22/d2228dadb4b521e6e8f174c96e42f910.jpg"
                        },
                        {
                            "id": 4079764,
                            "image": "https://media.rawg.io/media/screenshots/04f/04f10a2504069392c048edfcf5787448.jpg"
                        }
                    ]
                },
                {
                    "id": 986941,
                    "slug": "rue-valley",
                    "name": "Rue Valley",
                    "released": null,
                    "tba": false,
                    "background_image": "https://media.rawg.io/media/screenshots/72d/72dfed7420bcc2cfc456ef6a1318ed31.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 1,
                    "added_by_status": {
                        "toplay": 1
                    },
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-09T23:08:36",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 534854,
                                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [],
                    "stores": [
                        {
                            "id": 987892,
                            "store": {
                                "id": 5,
                                "name": "GOG",
                                "slug": "gog",
                                "domain": "gog.com",
                                "games_count": 6277,
                                "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                            }
                        }
                    ],
                    "clip": null,
                    "tags": [
                        {
                            "id": 468,
                            "name": "role-playing",
                            "slug": "role-playing",
                            "language": "eng",
                            "games_count": 1592,
                            "image_background": "https://media.rawg.io/media/games/fae/faebf3c8cbf30db3f46bfbecf6ada3d6.jpg"
                        },
                        {
                            "id": 406,
                            "name": "Story",
                            "slug": "story",
                            "language": "eng",
                            "games_count": 11429,
                            "image_background": "https://media.rawg.io/media/games/370/370a4cbcfa75e5238ee8f74bf323694d.jpg"
                        },
                        {
                            "id": 981,
                            "name": "battle",
                            "slug": "battle",
                            "language": "eng",
                            "games_count": 10654,
                            "image_background": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg"
                        },
                        {
                            "id": 808,
                            "name": "character",
                            "slug": "character",
                            "language": "eng",
                            "games_count": 8853,
                            "image_background": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg"
                        },
                        {
                            "id": 820,
                            "name": "secrets",
                            "slug": "secrets",
                            "language": "eng",
                            "games_count": 3352,
                            "image_background": "https://media.rawg.io/media/games/f35/f351524037fe40b677c570acbe218d05.jpg"
                        },
                        {
                            "id": 2232,
                            "name": "journey",
                            "slug": "journey",
                            "language": "eng",
                            "games_count": 2057,
                            "image_background": "https://media.rawg.io/media/games/fa7/fa7e8ba1bca24d8ac299c8d04a0cef59.jpg"
                        },
                        {
                            "id": 3584,
                            "name": "characters",
                            "slug": "characters",
                            "language": "eng",
                            "games_count": 1221,
                            "image_background": "https://media.rawg.io/media/games/291/291037ffc44a560a4e22986e3700be33.jpg"
                        },
                        {
                            "id": 1916,
                            "name": "memories",
                            "slug": "memories",
                            "language": "eng",
                            "games_count": 104,
                            "image_background": "https://media.rawg.io/media/screenshots/1af/1af9ee2d27b2b6841adb4312a0d7dbe6.jpg"
                        },
                        {
                            "id": 1699,
                            "name": "town",
                            "slug": "town",
                            "language": "eng",
                            "games_count": 726,
                            "image_background": "https://media.rawg.io/media/screenshots/9d9/9d924ae3976ebfe21872d7f7fe53ed34.jpg"
                        },
                        {
                            "id": 7258,
                            "name": "shape",
                            "slug": "shape",
                            "language": "eng",
                            "games_count": 368,
                            "image_background": "https://media.rawg.io/media/screenshots/549/549f10641fb6aea302f5c6dffe4ccd17.jpg"
                        },
                        {
                            "id": 3735,
                            "name": "loop",
                            "slug": "loop",
                            "language": "eng",
                            "games_count": 615,
                            "image_background": "https://media.rawg.io/media/screenshots/cf9/cf90097e47a02e91e099eb590c44ae4a.jpg"
                        },
                        {
                            "id": 3718,
                            "name": "effects",
                            "slug": "effects",
                            "language": "eng",
                            "games_count": 465,
                            "image_background": "https://media.rawg.io/media/screenshots/4ae/4ae32200fe3ee6b7286a80fbbe6a0631.jpg"
                        }
                    ],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/72d/72dfed7420bcc2cfc456ef6a1318ed31.jpg"
                        },
                        {
                            "id": 4079654,
                            "image": "https://media.rawg.io/media/screenshots/16a/16ae0585d29502116a23cb9082fdf2a7.jpg"
                        },
                        {
                            "id": 4079655,
                            "image": "https://media.rawg.io/media/screenshots/9ac/9aceb83d2138cc53b8cf1f86ea401b52.jpg"
                        },
                        {
                            "id": 4079656,
                            "image": "https://media.rawg.io/media/screenshots/40b/40bdf7b0c23c5bf8167c4193c223e73b.jpg"
                        },
                        {
                            "id": 4079657,
                            "image": "https://media.rawg.io/media/screenshots/8a0/8a04786bf43d9a4940af730d7d1adb3e.jpg"
                        },
                        {
                            "id": 4079658,
                            "image": "https://media.rawg.io/media/screenshots/69c/69c9c6cb3d502240a370cee44e6a9015.jpg"
                        },
                        {
                            "id": 4079659,
                            "image": "https://media.rawg.io/media/screenshots/2e9/2e9cb5567db82e82f736bddf689e627c.jpg"
                        }
                    ]
                },
                {
                    "id": 986940,
                    "slug": "rendering-ranger-r2-rewind",
                    "name": "Rendering Ranger: R² [Rewind]",
                    "released": null,
                    "tba": false,
                    "background_image": "https://media.rawg.io/media/screenshots/c87/c8744589ad88d65ab30b2bfa032c907a.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 0,
                    "added_by_status": null,
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-09T23:07:19",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 534854,
                                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [],
                    "stores": [
                        {
                            "id": 987891,
                            "store": {
                                "id": 5,
                                "name": "GOG",
                                "slug": "gog",
                                "domain": "gog.com",
                                "games_count": 6277,
                                "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                            }
                        }
                    ],
                    "clip": null,
                    "tags": [
                        {
                            "id": 3109,
                            "name": "weapons",
                            "slug": "weapons",
                            "language": "eng",
                            "games_count": 2247,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        },
                        {
                            "id": 726,
                            "name": "japan",
                            "slug": "japan",
                            "language": "eng",
                            "games_count": 1006,
                            "image_background": "https://media.rawg.io/media/games/74a/74a324529a14915adfc887d257f16f86.jpg"
                        },
                        {
                            "id": 3116,
                            "name": "fast",
                            "slug": "fast",
                            "language": "eng",
                            "games_count": 2162,
                            "image_background": "https://media.rawg.io/media/screenshots/16e/16e9e7a009a199f2b81b6684cf219278.jpg"
                        },
                        {
                            "id": 6581,
                            "name": "enemies",
                            "slug": "enemies",
                            "language": "eng",
                            "games_count": 2062,
                            "image_background": "https://media.rawg.io/media/screenshots/b34/b34dda4edec3184935c14a1bab3c129c.jpg"
                        },
                        {
                            "id": 6458,
                            "name": "rainbow",
                            "slug": "rainbow",
                            "language": "eng",
                            "games_count": 580,
                            "image_background": "https://media.rawg.io/media/screenshots/e41/e41996d596074701b2d1dcb12753e6d1.jpg"
                        },
                        {
                            "id": 5878,
                            "name": "invasion",
                            "slug": "invasion",
                            "language": "eng",
                            "games_count": 204,
                            "image_background": "https://media.rawg.io/media/screenshots/6af/6af0944f30bc2d0d445ecf844baaf9b6.jpg"
                        },
                        {
                            "id": 1412,
                            "name": "design",
                            "slug": "design",
                            "language": "eng",
                            "games_count": 1930,
                            "image_background": "https://media.rawg.io/media/screenshots/ce0/ce0158763a7c75eb5124df9ca19ca494.jpg"
                        },
                        {
                            "id": 4648,
                            "name": "super",
                            "slug": "super",
                            "language": "eng",
                            "games_count": 728,
                            "image_background": "https://media.rawg.io/media/screenshots/c61/c61f557f5c6ee507ebc0ba873b6cfa30.jpg"
                        },
                        {
                            "id": 9659,
                            "name": "rewind",
                            "slug": "rewind",
                            "language": "eng",
                            "games_count": 323,
                            "image_background": "https://media.rawg.io/media/screenshots/92b/92bb4b685263d5856d7fe5b2640ebb4f.jpg"
                        },
                        {
                            "id": 4949,
                            "name": "defend",
                            "slug": "defend",
                            "language": "eng",
                            "games_count": 100,
                            "image_background": "https://media.rawg.io/media/screenshots/c33/c3349e79c6e0f2943e6a80c9c976a5cb.jpg"
                        }
                    ],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/c87/c8744589ad88d65ab30b2bfa032c907a.jpg"
                        },
                        {
                            "id": 4079644,
                            "image": "https://media.rawg.io/media/screenshots/792/79284d98b476db9a2045f0c46d2b3e90.jpg"
                        },
                        {
                            "id": 4079645,
                            "image": "https://media.rawg.io/media/screenshots/55d/55d20b117cf1d3d58d0e21ab12cdf505.jpg"
                        },
                        {
                            "id": 4079646,
                            "image": "https://media.rawg.io/media/screenshots/2da/2da8f7d0aa1806a13acc220e057ad56f.jpg"
                        },
                        {
                            "id": 4079647,
                            "image": "https://media.rawg.io/media/screenshots/fb1/fb1cb05ea4d38e7c657a9989845996da.jpg"
                        },
                        {
                            "id": 4079648,
                            "image": "https://media.rawg.io/media/screenshots/d60/d601e552405eaf62e17990f6ee28dca1.jpg"
                        },
                        {
                            "id": 4079649,
                            "image": "https://media.rawg.io/media/screenshots/dd9/dd9ec9ac370a84b40e71f19dca5d5a28.jpg"
                        }
                    ]
                },
                {
                    "id": 986939,
                    "slug": "edge-of-sanity",
                    "name": "Edge of Sanity",
                    "released": null,
                    "tba": false,
                    "background_image": "https://media.rawg.io/media/screenshots/314/31446964cde32935df45c52f9f042cda.jpg",
                    "rating": 0.0,
                    "rating_top": 0,
                    "ratings": [],
                    "ratings_count": 0,
                    "reviews_text_count": 0,
                    "added": 0,
                    "added_by_status": null,
                    "metacritic": null,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2024-08-09T23:05:52",
                    "user_game": null,
                    "reviews_count": 0,
                    "community_rating": 0,
                    "saturated_color": "0f0f0f",
                    "dominant_color": "0f0f0f",
                    "platforms": [
                        {
                            "platform": {
                                "id": 4,
                                "name": "PC",
                                "slug": "pc",
                                "image": null,
                                "year_end": null,
                                "year_start": null,
                                "games_count": 534854,
                                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                            },
                            "released_at": null,
                            "requirements_en": null,
                            "requirements_ru": null
                        }
                    ],
                    "parent_platforms": [
                        {
                            "platform": {
                                "id": 1,
                                "name": "PC",
                                "slug": "pc"
                            }
                        }
                    ],
                    "genres": [],
                    "stores": [
                        {
                            "id": 987890,
                            "store": {
                                "id": 5,
                                "name": "GOG",
                                "slug": "gog",
                                "domain": "gog.com",
                                "games_count": 6277,
                                "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                            }
                        }
                    ],
                    "clip": null,
                    "tags": [
                        {
                            "id": 16,
                            "name": "Horror",
                            "slug": "horror",
                            "language": "eng",
                            "games_count": 44882,
                            "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                        },
                        {
                            "id": 1,
                            "name": "Survival",
                            "slug": "survival",
                            "language": "eng",
                            "games_count": 8963,
                            "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
                        },
                        {
                            "id": 406,
                            "name": "Story",
                            "slug": "story",
                            "language": "eng",
                            "games_count": 11429,
                            "image_background": "https://media.rawg.io/media/games/370/370a4cbcfa75e5238ee8f74bf323694d.jpg"
                        },
                        {
                            "id": 1529,
                            "name": "fight",
                            "slug": "fight",
                            "language": "eng",
                            "games_count": 7894,
                            "image_background": "https://media.rawg.io/media/games/c7b/c7b853c1a0ffd4f5ea24a263fe895855.jpg"
                        },
                        {
                            "id": 820,
                            "name": "secrets",
                            "slug": "secrets",
                            "language": "eng",
                            "games_count": 3352,
                            "image_background": "https://media.rawg.io/media/games/f35/f351524037fe40b677c570acbe218d05.jpg"
                        },
                        {
                            "id": 624,
                            "name": "Monsters",
                            "slug": "monsters",
                            "language": "eng",
                            "games_count": 9611,
                            "image_background": "https://media.rawg.io/media/games/988/98834d39955e7f15d3717fac438128aa.jpg"
                        },
                        {
                            "id": 3068,
                            "name": "future",
                            "slug": "future",
                            "language": "eng",
                            "games_count": 3128,
                            "image_background": "https://media.rawg.io/media/screenshots/53a/53a98929b8c944db6522487896fd9264.jpg"
                        },
                        {
                            "id": 1079,
                            "name": "environment",
                            "slug": "environment",
                            "language": "eng",
                            "games_count": 7113,
                            "image_background": "https://media.rawg.io/media/games/bef/bef40c8ee09ad001c0f0b2cf0d07f20e.jpg"
                        },
                        {
                            "id": 1129,
                            "name": "art",
                            "slug": "art",
                            "language": "eng",
                            "games_count": 9829,
                            "image_background": "https://media.rawg.io/media/games/032/0322d8688637ff99a68e6cbed6b7e393.jpg"
                        },
                        {
                            "id": 1807,
                            "name": "water",
                            "slug": "water",
                            "language": "eng",
                            "games_count": 3861,
                            "image_background": "https://media.rawg.io/media/screenshots/97a/97ab26a9d092783e68190dc686916b0b.jpg"
                        },
                        {
                            "id": 18426,
                            "name": "enemy",
                            "slug": "enemy",
                            "language": "eng",
                            "games_count": 2566,
                            "image_background": "https://media.rawg.io/media/screenshots/a54/a549f520260d95fd755786786efe43b2.jpg"
                        },
                        {
                            "id": 1778,
                            "name": "food",
                            "slug": "food",
                            "language": "eng",
                            "games_count": 4921,
                            "image_background": "https://media.rawg.io/media/screenshots/66d/66dca08d36f0cd820c91d97c73a30924.jpeg"
                        },
                        {
                            "id": 2863,
                            "name": "darkness",
                            "slug": "darkness",
                            "language": "eng",
                            "games_count": 470,
                            "image_background": "https://media.rawg.io/media/screenshots/e9e/e9e1036b14a77a3e1d984c48ae75d236.jpg"
                        },
                        {
                            "id": 3584,
                            "name": "characters",
                            "slug": "characters",
                            "language": "eng",
                            "games_count": 1221,
                            "image_background": "https://media.rawg.io/media/games/291/291037ffc44a560a4e22986e3700be33.jpg"
                        },
                        {
                            "id": 9081,
                            "name": "search",
                            "slug": "search",
                            "language": "eng",
                            "games_count": 580,
                            "image_background": "https://media.rawg.io/media/screenshots/5f4/5f4cf56f2dd6b66d67595bab0d35135a.jpg"
                        },
                        {
                            "id": 3729,
                            "name": "choices",
                            "slug": "choices",
                            "language": "eng",
                            "games_count": 462,
                            "image_background": "https://media.rawg.io/media/screenshots/399/3999efe49d9eac11b6fedd14f7d67c3c.jpg"
                        },
                        {
                            "id": 9973,
                            "name": "madness",
                            "slug": "madness",
                            "language": "eng",
                            "games_count": 133,
                            "image_background": "https://media.rawg.io/media/screenshots/28e/28e7d5cd7e3fba6ecb9966077cf61c23.jpg"
                        },
                        {
                            "id": 675,
                            "name": "creatures",
                            "slug": "creatures",
                            "language": "eng",
                            "games_count": 233,
                            "image_background": "https://media.rawg.io/media/screenshots/f68/f68b50c69364afcd040c336b68126a3a.jpg"
                        },
                        {
                            "id": 955,
                            "name": "cthulhu",
                            "slug": "cthulhu",
                            "language": "eng",
                            "games_count": 160,
                            "image_background": "https://media.rawg.io/media/screenshots/9eb/9ebe7fc329bbe86bb826583821b589fc.jpg"
                        },
                        {
                            "id": 3776,
                            "name": "lab",
                            "slug": "lab",
                            "language": "eng",
                            "games_count": 307,
                            "image_background": "https://media.rawg.io/media/screenshots/79c/79cb268052c7574e5d0419b521a75381.jpg"
                        }
                    ],
                    "esrb_rating": null,
                    "short_screenshots": [
                        {
                            "id": -1,
                            "image": "https://media.rawg.io/media/screenshots/314/31446964cde32935df45c52f9f042cda.jpg"
                        },
                        {
                            "id": 4079634,
                            "image": "https://media.rawg.io/media/screenshots/ddd/ddda93ff12648df2f32b3394d136800a.jpg"
                        },
                        {
                            "id": 4079635,
                            "image": "https://media.rawg.io/media/screenshots/3dc/3dcbed27d3e8ed47b400b73fb4a3a8c3.jpg"
                        },
                        {
                            "id": 4079636,
                            "image": "https://media.rawg.io/media/screenshots/761/76151a6b616ae95a417c31e861344370.jpg"
                        },
                        {
                            "id": 4079637,
                            "image": "https://media.rawg.io/media/screenshots/330/330e750bd0397b72283b7622b06b09df.jpg"
                        },
                        {
                            "id": 4079638,
                            "image": "https://media.rawg.io/media/screenshots/242/24284a01ae619030d692b02c19ceb886.jpg"
                        },
                        {
                            "id": 4079639,
                            "image": "https://media.rawg.io/media/screenshots/2d4/2d4cd6724644832aee7ecf8d44bf5c82.jpg"
                        }
                    ]
                }
            ],
            "seo_title": "All Games",
            "seo_description": "",
            "seo_keywords": "",
            "seo_h1": "All Games",
            "noindex": false,
            "nofollow": false,
            "description": "",
            "filters": {
                "years": [
                    {
                        "from": 2020,
                        "to": 2024,
                        "filter": "2020-01-01,2024-12-31",
                        "decade": 2020,
                        "years": [
                            {
                                "year": 2024,
                                "count": 10836,
                                "nofollow": false
                            },
                            {
                                "year": 2023,
                                "count": 61950,
                                "nofollow": false
                            },
                            {
                                "year": 2022,
                                "count": 168175,
                                "nofollow": false
                            },
                            {
                                "year": 2021,
                                "count": 158699,
                                "nofollow": false
                            },
                            {
                                "year": 2020,
                                "count": 121363,
                                "nofollow": false
                            }
                        ],
                        "nofollow": true,
                        "count": 521023
                    },
                    {
                        "from": 2010,
                        "to": 2019,
                        "filter": "2010-01-01,2019-12-31",
                        "decade": 2010,
                        "years": [
                            {
                                "year": 2019,
                                "count": 73687,
                                "nofollow": false
                            },
                            {
                                "year": 2018,
                                "count": 67946,
                                "nofollow": false
                            },
                            {
                                "year": 2017,
                                "count": 54591,
                                "nofollow": true
                            },
                            {
                                "year": 2016,
                                "count": 40244,
                                "nofollow": true
                            },
                            {
                                "year": 2015,
                                "count": 25898,
                                "nofollow": true
                            },
                            {
                                "year": 2014,
                                "count": 15360,
                                "nofollow": true
                            },
                            {
                                "year": 2013,
                                "count": 6342,
                                "nofollow": true
                            },
                            {
                                "year": 2012,
                                "count": 5389,
                                "nofollow": true
                            },
                            {
                                "year": 2011,
                                "count": 4318,
                                "nofollow": true
                            },
                            {
                                "year": 2010,
                                "count": 3900,
                                "nofollow": true
                            }
                        ],
                        "nofollow": true,
                        "count": 297675
                    },
                    {
                        "from": 2000,
                        "to": 2009,
                        "filter": "2000-01-01,2009-12-31",
                        "decade": 2000,
                        "years": [
                            {
                                "year": 2009,
                                "count": 3119,
                                "nofollow": true
                            },
                            {
                                "year": 2008,
                                "count": 2043,
                                "nofollow": true
                            },
                            {
                                "year": 2007,
                                "count": 1594,
                                "nofollow": true
                            },
                            {
                                "year": 2006,
                                "count": 1309,
                                "nofollow": true
                            },
                            {
                                "year": 2005,
                                "count": 1198,
                                "nofollow": true
                            },
                            {
                                "year": 2004,
                                "count": 1192,
                                "nofollow": true
                            },
                            {
                                "year": 2003,
                                "count": 1173,
                                "nofollow": true
                            },
                            {
                                "year": 2002,
                                "count": 1027,
                                "nofollow": true
                            },
                            {
                                "year": 2001,
                                "count": 1147,
                                "nofollow": true
                            },
                            {
                                "year": 2000,
                                "count": 1051,
                                "nofollow": true
                            }
                        ],
                        "nofollow": true,
                        "count": 14853
                    },
                    {
                        "from": 1990,
                        "to": 1999,
                        "filter": "1990-01-01,1999-12-31",
                        "decade": 1990,
                        "years": [
                            {
                                "year": 1999,
                                "count": 813,
                                "nofollow": true
                            },
                            {
                                "year": 1998,
                                "count": 752,
                                "nofollow": true
                            },
                            {
                                "year": 1997,
                                "count": 882,
                                "nofollow": true
                            },
                            {
                                "year": 1996,
                                "count": 792,
                                "nofollow": true
                            },
                            {
                                "year": 1995,
                                "count": 879,
                                "nofollow": true
                            },
                            {
                                "year": 1994,
                                "count": 840,
                                "nofollow": true
                            },
                            {
                                "year": 1993,
                                "count": 762,
                                "nofollow": true
                            },
                            {
                                "year": 1992,
                                "count": 672,
                                "nofollow": true
                            },
                            {
                                "year": 1991,
                                "count": 589,
                                "nofollow": true
                            },
                            {
                                "year": 1990,
                                "count": 545,
                                "nofollow": true
                            }
                        ],
                        "nofollow": true,
                        "count": 7526
                    },
                    {
                        "from": 1980,
                        "to": 1989,
                        "filter": "1980-01-01,1989-12-31",
                        "decade": 1980,
                        "years": [
                            {
                                "year": 1989,
                                "count": 440,
                                "nofollow": true
                            },
                            {
                                "year": 1988,
                                "count": 325,
                                "nofollow": true
                            },
                            {
                                "year": 1987,
                                "count": 348,
                                "nofollow": true
                            },
                            {
                                "year": 1986,
                                "count": 254,
                                "nofollow": true
                            },
                            {
                                "year": 1985,
                                "count": 231,
                                "nofollow": true
                            },
                            {
                                "year": 1984,
                                "count": 185,
                                "nofollow": true
                            },
                            {
                                "year": 1983,
                                "count": 207,
                                "nofollow": true
                            },
                            {
                                "year": 1982,
                                "count": 149,
                                "nofollow": true
                            },
                            {
                                "year": 1981,
                                "count": 66,
                                "nofollow": true
                            },
                            {
                                "year": 1980,
                                "count": 35,
                                "nofollow": true
                            }
                        ],
                        "nofollow": true,
                        "count": 2240
                    },
                    {
                        "from": 1970,
                        "to": 1979,
                        "filter": "1970-01-01,1979-12-31",
                        "decade": 1970,
                        "years": [
                            {
                                "year": 1979,
                                "count": 15,
                                "nofollow": true
                            },
                            {
                                "year": 1978,
                                "count": 17,
                                "nofollow": true
                            },
                            {
                                "year": 1977,
                                "count": 13,
                                "nofollow": true
                            },
                            {
                                "year": 1976,
                                "count": 7,
                                "nofollow": true
                            },
                            {
                                "year": 1975,
                                "count": 3,
                                "nofollow": true
                            },
                            {
                                "year": 1974,
                                "count": 2,
                                "nofollow": true
                            },
                            {
                                "year": 1973,
                                "count": 1,
                                "nofollow": true
                            },
                            {
                                "year": 1972,
                                "count": 2,
                                "nofollow": true
                            },
                            {
                                "year": 1971,
                                "count": 6,
                                "nofollow": true
                            },
                            {
                                "year": 1970,
                                "count": 1,
                                "nofollow": true
                            }
                        ],
                        "nofollow": true,
                        "count": 67
                    },
                    {
                        "from": 1960,
                        "to": 1969,
                        "filter": "1960-01-01,1969-12-31",
                        "decade": 1960,
                        "years": [
                            {
                                "year": 1962,
                                "count": 1,
                                "nofollow": true
                            }
                        ],
                        "nofollow": true,
                        "count": 1
                    },
                    {
                        "from": 1950,
                        "to": 1959,
                        "filter": "1950-01-01,1959-12-31",
                        "decade": 1950,
                        "years": [
                            {
                                "year": 1958,
                                "count": 1,
                                "nofollow": true
                            },
                            {
                                "year": 1954,
                                "count": 1,
                                "nofollow": true
                            }
                        ],
                        "nofollow": true,
                        "count": 2
                    }
                ]
            },
            "nofollow_collections": [
                "stores"
            ]
        }
    } catch (error) {
        console.error(error);
        throw error;
    }  
}