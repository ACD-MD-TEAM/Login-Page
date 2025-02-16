<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from 167.99.69.32:2002/pair by HTTrack Website Copier/3.x [XR&CO'2017], Thu, 09 Jan 2025 06:03:28 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arch auto deploy Pair Code</title>
  <link rel="stylesheet" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-image: url('background.jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      font-family: Arial, sans-serif;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 300px;
      height: auto; /* Adjusted for flexibility */
      padding: 20px;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(250, 249, 249, 0.7);
    }

     #logo {
      background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent white background */
      width: 100px; /* Adjust width as needed */
      height: 100px; /* Adjust height to match width for circular shape */
      margin-top: 30px;
      border-radius: 50%; /* Make it circular */
      position: relative;
      z-index: 1000;
   }
      
    #text {
      margin: 0;
      color: #f6f5f5;
    }
      
     .fa {
      font-size: 60px;
      }

    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 1rem;
      padding: 0.3rem;
      gap: 1rem; 
      width: calc(100% - 0,6rem)
    }

    .input-container input {
      border-radius: 0.8rem;
      background-color: rgba(255, 255, 255, 0);
      max-width: 100%; /* Ensure it doesn't exceed container */
      width: calc(100% - 2rem); /* Adjust for padding */
      padding: 1rem;
      border: 1px solid white;
      color: white;
      transition: all 0.2s ease-in-out;
    }

    .input-container input:focus {
      outline: none;
    }

    .input-container button {
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.4);
      font-weight: 700;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      color: white;
      border: 2px solid white;
      gap: 2rem;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out;
      width: calc(90% - 2rem); /* Adjust for padding */
    }

    .input-container button:hover {
      background: linear-gradient(135deg, #c01736 0%, #8b17b6 100%);
    }

    @media (max-width: 500px) {
      .box {
        width: 90%;
      }
    }
      
  </style>
</head>
<body>
  <div class="container">
    <div class="box" id="box">
      <div id="text">
        <h3 class="centered-text">Arch web Bot Deploy</h3>
        <h5>input your WhatsApp number without +</h5>
        <div class="input-container">
          <input placeholder="Eg: 234810248xxxx" type="number" id="number" name="">
          <button id="submit">Submit</button>
        </div>
        <a id="waiting-message" class="centered-text" style="display: none;">kindly wait(¬_¬)ﾉ</a>
        <main id="pair"></main>
      </div>
    </div>
  </div>
  <script src="../cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
  <script>
    let a = document.getElementById("pair");
    let b = document.getElementById("submit");
    let c = document.getElementById("number");

    b.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!c.value) {
        a.innerHTML = '<br><br><a style="color:white;font-weight:bold">Enter your WhatsApp number with a country code</a><br><br>';
      } else if (c.value.replace(/[^0-9]/g, "").length < 11) {
        a.innerHTML = '<br><br><a style="color:red;font-weight:bold">Invalid number</a><br><br>';
      } else {
        const number = c.value.replace(/[^0-9]/g, "");
        c.value = "+" + number;
        a.innerHTML = '<br><br><a id="wait" style="color:white;font-weight:bold">Please wait for some time</a><br><br>';
        let { data } = await axios(`/code?number=${number}`);
        let code = data.code || "Service Unavailable";
        a.innerHTML = '<br><br><font id="copy" style="color:red;font-weight:bold">CODE: <span style="color:white;font-weight:bold">' + code + '</span></font><br><br>';
      }
    });
  </script>
</body>

<!-- Mirrored from 167.99.69.32:2002/pair by HTTrack Website Copier/3.x [XR&CO'2017], Thu, 09 Jan 2025 06:03:31 GMT -->
</html>
<!-- GetButton.io widget -->
<script type="text/javascript">
    (function () {
        var options = {
          
            whatsapp: "+2347036214381", // WhatsApp number
            call_to_action: "Need assistance?", // Call to action
            button_color: "#FF318E", // Color of butto 
            position: "right", // Position may be 'left' or 'right'
            order: "whatsapp", // Order of buttons
            pre_filled_message: "Hey, Ednut, Can you help me with....", // WhatsApp pre-filled message
        };
        var proto = 'pair.html', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
</script>
<!-- /GetButton.io widget -->
</html>
