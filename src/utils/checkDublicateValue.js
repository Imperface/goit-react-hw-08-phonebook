export const checkDublicateValue = (items, checkKey, value) => {
  const check = items.find(
    item => item[checkKey].toLowerCase() === value.toLowerCase()
  );
  return check ? true : false;
};
