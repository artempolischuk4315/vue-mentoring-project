export function durationFilter(value) {
  if (Math.sign(parseInt(value)) !== 1)  {
    return Math.ceil(Math.random()*180);
  }
  else return value;
}