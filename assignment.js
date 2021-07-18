
const fencingForAny = (edges, numberOfWire, rate) => {
     let sum = 0;
     for (let i =0; i < edges.length; i++){
          sum = sum + edges[i];
     }
     edges.forEach(element => {
          sum= sum +element;
          
     });
     return sum * numberOfWire *rate;
};
console.log(
     `cost for fensing is Rs.${fencingForAny(
          [10, 15, 10, 10, 10, 10, 22], 5,10)}/-`)
