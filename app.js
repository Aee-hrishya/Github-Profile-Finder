//Intilializing the Github class
const github = new Github();

//get the search bar
const searchUser = document.getElementById("searchUser");

//Event listener for the userText
searchUser.addEventListener("keyup", (e) => {
    const userText = e.target.value;

    //To check that the search is not empty
    if (userText !== "") {

        github.getUser(userText)
            .then(data => {
                //We are checking whether the name we are typing that user is existing or not and if not existing then we want to show an alert and go on further
                if (data.profile.message === "Not Found") {
                    //show alert
                }
                else {
                    //show the profile
                }
            });
    }
});