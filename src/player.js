const players = [
  {
    name: "LeBron James",
    image: "https://images.hdqwalls.com/wallpapers/lebron-james-5k-xy.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
      stealsPerGame: 1.6,
      blocksPerGame: 0.8,
      fieldGoalPercentage: 51.3,
    },
  },
  {
    name: "Stephen Curry",
    image:
      "https://th.bing.com/th/id/OIP.dKX58G4X97RIgYqN4xJMUQHaE7?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    position: "Guard",
    stats: {
      pointsPerGame: 30.1,
      assistsPerGame: 6.4,
      reboundsPerGame: 5.2,
      stealsPerGame: 1.5,
      blocksPerGame: 0.3,
      fieldGoalPercentage: 47.6,
    },
  },
  {
    name: "Kevin Durant",
    image:
      "https://th.bing.com/th/id/R.4dc919ef36c41d8a9a853a846ec6fa4a?rik=vYOfoZTFAkiJHw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f64609-NBA-basketball-Kevin_Durant-Oklahoma_City_Thunder.jpg&ehk=r69hVtipYIzKfCEfo5U5w%2brwKuU68Eh97Flj7BnDYI0%3d&risl=&pid=ImgRaw&r=0",
    position: "Forward",
    stats: {
      pointsPerGame: 28.7,
      assistsPerGame: 5.5,
      reboundsPerGame: 7.1,
      stealsPerGame: 1.0,
      blocksPerGame: 1.2,
      fieldGoalPercentage: 53.7,
    },
  },
  {
    name: "Giannis Antetokounmpo",
    image:
      "https://th.bing.com/th/id/OIP.Ni-MvnMe5kaBskRuCpMixAHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    position: "Forward",
    stats: {
      pointsPerGame: 27.3,
      assistsPerGame: 5.9,
      reboundsPerGame: 11.2,
      stealsPerGame: 1.3,
      blocksPerGame: 1.4,
      fieldGoalPercentage: 55.3,
    },
  },
  {
    name: "James Harden",
    image:
      "https://th.bing.com/th/id/OIP.XnrbP3Nuqs9ql6b-BEuCPAHaEK?w=1600&h=900&rs=1&pid=ImgDetMain",
    position: "Guard",
    stats: {
      pointsPerGame: 24.6,
      assistsPerGame: 10.8,
      reboundsPerGame: 8.0,
      stealsPerGame: 1.8,
      blocksPerGame: 0.6,
      fieldGoalPercentage: 44.1,
    },
  },
  {
    name: "Kawhi Leonard",
    image:
      "https://media.nbcdfw.com/2024/07/240710-kawhi-leonard-getty.jpg?quality=85&strip=all&resize=1200%2C675",
    position: "Forward",
    stats: {
      pointsPerGame: 25.8,
      assistsPerGame: 4.9,
      reboundsPerGame: 6.9,
      stealsPerGame: 1.8,
      blocksPerGame: 0.7,
      fieldGoalPercentage: 49.3,
    },
  },
  {
    name: "Luka Doncic",
    image:
      "https://www.gambledex.com/wp-content/uploads/2019/12/luka-doncic-top-6-player-1-1024x1024.jpg",
    position: "Guard",
    stats: {
      pointsPerGame: 28.6,
      assistsPerGame: 8.8,
      reboundsPerGame: 9.1,
      stealsPerGame: 1.1,
      blocksPerGame: 0.5,
      fieldGoalPercentage: 46.3,
    },
  },
  {
    name: "Nikola Jokic",
    image:
      "https://cdn.vanguardngr.com/wp-content/uploads/2019/08/Nikola-Jokic.jpg?width=1500&auto_optimize=medium",
    position: "Center",
    stats: {
      pointsPerGame: 26.4,
      assistsPerGame: 8.3,
      reboundsPerGame: 10.8,
      stealsPerGame: 1.4,
      blocksPerGame: 0.8,
      fieldGoalPercentage: 56.6,
    },
  },
  {
    name: "Anthony Davis",
    image:
      "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://hoopshabit.com/files/2016/10/9559181-nba-new-orleans-pelicans-media-day.jpg",
    position: "Forward-Center",
    stats: {
      pointsPerGame: 22.5,
      assistsPerGame: 3.1,
      reboundsPerGame: 9.5,
      stealsPerGame: 1.3,
      blocksPerGame: 2.3,
      fieldGoalPercentage: 51.8,
    },
  },
  {
    name: "Damian Lillard",
    image: "https://images.hdqwalls.com/wallpapers/damian-lillard-i7.jpg",
    position: "Guard",
    stats: {
      pointsPerGame: 29.4,
      assistsPerGame: 7.7,
      reboundsPerGame: 4.3,
      stealsPerGame: 1.0,
      blocksPerGame: 0.3,
      fieldGoalPercentage: 44.2,
    },
  },
  {
    name: "Joel Embiid",
    image:
      "https://s.yimg.com/uu/api/res/1.2/rltxkdvx7IErTVIiavTz8Q--~B/aD0yNTY1O3c9Mzg0NztzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-06/1637c140-af3d-11ea-affd-39ac3806c29c",
    position: "Center",
    stats: {
      pointsPerGame: 30.3,
      assistsPerGame: 4.2,
      reboundsPerGame: 11.1,
      stealsPerGame: 1.3,
      blocksPerGame: 1.5,
      fieldGoalPercentage: 51.5,
    },
  },
  {
    name: "Jayson Tatum",
    image: "https://wallpapercave.com/wp/wp10519429.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 26.9,
      assistsPerGame: 4.4,
      reboundsPerGame: 8.0,
      stealsPerGame: 1.1,
      blocksPerGame: 0.8,
      fieldGoalPercentage: 45.9,
    },
  },
  {
    name: "Kyrie Irving",
    image:
      "https://getwallpapers.com/wallpaper/full/4/9/4/1079863-new-kyrie-irving-wallpapers-2261x1739.jpg",
    position: "Guard",
    stats: {
      pointsPerGame: 27.4,
      assistsPerGame: 5.6,
      reboundsPerGame: 4.7,
      stealsPerGame: 1.3,
      blocksPerGame: 0.5,
      fieldGoalPercentage: 50.2,
    },
  },
  {
    name: "Paul George",
    image:
      "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/http://hoopshabit.com/wp-content/uploads/getty-images/2018/08/1193012925.jpeg",
    position: "Forward",
    stats: {
      pointsPerGame: 24.3,
      assistsPerGame: 5.2,
      reboundsPerGame: 6.4,
      stealsPerGame: 1.6,
      blocksPerGame: 0.4,
      fieldGoalPercentage: 46.2,
    },
  },
  {
    name: "Jimmy Butler",
    image:
      "https://th.bing.com/th/id/OIP.0d_y7Dauu91Gy41tuTn7EgHaE8?rs=1&pid=ImgDetMain",
    position: "Forward",
    stats: {
      pointsPerGame: 22.2,
      assistsPerGame: 5.5,
      reboundsPerGame: 6.3,
      stealsPerGame: 1.7,
      blocksPerGame: 0.6,
      fieldGoalPercentage: 48.8,
    },
  },
  {
    name: "Bradley Beal",
    image:
      "https://th.bing.com/th/id/R.eefd856dbd158da2afa14b67747ee784?rik=8F7kb3CRMgk3Mw&riu=http%3a%2f%2fdcsportsking.com%2fwp-content%2fuploads%2f2020%2f10%2f48999222002_88d164cf0a_k-1.jpg&ehk=%2fYo7UeWLHcQ%2b3VP9JRpeH9ckUvB5Gobh6Cro5zv6Dxg%3d&risl=&pid=ImgRaw&r=0",
    position: "Guard",
    stats: {
      pointsPerGame: 31.3,
      assistsPerGame: 4.4,
      reboundsPerGame: 5.0,
      stealsPerGame: 1.2,
      blocksPerGame: 0.4,
      fieldGoalPercentage: 48.5,
    },
  },
  {
    name: "Karl-Anthony Towns",
    image:
      "https://cdn.nba.com/manage/2022/06/GettyImages-1239676561-scaled-e1656625510152.jpg",
    position: "Center",
    stats: {
      pointsPerGame: 24.8,
      assistsPerGame: 3.6,
      reboundsPerGame: 10.6,
      stealsPerGame: 0.9,
      blocksPerGame: 1.3,
      fieldGoalPercentage: 52.5,
    },
  },
  {
    name: "Trae Young",
    image:
      "https://i2.wp.com/www.zagsblog.com/wp-content/uploads/2017/12/Trae-Young.jpg?fit=1000%2C667",
    position: "Guard",
    stats: {
      pointsPerGame: 27.9,
      assistsPerGame: 9.4,
      reboundsPerGame: 4.0,
      stealsPerGame: 1.1,
      blocksPerGame: 0.2,
      fieldGoalPercentage: 44.1,
    },
  },
  {
    name: "Donovan Mitchell",
    image:
      "https://th.bing.com/th/id/OIP.tge5RtBmwcqP5o7B2G3FZwAAAA?rs=1&pid=ImgDetMain",
    position: "Guard",
    stats: {
      pointsPerGame: 26.4,
      assistsPerGame: 5.2,
      reboundsPerGame: 4.4,
      stealsPerGame: 1.0,
      blocksPerGame: 0.3,
      fieldGoalPercentage: 45.8,
    },
  },
  {
    name: "Zion Williamson",
    image:
      "https://cdn.vox-cdn.com/thumbor/JHxvI7CC0DnYU4TN0BLICadqD58=/0x0:3303x2311/1200x800/filters:focal(1837x446:2365x974)/cdn.vox-cdn.com/uploads/chorus_image/image/66206499/usa_today_13962599.0.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 27.0,
      assistsPerGame: 3.7,
      reboundsPerGame: 7.2,
      stealsPerGame: 0.9,
      blocksPerGame: 0.6,
      fieldGoalPercentage: 61.1,
    },
  },
];

export default players;
