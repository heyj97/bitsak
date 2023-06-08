import score from "../constants/score";

const countToResult = (count) => {
  const countInt = parseInt(count);
  const result = score[Object.keys(score)[countInt]];

  return {
    point: result.point,
    description: result.description,
  };
};

export default countToResult;
