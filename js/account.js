var accountInfoList = [];

var saveAccount = (function(){
    function save(){
        var accountTypeValue = document.getElementById("name").value;
        var depositValue = document.getElementById("deposit").value;

        var ai = new Object();
        ai.accountType = accountTypeValue;
        ai.deposit = depositValue

        accountInfoList.push(ai);

        document.getElementById("listAccounts").innerHTML = JSON.stringify(accountInfoList);
    }
    return save;
}());
