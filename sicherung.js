class Tier{

  constructor(bezeichnung)
  {
    this.bezeichnung=bezeichnung;
    //Tier erzeugen
    var bild = document.createElement('img');
    bild.width = 300;
    bild.height = 300;
    bild.src = 'Hamster.jpg';
    bild.setAttribute("id","Tier");
    bild.setAttribute("align","center");

    var p = document.createElement("p");
    p.innerHTML=bezeichnung + " ist ein Tier";

    var button=document.createElement("button");
    button.setAttribute("onclick","machLaut()");
    button.innerHTML = "Action";


    document.body.appendChild(bild);
    document.body.appendChild(p);
    document.body.appendChild(button);

  }

  get_bezeichnung()
  {
    return this.bezeichnung;
  }

  set_bezeichnung(bezeichnung)
  {
    this.bezeichnung=bezeichnung;
  }

  bezeichnungsaufruf()
  {
    return "Bezeichnung des Tiers:" + this.bezeichnung;
  }

  machLaut()
  {
    alert("ich bin ein Tier");
  }


}

class Adler extends Tier{

  constructor(name, gewicht, bezeichung)
  {
    super(bezeichung);//ruft den K des Prototypen auf
    this.name=name;
    this.gewicht=gewicht;

    var adlerbild = document.createElement('IMG');
    adlerbild.width = 300;
    adlerbild.height = 300;
    adlerbild.src = 'Adler.jpg';
    adlerbild.setAttribute("id","Adler");
    adlerbild.setAttribute("align","center");

    var p = document.createElement("p");
    p.innerHTML="Das ist " +  Tier.bezeichnung + " ein Adler! Er wiegt " + this.gewicht + " und heisst " + this.name + "! Er ist verwandt mit: " ;

    var button=document.createElement("button");
    button.setAttribute("content","Action");
    button.setAttribute("onclick","this.machLaut()");


    document.body.appendChild(adlerbild);
    document.body.appendChild(p);
    document.body.appendChild(button);


  }
  get_name()
  {
    return this.name;
  }
  set_name(name)
  {
    this.name=name;
  }
  get_gewicht()
  {
    return this.gewicht;
  }
  set_gewicht(gewicht)
  {
    this.gewicht=gewicht;
  }

  machLaut()
  {
    alert("Ich bin ein Adler");
  }
}

class Tiger extends Tier{

  constructor(name,gewicht,bezeichnung)
  {
    super(bezeichnung); //ruft die Superklasse Tier auf und legt einen Bezeichner fest
    this.name=name;
    this.gewicht=gewicht;

    var tigerbild = document.createElement('IMG');
    tigerbild.width = 300;
    tigerbild.height = 300;
    tigerbild.src = 'Tiger.jpg';
    tigerbild.setAttribute("id","Tiger");
    tigerbild.setAttribute("align","center");

    var p = document.createElement("p");
    p.innerHTML="Das ist " + Tiger.prototype.bezeichnung + " ein Tiger! Er wiegt " + this.gewicht + " und heisst " + this.name;

    var button=document.createElement("button");
    button.setAttribute("content","Action");
    button.setAttribute("onclick","this.machLaut()");

    document.body.appendChild(tigerbild);
    document.body.appendChild(p);
    document.body.appendChild(button);

  }
  get_name()
  {
    return this.name;
  }
  set_name(name)
  {
    this.name=name;
  }
  get_gewicht()
  {
    return this.gewicht;
  }
  set_gewicht(gewicht)
  {
    this.gewicht=gewicht;
  }
  machLaut()
  {
    alert("Ich bin ein Tiger");
  }
}




function erstelleTier(element)
{
  var tier_in=document.createElement("input");
  tier_in.setAttribute("id","tierInput");

  var label=document.createElement("label");
  label.innerHTML="Bezeichnung :";


  document.body.appendChild(label);
  document.body.appendChild(tier_in);

  erstelleInput(element.id);

}

function erstelleInput(buttonid)
{
  var eingabeFeldVorhanden=document.getElementById(inputFeld);
  if(eingabeFeldVorhanden==null)
  {
  var inputFeld=document.createElement("div");
  inputFeld.setAttribute("id","inputFeld");

  //name
  var name_in=document.createElement("input");
  name_in.setAttribute("id","nameInput");
  var nameLabel=document.createElement("label");
  nameLabel.innerHTML="Name :";
  //gewicht
  var gewicht_in=document.createElement("input");
  gewicht_in.setAttribute("id", "gewichtInput");
  var gewichtLabel=document.createElement("label");
  gewichtLabel.innerHMTL="Gewicht :"
  //button zum Erstellen
  var button=document.createElement("button");
  button.setAttribute("onclick","machLaut()");

  if(buttonid=="Tierbutton")
  {
    button.innerHMTL="Erstelle Tier";
  }
  else if(buttonid=="Tigerbutton")
  {
    button.innerHMTL="Erstelle Tiger";

  }
  else if(buttonid=="Adlerbutton")
  {
    button.innerHTML="Erstelle Adler";
  }
  document.body.appendChild(nameLabel);
  document.body.appendChild(name_in);
  document.body.appendChild(gewichtLabel);
  document.body.appendChild(gewicht_in);
  document.body.appendChild(button);
  }

}





//https://www.mediaevent.de/javascript/class.html hier ist es perfekt erklärt
