


function action() {

    let bitcoinPrice = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8];
    let priseBuy=0;
    let priseSale=0;
    let profit=0;
    let profitMax=0;


    for (let i=0; i<bitcoinPrice.length; i++) {
            
            
        
        for (let j=i+1; j<bitcoinPrice.length; j++) {
            
        if (bitcoinPrice[j]>bitcoinPrice[i]) {
            profit= bitcoinPrice[j]-bitcoinPrice[i];
        }

        if (profit>profitMax) {
                profitMax=profit;
               
            }    

            profit=0;
        
        } 



    
        
                
    
    }


    console.log(` Максимальная прибыль биткоина ${profitMax} долл.`);
    
    result.innerHTML=` Максимальная прибыль биткоина ${profitMax} долл.`;

}

