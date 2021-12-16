class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {

        //Now we need to create an entire html layout to display the info of the user 
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company:${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Members since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    //For clearing the entire users list when we clear the input
    clearProfile(){

        this.profile.innerHTML = "";
    }

    //showAlert function
    showAlert(message, className){
        //Removing any earlier alerts that we have
        this.clearAlert();
    
        //Create a div
        const div = document.createElement("div");
        
        //add a classname
        div.className = className;

        //Create a text node and Append the text node to the div
        div.appendChild(document.createTextNode(message));

        //get parent
        const container = document.querySelector(".searchContainer");

        //Get the search box
        const search = document.querySelector(".card-body");

        //Now we use the event delegation
        container.insertBefore(div,search);

        //Set a timeout so that the alert disappears after a 3 seconds
        setTimeout(() => {
            this.clearAlert();
        },3000);
        
    }

    //clearAlert function so that the alert mesages to dont pile up on the screen
    clearAlert(){
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
    }
    
}