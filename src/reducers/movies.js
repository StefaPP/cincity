const initialState = [
  {
    "_id": "5c24ee41d8ffe25325608175",
    "title": "Guardians of the Galaxy Vol. 2",
    "year": "2017",
    "rated": "PG-13",
    "released": "05 May 2017",
    "runtime": "136 min",
    "genre": [
      "Action, Adventure, Comedy, Sci-Fi"
    ],
    "director": "James Gunn",
    "writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    "actors": [
      "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel"
    ],
    "plot": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
    "language": "English",
    "country": "USA",
    "awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
    "ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "83%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "metascore": "67",
    "imdbRating": "7.7",
    "imdbVotes": "422,969",
    "imdbID": "tt3896198",
    "type": "movie",
    "boxOffice": "$389,804,217",
    "production": "Walt Disney Pictures",
    "website": "https://marvel.com/guardians"
  }
];

export default function movies(state = [], action) {
  switch (action.type) {
    case 'MOVIES_SUCCESS': {
      return [
        ...state,
        ...action.response.body
      ]
    }
    case 'MOVIES_ERROR': {
      return [
        ...state
      ];
    }
    default:
      return state;
  }
};