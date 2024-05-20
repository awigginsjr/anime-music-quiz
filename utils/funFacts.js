// utils/funFacts.js

const funFacts = [
    {
        fact: "Anime is short for 'animation' in Japanese.",
        //image: "animeword.jpg"
        image: "/images/animeword.jpg"
    },
    {
        fact: "The longest-running anime has over 7,000 episodes.",
        image: "/images/characters.jpg"
    },
    {
        fact: "The highest-grossing anime film is 'Demon Slayer: Mugen Train'.",
        image: "/images/demons.jpg"
    },
    {
        fact: "Studio Ghibli's 'Spirited Away' won an Academy Award.",
        image: "/images/away.jpg"
    },
    {
        fact: "Naruto's favorite food is ramen.",
        image: "/images/naruto.jpg"
    }
];

function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

module.exports = {
    getRandomFunFact
};