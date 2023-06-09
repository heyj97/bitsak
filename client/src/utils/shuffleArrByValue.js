// complaints에서 받은 arr의 value를 기반으로 value가 클 수록 가운대에 위치하게 함
const shuffleArray = (array) => {
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

  shuffle(firstPart);
  shuffle(secondPart);
  shuffle(thirdPart);
  return secondPart.concat(firstPart, thirdPart);
};

export default shuffleArray;
