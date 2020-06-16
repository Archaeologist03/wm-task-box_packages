const removePTags = (str) => {
  const regEx = new RegExp(/<\/?p[^>]*>/g);

  const newStr = str.replace(regEx, '');

  return newStr;
};

export default removePTags;
