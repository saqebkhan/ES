// const PowerOfNum = (SquareNum) => (SquareNum**2);

// console.log(PowerOfNum([9, 2]))


const findSquare = (num) =>{
    let square = [];

    num.forEach(element => {
        square.push(element**2);
    
    });
    console.log(square);
}
console.log(findSquare([5,2,7,9,10]));
