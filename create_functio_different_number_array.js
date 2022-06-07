Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
const dif1 = [1,2,3,4,5].diff( [1,3,4,5,6] );  
console.log(dif1);

const dif2 = [1,3,4,5,6].diff([1,2,3,4,5]);  
console.log(dif2);