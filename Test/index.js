const ages = [21, 18, 42, 40, 64, 63, 34];

const max = ages.reduceRight((max, value) => (value > max ? value : max), 0);

console.log(max);
