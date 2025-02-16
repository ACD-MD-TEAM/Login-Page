<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACD Team Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #222;
            color: white;
        }
        .container {
            margin-top: 100px;
        }
        input {
            display: block;
            margin: 10px auto;
            padding: 10px;
            width: 200px;
        }
        button {
            padding: 10px 20px;
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
        }
        #message {
            margin-top: 20px;
            font-size: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>ACD Team Login</h2>
    <input type="text" id="email" placeholder="Email">
    <input type="password" id="password" placeholder="Password">
    <button onclick="checkLogin()">Login</button>
    <p id="message"></p>
</div>

<script>
    function checkLogin() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        if (email === "acd" && password === "acd") {
            document.getElementById("message").innerText = "HACK!";
            document.getElementById("message").style.color = "red";
        } else {
            document.getElementById("message").innerText = "Invalid Credentials!";
            document.getElementById("message").style.color = "white";
        }
    }
</script>

</body>
</html>
