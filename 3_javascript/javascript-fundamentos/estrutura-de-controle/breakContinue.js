const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break; // reage e sai no primeiro bloco de repeticao
    }

   // console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
    if (y == 5) {
        continue;  // reage e sai no primeiro bloco sendo condicional ou repeticao
    }

   // console.log(`${y} = ${nums[y]}`);
}


// look
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo; // usando rotulo é possivel sai do primeiro bloco de repeticao com break;
        }

        console.log(`Par = ${a}, ${b}`);
        
    }
}