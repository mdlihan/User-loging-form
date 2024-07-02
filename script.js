let create_account = document.querySelector('#create-account');

let myForm = document.querySelector('#myForm');
let loging = document.querySelector('#loging');
let others = document.querySelector('#others');
let registration = document.querySelector('#registration');

others.addEventListener('click',()=>{
  myForm.style.display='none';
  create_account.style.display='flex'
})


//from 1 start
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let formData = new FormData(event.target);

    let formObject = {};
    formData.forEach(function(value, key) {
        formObject[key] = value;
    });
    
    let stordata = JSON.parse(localStorage.getItem('new-account')) || [];
    
    
    let accountExists = stordata.some(account =>
  account.email === formObject.email && account.password === formObject.password
);
    if (accountExists) {
       myForm.style.display = 'none';
       loging.style.display = 'flex';
       loging.style.transform = 'scale(1)';
    } else {
      alert('invalid email or password ')
    }
});
//form 1 end






document.getElementById('create-account').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let localStoragedata = JSON.parse(localStorage.getItem('new-account')) || [];
  
 
  let formData = new FormData(event.target);
  
  let formObject = {};
  formData.forEach(function(value, key) {
    formObject[key] = value;
  });

  localStoragedata.push(formObject);
  
  
  if (formObject.password == formObject.confirmPassword) {
    localStorage.setItem('new-account', JSON.stringify(localStoragedata));
    create_account.style.display = 'none';
    registration.style.display = 'flex';
    registration.style.transform = 'scale(1)';
  } else {
    alert ('confirm password dosenot match')
  }
});