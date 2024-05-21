const sequelize = require('../config/connection');
const { Quiz, Choice } = require('../models');

const quizData = [
  {
    question: 'Which popular anime is this song from?',
    correctAnswer: 'Naruto',
    audioSrc: 'assets/music/01 - Blue Bird.mp3',
    choices: [
      { choiceText: 'My Hero Academia' },
      { choiceText: 'Naruto' },
      { choiceText: 'Yu-gi-oh' },
      { choiceText: 'One Piece' },
    ],
  },
  {
    question: 'What anime opening is this?',
    correctAnswer: 'Pokemon',
    audioSrc: 'assets/music/Pokemon.mp3',
    choices: [
      { choiceText: 'Digimon' },
      { choiceText: 'Beyblade' },
      { choiceText: 'Yu-gi-oh' },
      { choiceText: 'Pokemon' },
    ],
  },
  {
    question: 'What is the name of this Attack on Titan song?',
    correctAnswer: 'Guren no Yumiya',
    audioSrc: 'assets/music/Attack on Titan - LeeandLie - Guren no Yumiya.mp3',
    choices: [
      { choiceText: 'Guren no Yumiya' },
      { choiceText: 'Counter Attack' },
      { choiceText: 'Attack on Titan' },
      { choiceText: 'Bauklötze' },
    ],
  },
  {
    question: 'What is the name of this anime opening?',
    correctAnswer: 'Kakiai Kitan',
    audioSrc: 'assets/music/JUJUTSU KAISEN - Opening  Kaikai Kitan (YTCONVERT.IN).mp3',
    choices: [
      { choiceText: 'Vivid Vice' },
      { choiceText: 'Kakiai Kitan' },
      { choiceText: 'Specialz' },
      { choiceText: 'Where Our Blue Is' },
    ],
  },
  {
    question: 'What is the name of this One Piece opening?',
    correctAnswer: 'We Are!',
    audioSrc: 'assets/music/One Piece - We Are - Full.mp3',
    choices: [
      { choiceText: 'Believe' },
      { choiceText: 'BON VOYAGE!' },
      { choiceText: 'We Are!' },
      { choiceText: 'Brand New World' },
    ],
  },
];

const seedDatabase = async () => {
  try {
    console.log('Syncing database...');
    await sequelize.sync({ force: true });
    console.log('Database synced!');

    for (const quiz of quizData) {
      console.log('Creating quiz:', quiz.question);
      const createdQuiz = await Quiz.create(
        {
          question: quiz.question,
          correctAnswer: quiz.correctAnswer,
          audioSrc: quiz.audioSrc,
          choices: quiz.choices,
        },
        {
          include: [Choice],
        }
      );
      console.log('Created quiz:', createdQuiz);
    }

    console.log('Seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
