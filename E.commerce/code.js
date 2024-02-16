// jQuery function to load common header and footer
$(function(){
    $("#header").load("/common/header.html");
    $("#footer").load("/common/footer.html");
});


// Function to validate login credentials
function valid() {
    const email= document.querySelector("#email").value;
    const pass= document.querySelector("#password").value;

    if (email==="admin@admin.com" && pass==="123456") {
        alert("Login Successful")
    } else {
        alert("Incorrect email or password")
    }
}