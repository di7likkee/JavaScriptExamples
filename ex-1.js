function person() {
  let name = 'Peter';
  
  return function displayName() {
    console.log(name);
  };
}
let peter = person();
peter(); // 'Peter'