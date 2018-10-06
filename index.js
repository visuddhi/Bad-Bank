// setup server
var express = require('express');
var app = express();

// setup directory used to serve static files
app.use(express.static('public'))

// setup data store
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// required data store structure
db.defaults(
{
    accounts:[
        {name        :  'administrator',
         email       :  'admin@mit.edu',
         balance     : 0,
         password    : '123456',
         transactions: []}
    ]
}
).write();

app.get('/account/create/:name/:email/:password', function (req, res) {
    // Create account route
 try{
      db.get('accounts').push({name:req.params.name,email:req.params.email, balance:0, password:req.params.password,transactions:[]}).write();
      res.send('Success! The account of ' + req.params.name+ ' is created');
    }
 catch (err) 
 {
      res.send('Failure:' + err.message);
    }
});

app.get('/account/login/:email/:password', function (req, res) {
    // Login user - confirm credentials
 try{
      var account = db.get('accounts').find({email:req.params.email, password:req.params.password}).value();
      
      if(account == null){
        res.send('Error: the login information is incorrect, please try again.');
      }
      else{
        res.send('The login is successful!');
      }
    }
 catch (err) 
 {
      res.send('Failure:' + err.message);
    }
});

app.get('/account/get/:email', function (req, res) {
    // Return account based on email
    try{
      var account = db.get('accounts').find({email:req.params.email}).value();
      
      if(account == null){
        res.send('Error: account not found, please try again.');
      }
      else{
        res.send(account);
      }
    }
     catch (err) 
     {
      res.send('Failure:' + err.message);
    }
});

app.get('/account/deposit/:email/:amount', function (req, res) {
    // Deposit amount for email
    // return success or failure string
     try{  
      var account = db.get('accounts').find({email:req.params.email}).value();
      var amount = req.params.amount;

      if(account == null){
        res.send('Error: account not found, please try again.');
      }
      else{
        account.balance += Number(amount);
        account.transactions.push({date:new Date(), amount: Number(amount), type:"Deposit"});
        db.get('posts').find({email: account.email}).assign({balance: account.balance, transations: account.transations}).value();
        db.write();
        res.send('The deposit is successful! Now the balance is ' + account.balance);
      }
    }
    catch (err) 
    {
      res.send('Failure: ' + err.message);
    }
});

app.get('/account/withdraw/:email/:amount', function (req, res) {
    // Withdraw amount for email
    // return success or failure string
    try{  
      var account = db.get('accounts').find({email:req.params.email}).value();
      var amount = req.params.amount;

      if(account == null){
        res.send('Error: account not found, please try again.');
      }
      else{
        account.balance -= Number(amount);
        account.transactions.push({date:new Date(), amount: Number(amount), type:"Withdraw"});
        db.get('posts').find({email: account.email}).assign({balance: account.balance, transations: account.transations}).value();
        db.write();
        res.send('The withdrawal is successful! Now the balance is ' + account.balance);
      }
    }
    catch (err) 
    {
      res.send('Failure: ' + err.message);
    }
});

app.get('/account/transactions/:email', function (req, res) {
    // Return all transactions for account
    try{
        var account = db.get('accounts').find({email:req.params.email}).value();
        if(account == null){
             res.send('Error: account not found, please try again.');
        }
        else{
            res.send({transactions: account.transactions});
        }
    }
    catch (err)
    {
        res.send('Failure: ' + err.message);
    }
});

app.get('/account/balance/:email', function (req, res) {
    // Return the balance for an account
    try{
        var account = db.get('accounts').find({email:req.params.email}).value();
        if(account == null){
             res.send('Error: account not found, please try again.');
        }
        else{
            res.send("Current balance is: " + account.balance);
        }
    }
    catch (err)
    {
        res.send('Failure: ' + err.message);
    }
});

app.get('/account/all', function (req, res) {
    // Return data for all accounts
    try{
        var account = db.get('accounts').value();
        if(account == null){
             res.send('Error: account not found, please try again.');
        }
        else{
            res.send(account);
        }
    }
    catch (err)
    {
        res.send('Failure: ' + err.message);
    }
});

// Start server
app.listen(8030, function(){
  console.log('Running on port:8030');
});