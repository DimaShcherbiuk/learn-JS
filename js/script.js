function getExtremeScores(scores) {

  // let max = Math.max(...scores);
  // let min = Math.min(...scores);
  
  let objectMinMax = {
    best: Math.max(...scores),
    wrost: Math.min(...scores),
  };
  return objectMinMax;
}


console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
