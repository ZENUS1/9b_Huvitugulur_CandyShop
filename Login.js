<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="signup">
      <p>name</p>
      <input type="text" id="name" />
      <p>email</p>
      <input type="email" id="email" />
      <p>PassOne</p>
      <input type="text" id="passOne" />
      <p>PassTwo</p>
      <input type="text" id="passTwo" />
      <p>secretQ</p>
      <input type="text" id="secQ" />
      <p>secretA</p>
      <input type="text" id="secA" />
      <button onclick="Signup()">signup</button>
    </div>
    <hr />
    <div class="login">
      <p>email</p>
      <input type="text" id="lemail" />
      <p>password</p>
      <input type="password" id="lpass" />
      <button onclick="Login()">login</button>
    </div>
    <hr />
    <div class="forgot">
      <p>email</p>
      <input type="text" id="femail" />
      <button onclick="Forgot()">forgot</button>

      <p>Answer your secret question:</p>
      <p id="sQ"></p>
      <input type="text" id="sA" />
      <button onclick="Check()">check</button>
      <p>Your password was:</p>
      <p id="pass"></p>
    </div>
    <script src="./login.js"></script>
  </body>
</html>
