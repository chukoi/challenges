function formatDate(userDate: string) {
  // format from M/D/YYYY to YYYYMMDD
  const date = userDate.split("/");
  const year = date[2];
  const month = date[0].length === 1 ? `0${date[0]}` : date[0];
  const day = date[1].length === 1 ? `0${date[1]}` : date[1];
  return `${year}${month}${day}`;
}

console.log(formatDate("12/31/2014"));
