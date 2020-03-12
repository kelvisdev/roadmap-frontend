const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);        
    })
}

funcs[2](); // 2
funcs[6](); // 6
funcs[8](); // 8

// Global
const funcs2 = [];
let i2 = 0
for (i2 = 0; i2 < 10; i2++) {
    funcs2.push(function() {
        console.log(i2);        
    })
}

funcs2[2](); // 10
funcs2[6](); // 10
funcs2[8](); // 10