




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
  console.log(response);
  console.log(urls);
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
  } catch (error) {
    console.error('Failed:', error.response?.data || error.message);
  }
}

function go_to_login_page(){
  window.location.replace("LogIn.html");
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

form.addEventListener("submit", (event)=>{
  event.preventDefault();

  const url=form.getAttribute("backend-url");
  const page_name=form.getAttribute("page_name");
  
  if(page_name=="SignUp"){
    sendData(url);
    go_to_login_page();
  }
  else if(page_name=="LogIn"){
    Any_post_request_to_DB(url);
  }
  else if(page_name=="Add_movies"){
    Any_post_request_to_DB(url);
  }
  form.reset();
});



