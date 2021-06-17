let help=false;
let anzeige=false;
let bestellMap=new Map();

function setup()
{
  //Fragebutton
  let button=document.getElementById("fragebutton");
  button.addEventListener("click", openExplainBox);
  //bestellbutton
  let bestellButton=document.getElementById("bestellbutton");
  bestellButton.addEventListener("click", abschicken);
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
  //keine doppelten Werte in der Liste;
  bestellMap.clear();


  for(let i=0; i<document.liste.length;i++)
  {
    if(document.liste.elements[i].checked)
    {
      betrag=document.liste.elements[i].value;
      drinkname=document.liste.elements[i].name;

      //jeder Drink der gecheckt ist wird in die Map eingefügt

        bestellMap.set(drinkname, betrag);

      Number(betrag).toFixed(2);
      gesamtpreis=parseFloat(gesamtpreis).toFixed(2);

    gesamtpreis=parseFloat(gesamtpreis) + parseFloat(betrag);
    //muss überarbeitet werden!
    gesamtpreis=gesamtpreis.toFixed(2);
    }

  }
  //ausgabe gesamtPreis zur kontrollle
  //Zuweisung der allg. Ausgabe
  let flexpeis=document.getElementById("flexpreis");
  let ausgabe=document.getElementById("gesamtpreis");
  flexpreis.innerHTML=gesamtpreis + " €";
  ausgabe.innerHTML=gesamtpreis+ " €";



}
function ausklappen()
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
function abschicken()
{
  let bestJSON={};
  bestJSON = strMapToObj(bestellMap);
  neueSeite();



}

function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {

    obj[k] = v;
  }
  return obj;
}

function neueSeite()
{
  var body,div,ul,li,txt,gesamtpreis=0.00;
  var form,input1,input2,input3,img,formende,alleStrings;

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



window.addEventListener("load", setup);
