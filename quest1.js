function list(names) {
  //your code here
  let array = [];
  let result = '';

  for (const item of names) {
    array.push(item.name);
  }
  if (array.length < 2) {
    result = array.join('');
  } else if (array.length === 2) {
    array.splice(array.length - 1, 0, ' & ');

    result = array.join('');
  } else if (array.length >= 3) {
    const lastTwo = array.slice(array.length - 2);

    array.splice(array.length - 2, 2);

    lastTwo.splice(lastTwo.length - 1, 0, ' & ');

    result = array.join(', ') + ', ' + lastTwo.join('');
  }

  // result = array.join(', ');

  return console.log(result);
}

list([
  { name: 'Bart' },
  { name: 'Lisa' },
  { name: 'Maggie' },
  { name: 'Homer' },
  { name: 'Marge' },
]);
// returns 'Bart, Lisa & Maggie'
