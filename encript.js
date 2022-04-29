const encryptText = () => {
    const textField = document.getElementById('plainText');
    const text = textField.value;
    const lowerText = text.toLowerCase();
    const textArray = [];

    for (const aplphabet of lowerText) {
        textArray.push(aplphabet)
    }
    makeCypherText(textArray, true);

}

const makeCypherText = (textArray, isCypher) => {
    const encryptedText = [];
    const EnglishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (const aplphabet of textArray) {
        const index = EnglishAlphabet.indexOf(aplphabet)
        let key;
        if (isCypher) {
            key = index - 1;
            if (aplphabet == 'a') {
                encryptedText.push('z');
            }
        }
        else {
            key = index + 1;
            if (aplphabet == 'z') {
                encryptedText.push('a');
            }
        }


        if (index == -1) {
            const element = ' ';
            encryptedText.push(element);

        }
        else {
            const element = EnglishAlphabet[key];
            encryptedText.push(element);

        }
    }
    const cypherText = document.getElementById('cypherText');
    const normalText = document.getElementById('normalText');

    if (isCypher) {
        cypherText.innerText = encryptedText.join('');

    }
    else {
        normalText.innerText = encryptedText.join('');
    }
}
const decryptText = () => {
    const cypherField = document.getElementById('cypherTextField');
    const cypherText = cypherField.value;
    const lowerText = cypherText.toLowerCase();
    const textArray = [];

    for (const aplphabet of lowerText) {
        textArray.push(aplphabet)
    }
    makeCypherText(textArray, false);

}