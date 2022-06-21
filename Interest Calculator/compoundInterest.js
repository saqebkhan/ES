
// Tenure ->  int (tenure)
// investment -> int
// return p.a. -> int (Percentage)
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
  
  