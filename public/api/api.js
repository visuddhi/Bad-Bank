
function create() {
    //  Create user account on server
    var name  = document.getElementById('createName').value;
    var email  = document.getElementById('createEmail').value;
    var password  = document.getElementById('createPswd').value; 
    var url = '/account/create/' + name + '/' + email + '/' + password;
    var output     = document.getElementById('output');
    superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
                output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

function GetAccount(){
    // Get use account via email
    var email  = document.getElementById('GetAccountEmail').value;
    var url = '/account/get/' + email;
    var output     = document.getElementById('output');
    superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
                output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

function login() {
    //  Confirm credentials on server
    var email  = document.getElementById('loginEmail').value;
    var password  = document.getElementById('loginPswd').value;
    var url = '/account/login/' + email + '/' + password;
    var output     = document.getElementById('output');
    superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
               output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

function deposit() {
    //  Deposit funds user funds on server
    var email  = document.getElementById('depositEmail').value;
    var amount  = document.getElementById('depositAmount').value;
    var url = '/account/deposit/' + email + '/' + amount;
    var output     = document.getElementById('output');
     superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
                output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

function withdraw() {
    //  Withdraw funds user funds on server
    var email  = document.getElementById('withdrawEmail').value;
    var amount  = document.getElementById('withdrawAmount').value;
    var url = '/account/withdraw/' + email + '/' + amount;
    var output     = document.getElementById('output');
     superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
                output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

function transactions() {
    //  Get all user transactions
    var email  = document.getElementById('transactionsEmail').value;
    var url = '/account/transactions/' + email;
    var output     = document.getElementById('output');
     superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
                output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

function balance() {
    //  Get user balance
    var email  = document.getElementById('balanceEmail').value;
    var url = '/account/balance/' + email;
    var output     = document.getElementById('output');
      superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
                output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

function allData() {
    //  Get all data
    var url = '/account/all';
    var output     = document.getElementById('output');
      superagent.get(url).end(function(err, res){
            if(err){
                console.log(err)
            }
            else{
               output.innerHTML = JSON.stringify(res.text)
            }
     });  
}

