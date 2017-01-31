const fs = require('fs');

fs.writeFile('teste.txt', 'hello', (err) => {
  if(err) throw err;
  console.log('saved file\n');
});

fs.open('myFile', 'wx', (err, fd) => {
  if(err){
    if(err.code == 'EEXIST'){
      console.error('myfile already exists');
      return
    } else{
      throw err;
    }
  }

  writeMyData(fd);
});

fs.read

var array = ['ola', 'oi'];

var testArray = function(){
    array[0] = 'active';
}

testArray(array);
console.log(array);
