function generatePassword() {
    var length = prompt("Choose the length of the password (between 8 and 128 characters):");
    length = parseInt(length);

    // Validate the length input
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return; // Stops the function if input is invalid
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumbers = confirm("Include numeric characters?");
    var includeSpecialChars = confirm("Include special characters?");

    // Validate if at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
        alert("Please select at least one character type for the password.");
        return; // Stops the function if no character type is selected
    }

    var charset = "";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_+?><:{}[]";

    var password = "";
    for (var i = 0; i < length; ++i) {
        var randomChar = Math.floor(Math.random() * charset.length);
        password += charset[randomChar];
    }

    alert("Your generated password is: " + password);
}
