let friends = [
    'Mike', 'Janet', 'Allen', 'Samson', 'Terrance'
];

let num = 99

    while (num >= 1) {
    
        if (num === 2) {
            console.log(num + " lines of code in the file, " + num + " lines of code; " + friends + " strikes one out, clears it all out, " + (num - 1) + " line of code in the file.")
        } else if (num === 1) {
            console.log(num + " lines of code in the file, " + num + " lines of code; " + friends + " strikes one out, clears it all out, " + (num - 1) + " lines of code in the file.")
        } else{
            console.log(num + " lines of code in the file " + num + " lines of code; " + friends + " strikes one out clears it all out, " + (num - 1) + " lines of code in the file.")
        }
        num--;
    }