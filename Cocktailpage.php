<?php
session_start();
$name = $_SESSION['name'];

?>
<html>
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Damion&display=swap" rel="stylesheet">
  <link href="Cocktailpage.css" rel="stylesheet"></link>
  <script src="Cocktailpage.js" rel="text/javascript"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
</head>


<body>
<div id="body">
  <div class="Header" class="Seite1">
    <ul>
      <li><a href="Home.html"> Home </a></li>
      <li><a href="Anleitung.html"> Anleitung & FAQ's </a></li>
      <li><a href="Verantwortliche.html"> Verantwortliche</a></li>
    </ul>
  </div>
  <div class="Anleitung" id="Anleitung">

  </div>
  <div class="button">
  <button type="button" id="fragebutton"> ? </button>
  </div>
  <div class="flexpreis">
  <output id="flexpreis">0.00 €</output>
  </div>


  <div class="Auflistung" class="Seite1">
  <form name="liste">
  <ul id="getraenkeliste">
    <li class="Listenpunkt">Cuba Libre <input type="checkbox" name="CubaLibre" id="getraenk1" value="6.80" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">April Shower <input type="checkbox" name="AprilShower" id="getraenk2" value="7.80" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Bermuda Rose <input type="checkbox" name="BermudaRose" id="getraenk3" value="7.20" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Caipirinha <input type="checkbox" name="Caipirinha" id="getraenk4" value="6.90" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Cosmopolitan <input type="checkbox" name="Cosmopolitan" id="getraenk5" value="8.80" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Daiquiri <input type="checkbox" name="Daiquiri" id="getraenk1" value="9.80" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Cuba Libre <input type="checkbox" name="CubaLibre" id="getraenk1" value="6.80" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">April Shower <input type="checkbox" name="AprilShower" id="getraenk2" value="7.80" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Bermuda Rose <input type="checkbox" name="BermudaRose" id="getraenk3" value="7.20" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Caipirinha <input type="checkbox" name="Caipirinha" id="getraenk4" value="6.90" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Cosmopolitan <input type="checkbox" name="Cosmopolitan" id="getraenk5" value="8.80" onclick="calcPrice(this)" class="getraenk"></li>
    <li class="Listenpunkt">Daiquiri <input type="checkbox" name="Daiquiri" id="getraenk1" value="9.80" onclick="calcPrice(this)" class="getraenk"></li>
  </ul>
</form>
  </div>
<div class="klappbox" class="Seite1">
  <div class="arrow-down"></div>
  <button class="klappbutton" type="button" onclick="ausklappen()"></button>
</div>
  <div class="bestellteDrinks"  class="Seite1" id="bestellteDrinks" name="bDListe">
    <h5 id="titelschrift"></h5>
    <!-- Bestllungen -->
  </div>


  <div class="Bestellung" class="Seite1">
    <output tpye="value" id="gesamtpreis">0.00 €</output>
    <button id="bestellbutton" type="button"> zur Bestellübersicht </button>
  </div>
</div>
<!--
<div class="paypal-bezahlen">
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="HMXLV8LZNBB26">
<input type="image" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal.">
<img alt="" border="0" src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" width="1" height="1">
</form>
</div>
-->


</body>
</html>
