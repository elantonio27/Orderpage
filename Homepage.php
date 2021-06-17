<?php
  session_start();
  $_SESSION['name'] = "usersession";
?>

<html>
<head>
  <title>
    Homepage
  </title>
<!--  <script src="homepage.js" rel="text/javascript"></script>-->
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Damion&display=swap" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="homepage.css" rel="stylesheet"></link>

</head>
<body>
  <div class="Header">
    <ul>
      <li><a href="Home.html"> Home </a></li>
      <li><a href="Anleitung.html"> Anleitung & FAQ's </a></li>
      <li><a href="Verantwortliche.html"> Verantwortliche</a></li>
    </ul>
  </div>

  <div class="Auswahlelement" id="Cocktailelement">
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><img src="cocktails.jpg" id="cocktailbild" height="100px" width="200px"></a>
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><span>Cocktails<span></a>
  </div>

  <div class="Auswahlelement">
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><img src="longdrinks.jpg"id="longdrinkbild" height="100px" width="200px"></a>
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><span>Longdrinks<span></a>
  </div>

  <div class="Auswahlelement">
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><img src="Shots.jpg" id="shotbild" height="100px" width="200px"></a>
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><span>Shots<span></a>
  </div>

  <div class="Auswahlelement">
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><img src="Biere.jpg" id="bierbild" height="100px" width="200px"></a>
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><span>Biere<span></a>
  </div>

  <div class="Auswahlelement">
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><img src="Programm.jpg" id="programmbild" height="100px" width="200px"></a>
  <a href="http://localhost/Barkeeper/Cocktailpage.php"><span>Actions<span></a>
  </div>

<footer>
  <p><a href="impressum.html"></a></p>
</footer>
</body>
</html>
