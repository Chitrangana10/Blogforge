export const Quote = () => {

  const quotes = [
    {
      id: 1,
      text: "The customer support I received was exceptional. The support team went above and beyond to address my concerns",
      author: "Jules Winfield",
      role: "CEO | Acme Corp"
    },
    {
      id: 2,
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
      role: "Author"
    },
    {
      id: 3,
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
      role: "Businessman"
    },
    {
      id: 4,
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      role: "Apple Founder"
    },
    {
      id: 5,
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
      role: "Entrepreneur"
    },
    {
      id: 6,
      text: "Opportunities don't happen. You create them.",
      author: "Chris Grosser",
      role: "Entrepreneur"
    },
    {
      id: 7,
      text: "Great things in business are never done by one person.",
      author: "Steve Jobs",
      role: "Apple Founder"
    },
    {
      id: 8,
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      role: "Entrepreneur"
    },
    {
      id: 9,
      text: "If you really look closely, most overnight successes took a long time.",
      author: "Steve Jobs",
      role: "Apple Founder"
    },
    {
      id: 10,
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
      role: "Former US President"
    }
  ];

  const randomId = Math.floor(Math.random() * 10) + 1;

  const quote = quotes.find(q => q.id === randomId);

  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">

          <div className="text-3xl font-bold">
            "{quote?.text}"
          </div>

          <div className="max-w-md text-xl font-semibold text-left mt-4">
            {quote?.author}
          </div>

          <div className="max-w-md text-sm font-light text-slate-400">
            {quote?.role}
          </div>

        </div>
      </div>
    </div>
  );
};