var jtc = require("./");

var arr = [
    {
        name: "john",
        age: 23
    },
    {
        name: "dave",
        age: 42
    }
];

var fs = require("fs");

fs.writeFile("test.csv", jtc(JSON.stringify(arr)));
