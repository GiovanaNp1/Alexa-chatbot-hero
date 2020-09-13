const characters = ['batman', 'superman', 'homem de ferro', 'capitão américa', 'sakura', "super choque" ,'mulher maravilha', 'naruto'];

module.exports.getCharacter = function getCharacter(hero) {

    if (!hero) return 'characterNotFound';
    return characters[characters.indexOf(hero.toLowerCase())];
}