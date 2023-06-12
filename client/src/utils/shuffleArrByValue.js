const shuffleArrByValue = (array) => {
  array.sort((a, b) => b.value - a.value);
  const oneThird = Math.floor(array.length / 3);
  const firstPart = array.slice(0, oneThird);
  const secondPart = array.slice(oneThird, oneThird * 2);
  const thirdPart = array.slice(oneThird * 2, array.length);

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  return shuffle(secondPart).concat(shuffle(firstPart), shuffle(thirdPart));
};

export default shuffleArrByValue;
