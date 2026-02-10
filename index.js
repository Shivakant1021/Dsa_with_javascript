const fs  =  require('fs')
// fs.writeFileSync("data.txt", "Hello World");

// console.log("This prints AFTER file write");


fs.writeFile("data.txt", "Hello World", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written");
});

console.log("This prints IMMEDIATELY");
