function solution(horizon, numFactors, seqLength) {

    let count = 0;
    const primCount = new Uint8Array(horizon + 1);
    for (let i = 2; i <= horizon; i++) {

        if (primCount[i] === numFactors) {
            count++;
            if (count === seqLength) {
                return i - seqLength + 1;
            }
        } else {
            count = 0;
            if (0 === primCount[i]) {
                for (var j = i; j <= horizon; j+= i) {
                    primCount[j]++;
                }
            }
        }
    }
    return null;
}
solution(150000, 4, 4);