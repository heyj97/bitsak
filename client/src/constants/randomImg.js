const randomImg = () => {
  const imgArr = [
    "13Cj2hjHYsKcGjQtE0DU8i-VLx2os1k_Q",
    "1veVU5SGNwa2I6ee2L-ANvom9vaLEO38q",
    "1kafefLXueBN021nZkeAiIBJTZHOCJZZU",
    "1-kB7FifSqjkbU1jmV1ytQq4BvN79JOfs",
    "19Rur-OgxgUYQOG_HanE1JnB6X7D4qBHy",
    "15I_0rh9VaH-GZA51JQI3cRgQYNAJcw6t",
    "1YzYogTMYQj9HA_dZg6OA5pIgHHKovNpr",
    "1wZYHBJ3QoqhDu6IeGbYqWwAilc5nWsEm",
    "125uMVKMH7kych8uKwRMlIJm8Xi4pfbrW",
    "1KCvwaRqxpR7iviP3XIbiID3qu2LBgBxG",
  ];

  const idx = Math.floor(Math.random() * imgArr.length);
  return `https://drive.google.com/uc?id=${imgArr[idx]}`;
};

export default randomImg;
