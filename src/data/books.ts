const books = [
  {
    title: 'Leviathan Wakes',
    author: 'James S.A. Corey',
    genre: 'Science Fiction',
    description:
      'The first book in The Expanse series, where a detective and a spaceship crew uncover a conspiracy that threatens humanity.',
    releaseDate: new Date('2011-06-15T00:00:00Z'),
  },
  {
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    genre: 'Fantasy',
    description:
      'In a world where ash falls from the sky, a group of rebels plans to overthrow a tyrannical lord using magic.',
    releaseDate: new Date('2006-07-17T00:00:00Z'),
  },
  {
    title: 'The Bobiverse Trilogy',
    author: 'Dennis E. Taylor',
    genre: 'Science Fiction',
    description:
      'A story of a man who becomes a sentient AI and explores the universe, creating multiple copies of himself.',
    releaseDate: new Date('2016-01-01T00:00:00Z'),
  },
  {
    title: 'Columbus Day',
    author: 'Craig Alanson',
    genre: 'Science Fiction',
    description:
      "The first book in the Expeditionary Force series, where a man becomes humanity's unlikely savior against alien threats.",
    releaseDate: new Date('2016-09-28T00:00:00Z'),
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    description:
      'A lone astronaut wakes up on a spaceship with no memory and must save humanity from an existential threat.',
    releaseDate: new Date('2021-05-04T00:00:00Z'),
  },
  {
    title: 'A Psalm for the Wild-Built',
    author: 'Becky Chambers',
    genre: 'Science Fiction',
    description:
      'A monk and a robot embark on a journey to explore the meaning of life and purpose in a post-human world.',
    releaseDate: new Date('2021-07-13T00:00:00Z'),
  },
  {
    title: 'The Ministry for the Future',
    author: 'Kim Stanley Robinson',
    genre: 'Science Fiction',
    description:
      'A gripping narrative about climate change and global politics, centered around a new international organization.',
    releaseDate: new Date('2020-10-06T00:00:00Z'),
  },
  {
    title: 'Gideon the Ninth',
    author: 'Tamsyn Muir',
    genre: 'Fantasy',
    description:
      'A necromancer and her swordswoman must navigate deadly trials to unlock the secrets of a mysterious universe.',
    releaseDate: new Date('2019-09-10T00:00:00Z'),
  },
  {
    title: 'All Systems Red',
    author: 'Martha Wells',
    genre: 'Science Fiction',
    description:
      'A security android goes rogue and discovers its own sense of self while protecting a group of humans.',
    releaseDate: new Date('2017-05-04T00:00:00Z'),
  },
  {
    title: 'Rhythm of War',
    author: 'Brandon Sanderson',
    genre: 'Fantasy',
    description:
      'The fourth book in The Stormlight Archive, focusing on war, politics, and personal struggles in a fantastical world.',
    releaseDate: new Date('2020-11-17T00:00:00Z'),
  },
  {
    title: 'The Broken Earth Trilogy',
    author: 'N.K. Jemisin',
    genre: 'Fantasy',
    description:
      'A groundbreaking trilogy exploring themes of oppression and survival in a world plagued by geological cataclysms.',
    releaseDate: new Date('2015-08-04T00:00:00Z'),
  },
  {
    title: 'The Poppy War Trilogy',
    author: 'R.F. Kuang',
    genre: 'Fantasy',
    description:
      'A dark fantasy series inspired by Chinese history, following a war orphan who discovers her shamanic powers.',
    releaseDate: new Date('2018-05-01T00:00:00Z'),
  },
  {
    title: 'Jade Legacy',
    author: 'Fonda Lee',
    genre: 'Fantasy',
    description:
      'The conclusion of the Green Bone Saga, exploring family loyalty and power struggles in a world of jade magic.',
    releaseDate: new Date('2021-11-30T00:00:00Z'),
  },
  {
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune',
    genre: 'Fantasy',
    description:
      'A heartwarming tale about a caseworker who discovers a magical orphanage and the children who reside there.',
    releaseDate: new Date('2020-03-17T00:00:00Z'),
  },
  {
    title: 'Blacktongue Thief',
    author: 'Christopher Buehlman',
    genre: 'Fantasy',
    description:
      'A witty fantasy adventure following a thief as he navigates treachery and magic in a dangerous world.',
    releaseDate: new Date('2021-05-25T00:00:00Z'),
  },
  {
    title: 'A Court of Silver Flames',
    author: 'Sarah J. Maas',
    genre: 'Fantasy',
    description:
      'A companion novel to the A Court of Thorns and Roses series, focusing on the struggles of a warrior’s heart.',
    releaseDate: new Date('2021-02-16T00:00:00Z'),
  },
  {
    title: 'The Priory of the Orange Tree',
    author: 'Samantha Shannon',
    genre: 'Fantasy',
    description:
      'An epic standalone fantasy featuring dragons, political intrigue, and a diverse cast of strong women.',
    releaseDate: new Date('2019-02-26T00:00:00Z'),
  },
  {
    title: 'The Unbroken',
    author: 'C.L. Clark',
    genre: 'Fantasy',
    description:
      'A gripping tale of colonialism, loyalty, and rebellion, centered around a soldier and a revolutionary.',
    releaseDate: new Date('2021-03-23T00:00:00Z'),
  },
  {
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schwab',
    genre: 'Fantasy',
    description:
      'A poignant story about a young woman who makes a Faustian bargain to live forever, but is forgotten by everyone she meets.',
    releaseDate: new Date('2020-10-06T00:00:00Z'),
  },
  {
    title: 'Piranesi',
    author: 'Susanna Clarke',
    genre: 'Fantasy',
    description:
      'A hauntingly beautiful novel about a man living in a mysterious house with endless corridors and an ocean.',
    releaseDate: new Date('2020-09-15T00:00:00Z'),
  },
  {
    title: 'The Space Between Worlds',
    author: 'Micaiah Johnson',
    genre: 'Science Fiction',
    description:
      'In a multiverse where travel is possible between parallel worlds, a woman discovers secrets that could change everything.',
    releaseDate: new Date('2020-08-04T00:00:00Z'),
  },
  {
    title: 'The Once and Future Witches',
    author: 'Alix E. Harrow',
    genre: 'Fantasy',
    description:
      'A story of witchcraft and sisterhood set in a world where women fight for their rights and magic is real.',
    releaseDate: new Date('2020-10-13T00:00:00Z'),
  },
  {
    title: 'DMZ',
    author: 'Rachel Aaron',
    genre: 'Fantasy',
    description:
      'A thrilling tale of magic and conflict, where a young mage navigates a war-torn world to find her destiny.',
    releaseDate: new Date('2021-09-28T00:00:00Z'),
  },
];

export default books;
