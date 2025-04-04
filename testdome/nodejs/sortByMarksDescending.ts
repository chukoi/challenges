type TMark = {
  name: string;
  mark: number;
};

function sortByMarksDescending(jsonString: string) {
  var array = JSON.parse(jsonString);
  array.sort((a: TMark, b: TMark) =>
    b.mark === a.mark ? String(a.name).localeCompare(b.name) : b.mark - a.mark
  );
  return JSON.stringify(array);
}

console.log(
  sortByMarksDescending(
    '[{"name": "John", "mark": 85}, {"name": "Dave", "mark": 90}, {"name": "Alice", "mark": 90},  {"name": "Bob", "mark": 88}]'
  )
);
