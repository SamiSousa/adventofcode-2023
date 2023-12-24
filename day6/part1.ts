/** Find number of ways to win for one race, based on time allowed and previous record */
function numberOfWaysToWinRace(time: number, record: number): number {
  let waysToWin = 0;

  for (let buttonHoldTime = 0; buttonHoldTime < time; buttonHoldTime ++) {
    const speed = buttonHoldTime;
    const distance = speed * (time - buttonHoldTime);
    if (distance > record) {
      waysToWin ++;
    }
  }

  return waysToWin;
}

function productOfWaysToWin(input: string): number {
  // Parse input
  const [times, distances]: number[][] = input
    .split('\n')
    .filter((line) => line.length > 0)
    .map((line): number[] => {
      // Remove line label
      const [, values] = line.split(':');
      // Parse numbers
      return values
        .split(' ')
        .filter((numberString) => numberString.length > 0)
        .map((numberString) => Number(numberString));
    });
  
  const waysToWin: number[] = [];
  for (let race = 0; race < times.length; race++) {
    waysToWin.push(numberOfWaysToWinRace(times[race], distances[race]));
  }

  return waysToWin.reduce((product, value) => product * value, 1);
}

const input = `
Time:        53     71     78     80
Distance:   275   1181   1215   1524
`;

console.log(productOfWaysToWin(input));
