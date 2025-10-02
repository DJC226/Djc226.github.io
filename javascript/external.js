// user_name = window.prompt("Please enter your name", "Type your name here");
function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";

    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}
document.write(welcome());
