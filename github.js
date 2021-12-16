class Github{
    //Below are our client id and client secret wiht which we can access the github API
    constructor(){
        this.client_id = "b1f90a55250723c172f2";
        this.client_secret = "f844523d12c897cc5cc3b854eb4e251cbd576e1b";
    }

    async getUser(user){

        //this is the response where we will get the profile response of the user, we will have a different response for the  user repo
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret = ${this.client_secret}`); //here we added the query strings which will be necessary to get the information from the API

        const profileData = await profileResponse.json();

        //Below we return an object as we want to also return the repo of the user, so es6 allows us this freedom
        return {
            profile: profileData
        }
    }
}