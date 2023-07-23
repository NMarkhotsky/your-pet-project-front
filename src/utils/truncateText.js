export const truncateText = text => {
  if (text.length > 5) {
    return text.substring(0, 5) + '...';
  }
  return text;
};
