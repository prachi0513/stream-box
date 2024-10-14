export const dateInFormat = (isoDateString) => {
  const date = new Date(isoDateString); // Create a Date object from the ISO string

  // Options to format the date
  const options = { day: "numeric", month: "short", year: "numeric" };

  // Format the date using toLocaleDateString with the specified options
  return date.toLocaleDateString("en-GB", options);
};
