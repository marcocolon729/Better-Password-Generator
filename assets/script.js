document.addEventListener("DOMContentLoaded", function() {
    var generateBtn = document.getElementById("generateBtn");

    generateBtn.addEventListener("click", function() {
        var lengthInput = document.getElementById("length");
        var passwordField = document.getElementById("password");

        var length = parseInt(lengthInput.value);

        console.log("Entered password length:", length);

        if (isNaN(length) || length < 8 || length > 128) {
            console.log("Invalid password length entered.");
            alert("Please enter a valid password length between 8 and 128 characters.");
            lengthInput.value = '';
            passwordField.value = '';
            return;
        }

        var includeLowercase = confirm("Include lowercase characters?");
        var includeUppercase = confirm("Include uppercase characters?");
        var includeNumbers = confirm("Include numeric characters?");
        var includeSpecialChars = confirm("Include special characters?");

        console.log("Include lowercase:", includeLowercase);
        console.log("Include uppercase:", includeUppercase);
        console.log("Include numbers:", includeNumbers);
        console.log("Include special characters:", includeSpecialChars);

        var charset = '';

        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charset += '0123456789';
        if (includeSpecialChars) charset += '!@#$%^&*()_+?><:{}[]';

        if (charset === '') {
            alert("Please select at least one character type for the password.");
            passwordField.value = '';
            return;
        }

        var password = '';
        for (var i = 0; i < length; ++i) {
            var randomChar = Math.floor(Math.random() * charset.length);
            password += charset[randomChar];
        }

        console.log("Generated Password:", password);
        passwordField.value = password;
        passwordField.style.backgroundColor = '#c3e6cb';
    });
});
