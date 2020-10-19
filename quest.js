function list(names) {
  //your code here
  console.log(names);
  const array = [];
  for (const item of names) {
    array.push(Object.values(item));
    console.log(array);
  }
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]);
// returns 'Bart, Lisa & Maggie'
