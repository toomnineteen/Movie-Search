const myData = [
    {
        id:1,
        name: "The Mother",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR87MgjSUTPyW43l-JmBleLsvRox7HY2dLxQbYA2kuo2Wr_B__t"
    },
    {
        id:2,
        name: "Gurudev Hoysala",
        about: "Gurudev Hoysala, a morally upright police inspector, is transferred to Athani to investigate a fellow officer's disappearance. However, a suspicious young couple soon complicates the case.",
        year: "2023",
        language: "Kannada",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlxEDcaH_agfz-u08JF8PI6JeFXfWz4MTjX1GPZj83pA1pXbZM"
    },
    {
        id:3,
        name: "Knock at the Cabin",
        about: "While vacationing at a remote cabin in the woods, a young girl and her parents are taken hostage by four armed strangers who demand they make an unthinkable choice to avert the apocalypse. Confused, scared and with limited access to the outside world, the family must decide what they believe before all is lost.",
        year: "2023",
        language: "English",
        image: "https://m.media-amazon.com/images/M/MV5BZTc4MjU0MjMtYTEwNy00YjNlLTk2MGYtMjNlNzFjMmY4MjQ0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id:4,
        name: "Tetris",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThx2etUSS9Q7pbqEo0BT5ro9LgwRaKcPq-gGkmSyLlKBb8g3PE"
    },
    {
        id:5,
        name: "Luther: The Fallen Sun",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9YmjJBQn3TVaawou4r84V8ZWwqBKAKED7RueUyZLcbOYFTHyz"
    },
    {
        id:6,
        name: "Chokehold",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTyDAf8mlq1or03mytUKuvkPo9ExvbiIZdFhKbHzF4MWHlEFow"
    },
    {
        id:7,
        name: "Hunt",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgI3Tca3KXwsMTI1JCMTT2OgWX_g2CBfhso0k1a7UMbV82mGx"
    },
    {
        id:8,
        name: "Infiesto",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7YpsW-nNQN7pwUNRuh-21j1bSEEVBg_yr1huN21Tw5PbeBKlV"
    },
    {
        id:9,
        name: "Mummies",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyj1Z1612qR26FQmOTX1pKqvVtXNcoghvOCnJ-KTHNYhvZrDdH"
    },
    {
        id:10,
        name: "Blood & Gold",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncqDPr-ITY-4o6VbsYSP4JKYq9yfC_dYx9EaeXl5uW1RpXcI4"
    },
    {
        id:11,
        name: "Ghosted",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgK93USuqNd_tjvrLg5Lmr-zlY6Wn05KbioX4Yo1zRsfyN6cIS"
    },
    {
        id:12,
        name: "The Last Kingdom",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ17XGATi5V_xrlBKORLKAc6kVh-Kejj6CwnbknLkVxO3N_Gb3m"
    },
    {
        id:13,
        name: "Unlocked",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScSsAGzmEaMUjlA0I16BAsqKq3lCGJ7hmqi2WLNf7-1LGP3PEo"
    },
    {
        id:14,
        name: "Sharper",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZxjehswLNpkcz27BKfrzwkQiFkRJ4SNdkn4EDxSW7FT0cPpl"
    },
    {
        id:15,
        name: "10 Days of a Good Man",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0ifGKGdHFeMKVJcJ1qyi1UgTZjQVsRYBC8amLWY1e-jxVa4ct"
    },
    {
        id:16,
        name: "Thunivu",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkrrxeANJaCSbwm6M4gw8OXyt1_BxiGLjbRuJPQqtnyOoVlWPp"
    },
    {
        id:17,
        name: "We Have a Ghost",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu"
    },
    {
        id:18,
        name: "AKA",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://www.movieslistdb.com/wp-content/uploads/2023/05/57.jpg"
    },
    {
        id:19,
        name: "Jung_E",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCwilnqLKL24i49SXT8R1mt6A83Az8CUryW7iMskBCc6XklDKT"
    },
    {
        id:20,
        name: "OMG! Oh My Girl",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hzVFhdeUhNwu6dDQQPjBxk5ENTujY4hwNQw2KCzqZhK2wU2i"
    },
    {
        id:21,
        name: "คนหิว เกมกระหาย",
        about: "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life.",
        year: "2023",
        language: "English",
        image: "https://upload.wikimedia.org/wikipedia/th/5/52/HungerNFPoster.jpg"
    },
]
export default myData