module.exports = function(arr) {
    if(typeof arr != "object")
        arr = JSON.parse(arr);

    if(arr.length < 1)
        return undefined;

    var csv = "";

    var fields = [];

    for(var key in arr[0])
        fields.push(key);

    csv += fields.join(";") + "\n";

    arr.forEach(function(obj) {
        fields = [];

        for(var key in obj)
            fields.push(obj[key]);

        csv += fields.join(",") + "\n";
    });

    return csv;
};
