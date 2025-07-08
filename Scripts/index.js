
import { Password_ConfirmPassword_Authentication, send_retreive_Data_from_Database } from './Modules/Logic_functions.js';


async function sendData(urls) {
  const formData=new FormData(form);
  const response={};
  if (formData.get("conf-pass") !== formData.get("password")) {
    alert("Password and Confirm password are not equal");
    return; 
  }
  for (const item of formData){
    if(item[0]!="conf-pass"){
       response[item[0]]=item[1];
    }
   
  }
  
  
  try{
    axios({
    method: 'post',
    url: urls,
    data: response,
    });
  }
  catch (e) {
    console.error(e);
  }
  return "sucess";
  
  
}

async function Any_post_request_to_DB(urls){
  const formData = new FormData(form);
  

  try {
    const response = await axios.post(urls, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log('Success:', response.data);
    return "success";

  } catch (error) {
    console.error('Failed:', error.response?.data || error.message);
    return "failed";
  }
}

function go_to_login_page(){
  window.location.replace("LogIn.html");
}

function go_to_home_page(){
  window.location.replace("../index.html");
}

function isvalid(){
  const email=document.form.user.value;
  const pass=document.form.pass.value;
  if(email.length=="" || pass==""){
    alert("Username or password are Empty");
    return false;
  }
  else{
    return true;
  }

}




const form =document.querySelector("#outside_form");
const base_url="http://localhost/cinema-booking-backend/";

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const page_name=form.getAttribute("page_name");
  const url=base_url+page_name;

  const formData=new FormData(form);

  if(page_name=="SignUp"){
    if (!Password_ConfirmPassword_Authentication(formData.get("password"), formData.get("conf-pass"), formData)) {
        return; 
    }
    send_retreive_Data_from_Database(url,formData);
    go_to_login_page();
  }
  else if(page_name=="LogIn"){
    send_retreive_Data_from_Database(url,formData);
    go_to_home_page();
  }
  else if(page_name=="AddMovie"){
    // "multipart/form-data";  Sending data in chunks to handle images
    send_retreive_Data_from_Database(url, formData, 'multipart/form-data');
  }
  form.reset();
});



