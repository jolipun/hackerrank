function printSorted(word) {
    let oddArray = [];
    let evenArray = [];
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 1) {
            oddArray.push(word[i]);
        } else {
            evenArray.push(word[i]);
        }
    }
    console.log(`${evenArray.join('')} ${oddArray.join('')}`);
}

function processData(input) {
    let inputArray = input.split('\n');
    inputArray.shift();
    inputArray.forEach(element => printSorted(element));
}

processData('2\nKarolis\njolita');

