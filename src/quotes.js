const quotes = [
  {
    quote: "You are as beautiful as the universe",
    author: "unknown",
  },
  {
    quote: "Your only limit is your soul",
    author: "Ratatouille",
  },
  {
    quote: "Fear is a reaction, Courage is a decision",
    author: "Winston Churchill",
  },
  {
    quote: "She belived she could so she did",
    author: "J.S.Grey",
  },
  {
    quote:
      "It is impossible to fail if you learn from your mistake. Don't give up",
    author: "Steve Jobs",
  },
  {
    quote: "Stay hungry, stay foolish",
    author: "Steve Jobs",
  },
  {
    quote:
      "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
    author: "unknown",
  },
  {
    quote: "Be part of the solution, not part of the problem.",
    author: "Stephen R. Covey",
  },
  {
    quote:
      "The only thing that matters in life, is your own opinion about yourself.",
    author: "Osho",
  },
  {
    quote: "This Too Will Pass",
    author: "Eckhart Tolle",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

function todayQuote() {
  const randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = `" ${randomNumber.quote} "`;
  author.innerText = `- ${randomNumber.author} -`;
}

todayQuote();
