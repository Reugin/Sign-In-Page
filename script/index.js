let eye = document.getElementById("hide_eye");
let input = document.getElementById("pass");

eye.onclick = function () {
    if (input.type == "password") {
        input.type = "text";
        eye.src = "./icons/icons8-hide-24.png";
    } else {
        input.type = "password";
        eye.src = "./icons/icons8-eye-24.png";
    }
}
