const isLeapYear = year => (year % 4 === 0 && (year % 100 !== 0 ||  year % 400 === 0));
const findYear = (n, m) => {
  const yearsLeap = [];
  const end = Math.max(n,m);
  const start = Math.min(n,m);
  for (let year = start; year <= end; year++) {
    if(isLeapYear(year)){
      yearsLeap.push(year);
    }
  }
  return yearsLeap;
}
console.log(findYear(1900, 2000));