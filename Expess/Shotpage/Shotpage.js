let help=false;
let anzeige=false;
let bestellMap=new Map();
let buuid;

function setup()
{
  //Fragebutton
  let button=document.getElementById("fragebutton");
  button.addEventListener("click", openExplainBox);
  //bestellbutton
  let bestellButton=document.getElementById("bestellbutton");
  bestellButton.addEventListener("click", abschicken);
  getListFromServer2();
  getTischeFromServer();
}
function openExplainBox()
{

  if(help===false)
  {

    let divbox=document.getElementById("Anleitung");
    let newArticle=document.createElement("article");
    let articleText=document.createTextNode("Tippe auf den Namen des Cocktails um mehr über die Zutaten oder den Preis zu erfahren!");
    let articleText2=document.createTextNode(" Der Gesamtpreis wird dir am unteren Bowserrand angezeigt");
    let articleText3=document.createTextNode(" Um die Bestellung einzusehen drücke auf den weissen Pfeil über dem Bestellen Button...");
    newArticle.appendChild(articleText);
    newArticle.appendChild(articleText2);
    newArticle.appendChild(articleText3);
    divbox.appendChild(newArticle);
    newArticle.setAttribute("id","helpArticle");
    divbox.setAttribute("visibility","visible");
    help=true;
  }
  else {
      let article=document.getElementById("helpArticle");
      article.parentNode.removeChild(article);
      help=false;
  }
}
function calcPrice(element)
{
  let gesamtpreis=0.00;
  let betrag=0.00;
  let drinkname="";
  let drinknameArray=[];
  let drinkpreisArray=[];
  let stepper;
  let listenElement;
  let p,txt,span,div;
  //keine doppelten Werte in der Liste;
  bestellMap.clear();

  //markierten Checkoxen druchlaufen
  for(let i=0; i<document.liste.length;i++)
  {
    if(document.liste.elements[i].checked)//wenn eine checkbox markiert ist:
    {
      listenElement = document.liste.getElementsByTagName('li')[i];
      betrag=document.liste.elements[i].value;
      drinkname=document.liste.elements[i].name;
      //AnzahlElement erstellen:
      checkbox=document.liste.elements[i];

      //jeder Drink der gecheckt ist wird in die Map eingefügt
      bestellMap.set(drinkname, betrag); //bestelldrink in die Map einfügen

      Number(betrag).toFixed(2); //Zahl und Nachkommastellen gerundet
      gesamtpreis=parseFloat(gesamtpreis).toFixed(2);

    gesamtpreis=parseFloat(gesamtpreis) + parseFloat(betrag);//berechnung für das Gesamtausgabefeld
    //muss überarbeitet werden!
    gesamtpreis=gesamtpreis.toFixed(2); //runden
    }

  }
  //ausgabe gesamtPreis zur kontrollle
  //Zuweisung der allg. Ausgabe
  let flexpeis=document.getElementById("flexpreis");
  let ausgabe=document.getElementById("gesamtpreis");
  flexpreis.innerHTML=gesamtpreis + " €";
  ausgabe.innerHTML=gesamtpreis+ " €";



}
function ausklappen()//klappt den Infoteil aus welcher die Seite erklärt
{
  var p, txt,title,
      div = document.getElementById("bestellteDrinks");
      if(anzeige==false)
      {

          div.replaceChildren("");

          //Elemente erzeugen
          for(var [key, value] of bestellMap.entries())
          {
            p=document.createElement("p");
            txt= document.createTextNode(key + "----------------"+ value);
            p.appendChild(txt);
            p.setAttribute("class","bestellungsListe")
            div.appendChild(p);
            div.setAttribute("border-color","white");
            anzeige=true;
          }
        }
        else {
          div.replaceChildren("");
          anzeige=false;
        }

}

//wenn bestellen gedrückt wird
function abschicken()//sobald der User den Button bestellen drückt
{

//  neueSeite();
  let bestJSON,resonseJSON;
  let jsonObject = {};
  let jsonArray=[];
  for (let [key, value] of bestellMap) {
    jsonObject={name: key, preis: value};
    jsonArray.push(jsonObject);
}
  console.log("Liste des Clients:")
  console.log(jsonArray);
/*  Promse.all([new Promise(), ]).then()*/
  responseJSON=postData(url='http://localhost:1337/shotlist',jsonArray); //Verbindung mit Server aufbauen und die drinkliste speichern
  responseJSON.then(function(response) { //.then chaining um promise zu verarbeiten / neue FUnktion weil asynchron
    return response.text();
  }).then(function(data) { //.then chaining
    console.log(data); //um einen String zu erhalten
    var tischnummer=document.getElementById("tisch");
    var tobject = {tischnummer: tischnummer.value, buuid : buuid};
    postData(url='http://localhost:1337/tische', tobject);
    if(data=='true')
    {
      neueSeite();
    }
    else {
      console.log("Manipulation liegt vor");
    }
  });



  /*
  //neuer Code
  fetch("http://localhost:1337/drinklist", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: myName,
    password: myPassword
  })
})
.then( (response) => {
   //do something awesome that makes the world a better place
});

*/
}
async function postData(url, data)//postFunktion
{

  const response= await fetch(url, {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data)
  });
  return response;

  //was erhalte ich zurück?
  //wo GENAU muss das festgelegt werden
}

function strMapToJson(strMap) {

  return JSON.stringify(strMap);

}
function neueSeite()
{
  var body,div,ul,li,txt,gesamtpreis=0.00;
  var form,input1,input2,input3,img,formende,alleStrings;
  var ppb=document.getElementById("paypal-bezahlen");

  body=document.getElementById("body");
  body.replaceChildren("");
  body.setAttribute("background-color","black");
  div=document.createElement("div");
  div.setAttribute("class","BestellungNewPage");
  body.appendChild(div);
  ul=document.createElement("ul");
  ul.setAttribute("list-style-type","none");
  div.appendChild(ul);
  li=document.createElement("li");
  txt=document.createTextNode("Ihre Bestellung")
  li.appendChild(txt);
  li.setAttribute("id","bestellkopf");
  ul.appendChild(li);
  ppb.style.visibility="visible";



  for(var [key, value] of bestellMap.entries())
  {
    li=document.createElement("li");
    txt=document.createTextNode(key + " : " + value +" €");
    li.appendChild(txt);
    ul.appendChild(li);
    value=parseFloat(value);
    gesamtpreis=parseFloat(gesamtpreis);

  gesamtpreis=parseFloat(gesamtpreis) + parseFloat(value);
  //muss überarbeitet werden!
  gesamtpreis=gesamtpreis.toFixed(2);

  }

  txt=document.createTextNode("Endpreis: " + gesamtpreis +" €");
  li=document.createElement("li");
  li.appendChild(txt);
  ul.appendChild(li);
  li.setAttribute("id","endsumme");
  document.getElementById("endsumme");

}

function getTischeFromServer()
{
  fetch ("http://localhost:1337/tische").then (function (response) {
     return response.json();
  }).then (function (data) {
     appendData (data.anzahl);
  }).catch (function (error) {
     console.log ("error: " + error);
  });
  function appendData(data)
  {
    var select=document.getElementById("tisch");
    for(var i=1;i<data;i++)
    {
      var option=document.createElement("option");
      option.innerHTML=i;
      select.appendChild(option);
    }

  }
}

 function getListFromServer2() {
fetch ("http://localhost:1337/shotlist").then (function (response) {
   return response.json();
}).then (function (data) {
   appendData (data);
}).catch (function (error) {
   console.log ("error: " + error);
});

function appendData (data) {
let liste, checkbox, txtNde,ul;
    buuid = data.buuid;
let results = data.results;
   for (let i=0; i<results.length; i++)
   {
     liste=document.createElement("li");
     checkbox=document.createElement("input");
     txtNde=document.createTextNode(results[i].name);
     ul=document.getElementById("getraenkeliste");
     liste.setAttribute("class","Listenpunkt");
     checkbox.setAttribute("name",results[i].name);
     checkbox.setAttribute("type","checkbox");
     checkbox.setAttribute("value",results[i].preis);
     checkbox.setAttribute("onclick","calcPrice(this)");
     checkbox.setAttribute("class","getraenk");
     liste.appendChild(txtNde);
     liste.appendChild(checkbox);
     ul.appendChild(liste);


    /* <li class="Listenpunkt">Cuba Libre <input type="checkbox" name="CubaLibre" id="getraenk1" value="6.80" onclick="calcPrice(this)" class="getraenk"> </li>*/

     console.log(results[i].name + " : " + results[i].preis);
   }

   }
}




window.addEventListener("load", setup);
