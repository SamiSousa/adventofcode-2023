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

function totalWaysToWin(input: string): number {
  // Parse input
  const [totalTime, totalDistance]: number[] = input
    .split('\n')
    .filter((line) => line.length > 0)
    .map((line): number => {
      // Remove line label
      const [, values] = line.split(':');
      // Remove spaces and concat number strings
      const bigNumberString = values
        .split(' ')
        .filter((numberString) => numberString.length > 0)
        .reduce((bigString, numberString): string => bigString + numberString, '');

      return Number(bigNumberString);
    });

  return numberOfWaysToWinRace(totalTime, totalDistance);
}

const input = `
Time:        53     71     78     80
Distance:   275   1181   1215   1524
`;

console.log(totalWaysToWin(input));
