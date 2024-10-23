export const dateInFormat = (isoDateString) => {
  const date = new Date(isoDateString); // Create a Date object from the ISO string

  // Options to format the date
  const options = { day: "numeric", month: "short", year: "numeric" };

  // Format the date using toLocaleDateString with the specified options
  return date.toLocaleDateString("en-GB", options);
};

export const generateRandomName = () => {
  const firstNames = [
    "Alex",
    "Jordan",
    "Taylor",
    "Sam",
    "Casey",
    "Jamie",
    "Morgan",
    "Chris",
    "Robin",
    "Pat",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Taylor",
    "Anderson",
    "Lee",
    "Clark",
    "Walker",
    "King",
    "Scott",
  ];

  // Get random index for first and last names
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
};

export const generateRandomComment = () => {
  const commentStarters = [
    "This video is",
    "I can't believe how",
    "Wow, this was",
    "Absolutely",
    "I really enjoyed",
    "Such an amazing",
    "Totally agree with",
    "Incredible",
    "Very informative",
    "What a",
  ];

  const commentMiddles = [
    "insightful",
    "funny",
    "awesome",
    "educational",
    "hilarious",
    "inspiring",
    "thought-provoking",
    "well-made",
    "engaging",
    "cool",
  ];

  const commentEndings = [
    "content!",
    "video!",
    "work!",
    "effort put into this.",
    "discussion!",
    "job!",
    "topic to cover.",
    "way to explain things.",
    "piece of knowledge.",
    "production!",
  ];

  // Generate random comment
  const randomCommentStarter =
    commentStarters[Math.floor(Math.random() * commentStarters.length)];
  const randomCommentMiddle =
    commentMiddles[Math.floor(Math.random() * commentMiddles.length)];
  const randomCommentEnding =
    commentEndings[Math.floor(Math.random() * commentEndings.length)];

  return `${randomCommentStarter} ${randomCommentMiddle} ${randomCommentEnding}`;
};

export const formatNumber = (num) => {
  const n = Number(num);
  if (n < 1e3) return n; // Less than 1000, return the number
  if (n < 1e6) return (n / 1e3).toFixed(1) + "K"; // Less than 1 million, convert to thousands
  if (n < 1e9) return (n / 1e6).toFixed(1) + "M"; // Less than 1 billion, convert to millions
  return (n / 1e9).toFixed(1) + "B"; // Convert to billions
};
