function teste1(num) {
    if (num > 7) { // Obrigatorio uso de chaves quando tiver mais que uma sentença
        console.log(num);
        console.log('Final');
    }
        
}

teste1(6);
teste1(8);


function teste2(num) {
    if (num > 7); // Sentença vazia    
    {
        console.log(num);   // bloco de código, sentencao 
    }
}

teste2(6)
teste2(8)