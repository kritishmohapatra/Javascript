const marvel=["ironman", "thor", "spiderman"]
const dc=["flash", "batman", "superman"]
marvel.push(dc)
console.log(marvel);
//[ 'ironman', 'thor', 'spiderman', [ 'flash', 'batman', 'superman' ] ]
console.log(marvel[3][0]);

total=marvel.concat(dc)
console.log(total);

const allnew=[...marvel, ...dc]
console.log(allnew);


const another=[1, 2, 3,[4,5,6], 7,[6,7,[4, 5]]]
const real_another=another.flat(Infinity)
console.log(real_another);
// [
//  1, 2, 3, 4, 5,
// 6, 7, 6, 7, 4,
// 5
// ]

console.log(Array.isArray("Hitesh"));
console.log(Array.from('kritish'));
console.log(Array.from({name:"kritish"}));
//gives this []






