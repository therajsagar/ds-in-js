// Given a million DNA sequences(recall that a genetic sequence in digital format can take up to a million characters, either G, A, C, or T).
// Find the longest common prefix between two of these sequences.
//     Example:
// GATAAATCT
// TAAATCTTA
// GATAATTCC
// ATAAATCTA
// GATCTTATT
// The answer is GATAA(length 5)


const sequences = [
    "GATAAATCT",
    "TAAATCTTA",
    "GATAATTCC",
    "ATAAATCTA",
    "GATCTTATT",
];


class Node {
    addChildNode(key, node) {
        this[key] = node;
    }
}

const computeLongestPrefix = (arr = []) => {
    let prefix = '';
    let root = new Node();

    arr.forEach(sequence => {
        let node = root;
        let tmpPrefix = '';

        for (let ch of sequence) {
            if (node[ch]) {
                tmpPrefix += ch;
            } else {
                const tmpNode = new Node();
                node.addChildNode(ch, tmpNode);
            }
            node = node[ch]
        }

        if (tmpPrefix.length > prefix.length) { prefix = tmpPrefix; }
    });

    return prefix;
};

console.log(computeLongestPrefix(sequences));
