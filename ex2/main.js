"use strict";

function createHeaders() {
  var div = document.createElement("div");

  div.setAttribute("id", "profile");
  div.setAttribute("style", "visibility:hidden");
  div.style.color = "black";
  div.style.margin = "20px";
  div.style.padding = "0";
  div.style.backgroundColor = "#ffc";
  div.style.backgroundImage = "url(awesome-smiley-face-meme-t-shirt-men-s-t-shirt.jpg)";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundPosition = "90% 60%";
  div.style.backgroundSize = "15% 30%";
  div.style.fontFamily = "arial";
  document.body.appendChild(div);
  var h1 = document.createElement("h1");

  var text = document.createTextNode("Welcome to my profile page ");
  h1.style.color = "yellow";
  h1.style.backgroundColor = "#900";
  h1.style.fontSize = "2.5em";
  h1.style.margin = "0";
  h1.style.marginBottom = "7px";
  h1.style.padding = "4px";
  h1.style.fontStyle = "italic";
  h1.style.textAlign = "center";
  h1.style.letterSpacing = "0.5em";
  h1.style.borderBottomStyle = "solid";
  h1.style.borderBottomWidth = "0.5em";
  h1.style.borderBottomColor = "#00f";

  var h2 = document.createElement("h2");
  h2.setAttribute("style", "background:radial-gradient(yellow, green, red, blue, yellow)");

  var paragraph = document.createElement("p");
  h2.style.color = "white";
  h2.style.backgroundColor = "#090";
  h2.style.fontSize = "1.5em";
  h2.style.margin = "0";
  h2.style.padding = "2px";
  h2.style.textAlign = "center";
  h2.style.borderStyle = "dotted";
  h2.style.borderWidth = "5px";
  h2.style.borderLeftWidth = "5px";
  h2.style.borderRightWidth = "5px";
  h2.style.borderColor = "cyan";
  var name = document.createTextNode("Name: Ori Broda");
  div.appendChild(h1);
  h1.appendChild(text);
  div.appendChild(h2);
  h2.appendChild(paragraph);
  paragraph.appendChild(name);
  paragraph.innerHTML += "<br>";
  var id = document.createTextNode("ID: 308043447");
  paragraph.appendChild(id);
  return div;
}

function createImage(div) {
  var section = document.createElement("section");
  section.style.textAlign = "center";
  var paragraph = document.createElement("p");
  var image = document.createElement("img");
  var calcbutton = document.createElement("img");
  image.setAttribute("src", "14212190_10210443918035937_2938822436872061327_n.jpg");
  image.setAttribute("width", "250");
  image.setAttribute("height", "250");
  image.setAttribute("alt", "HTML Dog");
  image.style.position = "relative";
  image.style.right = "4%";
  image.style.borderStyle = "solid";
  image.style.borderWidth = "4px";
  image.style.borderColor = "#abc";
  image.style.textAlign = "center";
  image.style.boxShadow = "5px 5px 3px 3px #999";
  calcbutton.setAttribute("src", "Calculator-icon.png");
  calcbutton.setAttribute("width", "100");
  calcbutton.setAttribute("height", "100");
  calcbutton.setAttribute("alt", "theCalc");
  calcbutton.setAttribute("onClick", "initCalc(false)");
  calcbutton.style.position = "relative";
  calcbutton.style.right = "10%";
  calcbutton.style.cursor = "pointer";
  section.appendChild(paragraph);
  paragraph.appendChild(calcbutton);
  paragraph.appendChild(image);
  div.appendChild(section);
  return div;
}

function createLink(div) {
  var nav = document.createElement("nav");
  nav.style.textAlign = "center";
  var paragraph = document.createElement("p");
  var link = document.createElement("a");
  var strong = document.createElement("strong");
  var text = document.createTextNode("My favorite page");
  link.setAttribute("href", "https://github.com/oribro");
  link.style.color = "blue";
  link.style.fontSize = "25px";
  nav.appendChild(paragraph);
  paragraph.appendChild(link);
  link.appendChild(strong);
  strong.appendChild(text);
  div.appendChild(nav);
  return div;
}

function createDetails(div) {
  var details = document.createElement("details");
  details.style.textAlign = "center";
  details.style.fontSize = "30px";
  details.style.fontWeight = "bold";
  details.style.color = "red";
  var ol = document.createElement("ol");
  var b = document.createElement("b");
  var em = document.createElement("em");
  var cite = document.createElement("cite");
  var br = document.createElement("br");
  var audio = document.createElement("audio");
  var p = document.createElement("p");
  var time = document.createElement("time");

  function createList(line, lineNum) {

    var li = document.createElement("li");
    li.style.color = "blue";
    li.style.fontStyle = "italic";
    ol.appendChild(li);
    if (lineNum === 1) {

      li.appendChild(line);
      li.appendChild(b);
      li.appendChild(em);
      line = document.createTextNode(" Computer Science");
      li.appendChild(line);
      line = document.createTextNode(" and");
      li.appendChild(line);
      li.appendChild(em);
      line = document.createTextNode(" Mathematics");
      li.appendChild(line);
      line = document.createTextNode(" at the ");
      li.appendChild(line);
      li.appendChild(cite);
      line = document.createTextNode(" Hebrew University");
      li.appendChild(line);
    } else if (lineNum === 3) {
      var textObj = document.createTextNode(line);
      li.appendChild(textObj);
      li.appendChild(br);
      var audio = document.createElement("audio");
      audio.setAttribute("src", "Prairie Dog-SoundBible.com-1831661504.mp3");
      audio.controls = true;
      li.appendChild(audio);
    } else {
      li.appendChild(line);
    }
  }
  div.appendChild(details);
  var line = document.createTextNode("I study");
  createList(line, 1);
  line = document.createTextNode("I have a dog");
  createList(line, 2);
  createList("She makes this sound:", 3);
  details.appendChild(ol);
  details.appendChild(p);
  var text = document.createTextNode("Written by Ori on ");
  p.appendChild(text);
  time.setAttribute("datetime", "2016-12-03");
  text = document.createTextNode("Saturday 3rd December 2016 ");
  time.appendChild(text);
  p.appendChild(time);
}

function authenticate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("psw").value;
  var oldscreen = document.getElementById("login");
  var newscreen = document.getElementById("profile");

  if (username === "admin" && password === "admin") {
    oldscreen.style.visibility = "hidden";
    newscreen.style.visibility = "visible";
    document.body.style.backgroundColor = "#ffc";
    window.scrollTo(0,0);
  } else {
    alert("Wrong login information. Please try again");
  }
  return false;
}

function createProfile() {
  var div = createHeaders();
  createImage(div);
  createLink(div);
  createDetails(div);
}

function createLogin() {
  var div = document.createElement("div");
  document.body.style.backgroundColor = "#abc";
  div.setAttribute("id", "login");
  div.setAttribute("align", "center");
  div.setAttribute("style", "visibility:visible");
  var form = document.createElement("form");
  form.setAttribute("name", "loginForm");

  var label = document.createElement("label");
  var b = document.createElement("b");
  var username = document.createTextNode("Username: ");
  var password = document.createTextNode("Password: ");
  var input = document.createElement("input");
  document.body.appendChild(div);
  div.appendChild(form);
  form.appendChild(label);
  label.appendChild(b);
  b.appendChild(username);
  input.setAttribute("type", "text");
  input.setAttribute("id", "username");
  input.required = true;
  var br = document.createElement("br");
  form.appendChild(input);
  form.appendChild(br);
  br = document.createElement("br");
  form.appendChild(br);
  label = document.createElement("label");
  input = document.createElement("input");
  form.appendChild(label);
  b = document.createElement("b");
  label.appendChild(b);
  b.appendChild(password);
  input.setAttribute("type", "password");
  input.setAttribute("id", "psw");
  input.required = true;
  var br = document.createElement("br");
  form.appendChild(input);
  var button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "loginButton");
  button.setAttribute("onClick", "return authenticate()");
  var login = document.createTextNode("Login");
  form.appendChild(br);
  form.appendChild(button);
  button.appendChild(login);
  var br1 = document.createElement("br");
}

var Calc = function Calc() {
  this.current = "0";
  this.last = "0";
  this.op = 0;
  this.uniqueId = calcIndex;
  calcIndex++;
};

Calc.prototype.addDigit = function (dig) {
  if (this.current === "0" && this.current.indexOf(".") === -1) {
    this.current = dig;
  } else {
    this.current = this.current + dig.toString();
  }
  document.getElementById("Display" + this.uniqueId).value = this.current;
};

Calc.prototype.addDot = function () {
  if (this.current.length === 0) {
    this.current = "0.";
  } else {
    if (this.current.indexOf(".") === -1) {
      this.current += ".";
    }
  }
  document.getElementById("Display" + this.uniqueId).value = this.current;
};

Calc.prototype.clear = function () {
  this.current = "0";
  this.op = 0;
  this.last = "0";
  document.getElementById("Display" + this.uniqueId).value = this.current;
};

Calc.prototype.performOp = function (opString) {
  if (opString.indexOf("*") != -1) {
    this.op = 1;
  }
  if (opString.indexOf("/") != -1) {
    this.op = 2;
  }
  if (opString.indexOf("+") != -1) {
    this.op = 3;
  }
  if (opString.indexOf("-") != -1) {
    this.op = 4;
  }
  this.last = this.current;
  this.current = "0";
  document.getElementById("Display" + this.uniqueId).value = this.current;
};

Calc.prototype.getResult = function () {
  if (this.op === 1) {
    this.current = eval(this.last) * eval(this.current);
  }
  if (this.op === 2) {
    this.current = eval(this.last) / eval(this.current);
  }
  if (this.op === 3) {
    this.current = eval(this.last) + eval(this.current);
  }
  if (this.op === 4) {
    this.current = eval(this.last) - eval(this.current);
  }
  this.op = 0;
  this.last = "0";
  document.getElementById("Display" + this.uniqueId).value = this.current;
};

Calc.prototype.manualInput = function () {
  var displayVal = document.getElementbyId("Display" + this.uniqueId).value;
  this.current = displayVal;
  this.current = "" + parseFloat(this.current);
  if (this.current.indexOf("NaN") != -1) {
    this.current = "Try Again";
  }
  displayVal = this.current;
};

Calc.prototype.surprise = function () {
  var bg = document.getElementById("calc");
  var form = document.getElementById("form" + this.uniqueId);
  bg.setAttribute("style", "background-size:180px 150px");
  form.style.visibility = "hidden";
  if (this.uniqueId === 0) {
    alert("Well..");
  } else {
    alert("Happy new year 2017 :D");
  }
};

Calc.prototype.createCalculator = function () {
  var form = document.createElement("form");
  form.setAttribute("name", "calculator");
  form.setAttribute("id", "form" + this.uniqueId);
  var table = document.createElement("table");
  table.setAttribute("border", "4");
  var display = document.createElement("tr");
  var td = document.createElement("td");
  td.setAttribute("colspan", "1");
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("maxLength", "40");
  input.setAttribute("size", "10");
  input.setAttribute("id", "Display" + this.uniqueId);
  var panels = document.createElement("tr");
  var digits = document.createElement("td");
  var digitsTable = document.createElement("table");
  var ops = document.createElement("td");
  var opsTable = document.createElement("table");
  var tdarr = new Array(4);
  var inputarr = new Array(4);
  for (var i = 0; i < 4; i++) {
    tdarr[i] = new Array(3);
    inputarr[i] = new Array(3);
  }

  var tdarr2 = new Array(3);
  var inputarr2 = new Array(3);
  for (var i = 0; i < 3; i++) {
    tdarr2[i] = new Array(2);
    inputarr2[i] = new Array(2);
  }

  var rowarr = new Array(3);
  for (var i = 0; i < 3; i++) {
    rowarr[i] = document.createElement("tr");
    opsTable.appendChild(rowarr[i]);
    for (var j = 0; j < 2; j++) {
      tdarr2[i][j] = document.createElement("td");
      inputarr2[i][j] = document.createElement("input");
      inputarr2[i][j].setAttribute("type", "button");
    }
  }
  inputarr2[0][0].setAttribute("value", "*");
  inputarr2[0][0].setAttribute("onClick", "calcArr[" + this.uniqueId + "].performOp('*')");
  inputarr2[0][1].setAttribute("value", "/");
  inputarr2[0][1].setAttribute("onClick", "calcArr[" + this.uniqueId + "].performOp('/')");
  inputarr2[1][0].setAttribute("value", "+");
  inputarr2[1][0].setAttribute("onClick", "calcArr[" + this.uniqueId + "].performOp('+')");
  inputarr2[1][1].setAttribute("value", "-");
  inputarr2[1][1].setAttribute("onClick", "calcArr[" + this.uniqueId + "].performOp('-')");
  inputarr2[2][0].setAttribute("value", "C");
  inputarr2[2][0].setAttribute("onClick", "calcArr[" + this.uniqueId + "].clear()");
  inputarr2[2][1].setAttribute("value", "=");
  inputarr2[2][1].setAttribute("onClick", "calcArr[" + this.uniqueId + "].getResult()");

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
      rowarr[i].appendChild(tdarr2[i][j]);
      tdarr2[i][j].appendChild(inputarr2[i][j]);
    }
  }
  var add = document.createElement("td");
  add.setAttribute("colspan", "2");
  var addin = document.createElement("input");
  addin.setAttribute("type", "button");
  addin.setAttribute("value", "ADD");
  addin.setAttribute("onClick", "spawnRandomCalc()");
  var addtr = document.createElement("tr");
  opsTable.appendChild(addtr);
  addtr.appendChild(add);
  add.appendChild(addin);

  var rowarr = new Array(4);
  for (var i = 0; i < 4; i++) {
    rowarr[i] = document.createElement("tr");
    digitsTable.appendChild(rowarr[i]);
    for (var j = 0; j < 3; j++) {
      tdarr[i][j] = document.createElement("td");
      inputarr[i][j] = document.createElement("input");
      inputarr[i][j].setAttribute("type", "button");
      if (i < 3) {
        var value = j + 7 - i * 3;
        inputarr[i][j].setAttribute("value", " " + value);
        inputarr[i][j].setAttribute("onClick", "calcArr[" + this.uniqueId + "].addDigit(" + "" + value + ")");
        rowarr[i].appendChild(tdarr[i][j]);
        tdarr[i][j].appendChild(inputarr[i][j]);
      }
    }
  }
  inputarr[3][0].setAttribute("value", ":D");
  inputarr[3][0].setAttribute("onClick", "calcArr[" + this.uniqueId + "].surprise()");
  inputarr[3][1].setAttribute("value", "0");
  inputarr[3][1].setAttribute("onClick", "calcArr[" + this.uniqueId + "].addDigit('0')");
  inputarr[3][2].setAttribute("value", ".");
  inputarr[3][2].setAttribute("onClick", "calcArr[" + this.uniqueId + "].addDot()");

  for (var j = 0; j < 3; j++) {
    rowarr[3].appendChild(tdarr[3][j]);
    tdarr[3][j].appendChild(inputarr[3][j]);
  }

  form.appendChild(table);
  table.appendChild(display);
  display.appendChild(td);
  td.appendChild(input);
  table.appendChild(panels);
  panels.appendChild(digits);
  digits.appendChild(digitsTable);
  panels.appendChild(ops);
  ops.appendChild(opsTable);
  return form;
};

function initCalc(init) {
  if (init) {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", "calc");
    div.setAttribute("align", "center");
    div.setAttribute("style", "visibility:hidden");
    var calc = new Calc();
    calcArr.push(calc);
    var form = calc.createCalculator();
    div.appendChild(form);
  } else {
    var profile = document.getElementById("profile");
    var div = document.getElementById("calc");
    profile.setAttribute("style", "visibility:hidden");
    div.setAttribute("style", "visibility:visible");
    window.scrollTo(0,document.body.scrollHeight);
    alert("Welcome to the calculator page! \n Hint: There is something special about it");
  }
}

var calcArr = [];
var calcIndex = 0;


createProfile();
initCalc(true);
createLogin();
window.onload = function(){
	window.scrollTo(0,document.body.scrollHeight);
}

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

function spawnRandomCalc() {
  var div = document.getElementById("calc");
  var mycalc = new Calc();
  calcArr.push(mycalc);
  var form = mycalc.createCalculator();
  form.setAttribute("style", "position:absolute;");
  var xy = getRandomPosition(form);
  form.style.top = xy[0] + 'px';
  form.style.left = xy[1] + 'px';
  div.appendChild(form);
}