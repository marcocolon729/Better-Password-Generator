function generatePassword() {
    var length = document.getElementById("length").value;
    length = parseInt(length);

    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumbers = confirm("Include numeric characters?");
    var includeSpecialChars = confirm("Include special characters?");

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
        alert("Please select at least one character type for the password.");
        return;
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

    document.getElementById("password").value = password; // Display the generated password in the input field
}
