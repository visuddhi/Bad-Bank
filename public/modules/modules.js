var ui = {};

ui.navigation = `
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Bad Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
            <a class="nav-item nav-link" href="#" id="createAccountNavButton" onclick="loadCreateAccount()">Create Account<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#" id="GetAccountNavButton" onclick="loadGetAccount()">Get Account</a>
            <a class="nav-item nav-link" href="#" id="loginNavButton" onclick="loadLogin()">Login</a>
            <a class="nav-item nav-link" href="#" id="depositNavButton" onclick="loadDeposit()">Deposit</a>
            <a class="nav-item nav-link" href="#" id="withdrawNavButton" onclick="loadWithdraw()">Withdraw</a>
            <a class="nav-item nav-link" href="#" id="transactionsNavButton" onclick="loadTransactions()">Check Transactions</a>
            <a class="nav-item nav-link" href="#" id="balanceNavButton" onclick="loadBalance()">Check Balance</a>
            <a class="nav-item nav-link" href="#" id="allDataNavButton" onclick="loadAllData()">Show All Data</a>
    </div>
  </div>
</nav>
`;

ui.createAccount = `
    <form onsubmit="create()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                </div>
                <input id="createName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Name" required>
            </div>
            <br/>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="createEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                </div>
                <input id="createPswd" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Password" required>
            </div>
            <br/>
            <button type="submit" class="btn btn-light">Create Account</button>
            <br/>
            <div id="output"></div>
        </div>
    </div> 
</form>
`;

ui.GetAccount = `
   <form onsubmit="GetAccount()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Get Account</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="GetAccountEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>
            <button type="submit" class="btn btn-light">Get Account</button>
            <br/>
            <div id="output"></div>
        </div>
    </div> 
</form>  
`;

ui.login = `
   <form onsubmit="login()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Login</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="loginEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                </div>
                <input id="loginPswd" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Password" required>
            </div>
            <br/>
            <button type="submit" class="btn btn-light">Login</button>
            <br/>
            <div id="output"></div>
        </div>
    </div> 
</form> 
`;

ui.deposit = `
    <form onsubmit="deposit()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="depositEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Amount</span>
                </div>
                <input id="depositAmount" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Amount" required>
            </div>
            <br/>
            <button type="submit" class="btn btn-light">Deposit</button>
            <br/>
            <div id="output"></div>
        </div>
    </div> 
</form> 
`;

ui.withdraw = `
   <form onsubmit="withdraw()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Withdraw</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="withdrawEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Amount</span>
                </div>
                <input id="withdrawAmount" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Amount" required>
            </div>
            <br/>
            <button type="submit" class="btn btn-light">Withdraw</button>
            <br/>
            <div id="output"></div>
        </div>
    </div> 
</form> 
`;

ui.transactions = `
   <form onsubmit="transactions()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Transactions</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="transactionsEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>
            <button type="submit" class="btn btn-light">Show Transactions</button>
            <br/>
            <div id="output"></div>
        </div>
    </div> 
</form> 
`;

ui.balance = `
   <form onsubmit="balance()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Balance</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="balanceEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>
            <button type="submit" class="btn btn-light">Check Balance</button>
            <br/>
            <div id="output"></div>
        </div>
    </div> 
</form>  
`;

ui.default = `
<div class="card bg-light mb-3" style="max-width: 20rem;">
    <div class="card-header"><h2>The Bad Bank Homepage<h2/></div>
    <div class="card-body">
        <h5 class="card-title">Developer: Hanzhang Qin</h5>
        <img class="card-img-bottom" src="bank.png" alt="The Bad Bank">
    </div>
</div> 
`;

ui.allData = `
   <form onsubmit="allData()">
    <div class="form-group card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">All Data</div>
        <div class="card-body">
            <br/>
            <button type="submit" class="btn btn-light">Show All Data</button>
             <br/>
            <div id="output"></div>
        </div>
    </div> 
</form> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

var activeNavButton;

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
    setActiveNavBar("createAccountNavButton");
};

var loadGetAccount = function(){
    target.innerHTML = ui.GetAccount;
    setActiveNavBar("GetAccountNavButton");
};

var loadLogin = function(){
    target.innerHTML = ui.login;
    setActiveNavBar("loginNavButton");
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
    setActiveNavBar("depositNavButton");
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
    setActiveNavBar("withdrawNavButton");
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
    setActiveNavBar("transactionsNavButton");
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
    setActiveNavBar("balanceNavButton");
};

var defaultModule = function(){
    target.innerHTML = ui.default;
    activeNavButton = navigation;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
    setActiveNavBar("allDataNavButton");
};

var setActiveNavBar = function(id){
    activeNavButton.classList.remove("active");
    activeNavButton = document.getElementById(id);
    activeNavButton.classList.add("active");
}

defaultModule();
