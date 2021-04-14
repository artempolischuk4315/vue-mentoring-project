export function durationFilter(value) {
  if (Math.sign(parseInt(value)) !== 1)  {
    return "X";
  }
  else return value;
}