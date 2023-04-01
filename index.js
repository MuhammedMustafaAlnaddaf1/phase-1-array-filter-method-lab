// Code your solution here
function findMatching(driversArray, string) {
  return driversArray.filter(
    (driversArray) => driversArray.toLowerCase() === string.toLowerCase()
  );
}

function fuzzyMatch(driversArray, string) {
  return driversArray.filter((driversArray) => driversArray.startsWith(string));
}

function matchName(driversArray, name) {
  return driversArray.filter((driversArray) => driversArray.name === name);
}
