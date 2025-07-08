
import API_Post_request from '../Services/API_requests.js';

function send_retreive_Data_from_Database(urls,response, content_type="application/json") {
    
    if(API_Post_request(urls, response, content_type)){
        return true;
    }
    return false;
}

function Password_ConfirmPassword_Authentication(password, confPassword, formData){
    if (formData.get("conf-pass") !== formData.get("password")) {
        alert("Password and Confirm password are not equal");
        return false; 
    }
    return true;
}



function create_jason_object(formData){

    const response={};
    for (const item of formData){
        if(item[0]!="conf-pass"){
            response[item[0]]=item[1];
            // console.log(item[0], item[1]);
        }
    
    }
    return response;

}

export { send_retreive_Data_from_Database, Password_ConfirmPassword_Authentication };

