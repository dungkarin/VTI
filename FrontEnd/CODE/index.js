
// all account
var accounts = [];

getAllaccounts();

function getAllaccounts() {
    $.ajax({
        url: "https://650ee65454d18aabfe999594.mockapi.io/accounts",
        type: 'GET',
        success: function (data) {
            // console.log(data);
            accounts = data;
            loadAccounts();
        },
        error: function (xhr, status) {
            console.log(xhr, status);
        }
    })
}

function loadAccounts() {
    $("#table-account tbody").empty();
    accounts.forEach(account => {
        $("#table-account tbody").append(` <tr>
                                    <td><input type="checkbox"></td>
                                    <td>${account.id}</td>
                                    <td>${account.username}</td>
                                    <td>${account.fullname}</td>
                                    <td>
                                        <button type="button">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button type="button">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>`)
    })
}

function addAccount() {
    $("#show-accounts").hide();
    $("#create-account").show();
}

function showAccounts() {
    $("#show-accounts").show();
    $("#create-account").hide();
}

function createAccount() {
    var username = $("#username").val();
    var fullname = $("#fullname").val();
    if (!username || !fullname) {
        alert("Nhập đủ thông tin!!!");
        return;
    }
    $.ajax({
        url: "https://650ee65454d18aabfe999594.mockapi.io/accounts",
        type: 'POST',
        data: {
            username: username,
            fullname: fullname
        },
        success: function (data) {
            getAllaccounts();
            showAccounts();
        },
        error: function (xhr, status) {
            console.log(xhr, status);
        }
    })
}
// TO DO
    updateAccount();
function updateAccount() {
    $.ajax({
        url: "https://650ee65454d18aabfe999594.mockapi.io/accounts" + 1,
        type: 'PUT',
        data: {
            username: "username",
            fullname: "fullname"
        },
        success: function (data) {
            getAllaccounts();
            showAccounts();
        },
        error: function (xhr, status) {
            console.log(xhr, status);
        }
    })
}

// TO DO
    deleteAccount();
function deleteAccount(){
    $.ajax({
        url: "https://650ee65454d18aabfe999594.mockapi.io/accounts" + 2,
        type: 'DELETE',
        success: function (data) {
            getAllaccounts();
            showAccounts();
        },
        error: function (xhr, status) {
            console.log(xhr, status);
        }
    })
}


