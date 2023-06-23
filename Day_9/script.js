const quotes = [
    ['I do the best I know how - the very best I can; and I mean to keep on doing so until the end.','Abraham Lincoln'],
    ['The journey of a thousand miles begins with one step.','Lao Tzu'],
    ['Remember that not getting what you want is sometimes a wonderful stroke of luck.','Dalai Lama'],
    ['The best way to find yourself is to lose yourself in the service of others.','Mahatma Gandhi'],
    ['If you want to live a happy life, tie it to a goal, not to people or things.','Albert Einstein']
]

const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = `"${quotes[random][0]}"`;
    person.innerText = quotes[random][1];
});