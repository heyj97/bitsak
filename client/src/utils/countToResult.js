import score from "../constants/score";

const countToResult = (count) => {
  if (parseInt(count) === 0)
    return { title: score.zero.title, description: score.zero.description };
  if (parseInt(count) === 1)
    return { title: score.one.title, description: score.one.description };
  if (parseInt(count) === 2)
    return { title: score.two.title, description: score.two.description };
  if (parseInt(count) === 3)
    return { title: score.three.title, description: score.three.description };
  if (parseInt(count) === 4)
    return { title: score.four.title, description: score.four.description };
  if (parseInt(count) === 5)
    return { title: score.five.title, description: score.five.description };
};

export default countToResult;
