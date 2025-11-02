

function DefaultMode() {
    document.getElementById('mainPage').style="background-color: #faf0dc;";
    document.getElementById('condition').innerHTML = "Default";
}
function DarkMode(){
    document.getElementById('mainPage').style="background-color: #000000ff;";
    document.getElementById('condition').innerHTML = "Dark Mode";
}
function LightMode(){
    document.getElementById('mainPage').style="background-color: white;";
    document.getElementById('condition').innerHTML = "Light Mode";
}

//Calculator math
//Pyramid
function pMath(){
    let sideA = parseFloat(document.getElementById('pSideA').value);
    let sideB = parseFloat(document.getElementById('pSideB').value);
    let height = parseFloat(document.getElementById('pHeight').value);
    console.log(sideA);
    console.log(sideB);
    console.log(height);

    let volume = 1/3*(sideA * sideB * height);

    document.getElementById('pVolume').innerHTML = volume;
}

//Triangle
function tMath(){
    let sideA = parseFloat(document.getElementById('tSideA').value);
    let sideB = parseFloat(document.getElementById('tSideB').value);
    let sideC = parseFloat(document.getElementById('tSideC').value);

    let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
    let semiperimeter = (parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)) / 2;
    let area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));


    document.getElementById('tPerimeter').innerHTML = perimeter;
    document.getElementById('tSemiPerimeter').innerHTML = semiperimeter;
    document.getElementById('tArea').innerHTML = area;
}






//checks if the DOM is loaded before running scripts
//also checks if elements exist before adding event listeners


document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const passwordMessage = document.getElementById('passwordMessage');
    const usernameMessage = document.getElementById('usernameMessage');

//username and password validation
//validate password
    if (passwordInput && passwordMessage) {
        passwordInput.addEventListener('input', function() {
        console.log("The user is typing.")
        let password = this.value;
        let hasLower = /[a-z]/.test(password);
        let hasUpper = /[A-Z]/.test(password);
        let hasNumber = /[0-9]/.test(password);
        let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        let message = document.getElementById('passwordMessage');
        const missing = [];

        if (password.length < 8){
            missing.push(" 8-character minimum")
        }

        if (!hasLower){
            missing.push(" a lower-case letter")
        }

        if (!hasUpper){
            missing.push(" an upper-case letter")
        }

        if (!hasNumber){
            missing.push(" a number")
        }

        if (!hasSpecial){
            missing.push(" a special character")
        }

        passwordMessage.innerHTML = missing.length ? 'You are missing:' + missing : 'Password is complete!';

        });
    }


//validate username
//username must be between 4 and 8 characters long, and can only contain letters, numbers, and underscores.

    if (usernameInput && usernameMessage) {
        usernameInput.addEventListener('input', function() {
        console.log("The user is typing.")
        let username = this.value;
        let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(username);

        let message = document.getElementById('usernameMessage');
        const missing = [];

        if (username.length < 4){
            message.innerHTML = "Username must be at least 4 characters long."
        } else if (hasSpecial){
            message.innerHTML = "Special characters are not allowed here, only underscores."
        } else {
            message.innerHTML = "Username is valid!"
        }

        });
    }
});





//additional DOMContentLoaded listener for the form validation functions
document.addEventListener('DOMContentLoaded', function() {

//form validation and sanitization

    const form = document.getElementById('commentForm');
// escape utility and form-scoped sanitizer
    function escapeString(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

//tries multiple ways to get field
//then passes value into escapeString
    function sanitizeField(formEl, fieldId) {
        let el = null;
        try {
            el = formEl.querySelector('#' + fieldId) || formEl.elements[fieldId] || document.getElementById(fieldId);
        } catch (err) {
        // If selector fails, fall back to elements lookup
            el = formEl.elements[fieldId] || document.getElementById(fieldId);
        }

        if (!el || typeof el.value === 'undefined') return;
        el.value = escapeString(el.value);
    }

    function sanitizeFormAndSubmit(formEl, fieldsToSanitize) {
    // preserves validation behavior built into HTML5 forms
        if (!formEl.checkValidity()) {
            formEl.reportValidity();
            return;
        }

        fieldsToSanitize.forEach(id => sanitizeField(formEl, id));
    // programmatic submit (won't re-trigger submit listeners)
        formEl.submit();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // stop the immediate submit
    // Sanitize the comment field (by id or name) then submit
        sanitizeFormAndSubmit(form, ['comment']);
    });
});