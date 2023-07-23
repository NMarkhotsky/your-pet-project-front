export const convertToYears = fullDate => {
  const [year, month, day] = fullDate.split('-').map(Number);

  const inputDate = new Date(year, month - 1, day);

  const currentDate = new Date();

  const timeDiff = currentDate - inputDate;

  const yearsDiff = timeDiff / (1000 * 60 * 60 * 24 * 365.25);

  console.log(Math.floor(yearsDiff) + ' year');

  return Math.floor(yearsDiff) + ' year';
};
