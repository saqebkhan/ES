
// Tenure ->  int (tenure)
// investment -> int
// return p.a. -> int (Percentage)


// year	  	Investment  		TotalInvested	  		Return		      	Corpus
// 1	    	1,00,000	    	1,00,000		      	20,000(20%)	    	1,20,000
// 2	    	3,00,000    		4,20,000	      	  84,000(20%)	    	5,04,000
// 3	  	  3,00,000	    	8,04,000	         	1,60,000(20%)	   	9,64,000
// 4	    	3,00,000	    	12,64,000	         	151,680(20%)	  	14,10,680


const compoundInterestCalculator = (tenure, inv, returnPa) => {
    let corpus = [];
    let total = null;
    let updatedInv = inv;
    for (let i = 0; i < tenure; i++) {
      updatedInv = (returnPa / 100) * updatedInv + updatedInv;
      corpus.push(updatedInv);
    }
    corpus.forEach((e) => (total += e));
    return total.toFixed(2);
  };
  console.log(compoundInterestCalculator(11, 120000, 20));
  