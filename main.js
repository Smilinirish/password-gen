// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomFunction = {
    Num: ranNum,
    lowerCase: ranLower,
    upperCase: ranUpper,
    specChar: specialChar
}

//randome character creators
function ranNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function ranUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function ranLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function specialChar() {
    var uniqueChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return uniqueChar[Math.floor(Math.random() * uniqueChar.length)]
}
// Write password to the #password input
function writePassword() {

    var passwordLength = 0
    // for (passwordLength! >= 8 && passwordLength! <= 128) {
    //     alert("Please enter a valid passowrd length");
    // }
    // else {

    while (passwordLength < 8 || passwordLength > 128) {
             passwordLength = prompt("Enter desired password length between 8-128");
        if (passwordLength < 8 || passwordLength > 128) {
            alert("please enter a valid passowrd length");
        }
    }      
    var upperCase = confirm("Would you like your password to include Upper Case letters?");
    var lowerCase = confirm("Would you like your Password to include lower case letters?");
    var specChar = confirm("Would you like your password to include special characters?");
    var Num = confirm("Would you like your password to include Numbers?");
    var password = generatePassword(passwordLength, upperCase, lowerCase, specChar, Num);
    function generatePassword(passwordLength, upperCase, lowerCase, specChar, Num) {
        var paramatercount = upperCase + lowerCase + specChar + Num;
        var paramaterArry = [{ upperCase }, { lowerCase }, { specChar }, { Num }].filter(item => Object.values(item)[0]);
        console.log(paramaterArry);
        if (paramatercount === 0) {
            return ""
        }
        var generatedPassword = ""
        for (var i = 0; i < passwordLength; i++) {
            var funcName = Object.keys(paramaterArry[Math.floor(Math.random() * paramatercount)]);
            generatedPassword += randomFunction[funcName]();
        }
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
        return generatedPassword;
    }
    console.log(generatePassword())
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);