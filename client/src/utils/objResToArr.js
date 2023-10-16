const objResToArr = (data, key) => {
  const result = [];

  data.forEach((item) => {
    if (item.hasOwnProperty(key)) {
      result.push(item[key]);
    }
  });

  return result;
};

export default objResToArr;
