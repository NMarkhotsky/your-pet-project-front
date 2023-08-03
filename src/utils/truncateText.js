export const truncateText = text => {
  if (text.length > 5) {
    return text.substring(0, 4) + '...';
  }
  return text;
};
