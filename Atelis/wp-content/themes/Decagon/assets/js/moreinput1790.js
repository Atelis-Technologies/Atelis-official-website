const addInput = function () {

  const con = document.getElementById("holding");

const engtext = document.getElementById('add-engineer-text');

  const insertinto = document.getElementById("inserthere");

  const innerdiv = document.createElement("div");
  innerdiv.setAttribute("id", "add-engineers-container");

  const insideinner = document.createElement("div");
  insideinner.setAttribute("class", "inner-holder");

  innerdiv.appendChild(insideinner);

  const innerinside = document.createElement("div");
  innerinside.setAttribute(
    "class",
    "half-length-container add-engineer-component"
  );
  insideinner.appendChild(innerinside);

  if (window.innerWidth < 1200) {
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "- Delete";
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("class", "delete-input");
    delBtn.setAttribute("style","background: rgb(247, 108, 108);width:100%; border: none;padding: 10px 0;color: white;margin:10px auto;font-size: 20px");

    innerdiv.appendChild(delBtn);
  } else {
    const delBtn = document.createElement("img");
    delBtn.setAttribute("class", "delete-input resizedelicon");

    delBtn.style.marginLeft = "5px";
    delBtn.style.marginTop = "-30px";
    delBtn.setAttribute(
      "src",
      MOREINPUTJSSCRIPT.filledTrashImgURL
    );
    innerdiv.appendChild(delBtn);
  }

  const divone = document.createElement("div");
  divone.setAttribute("class", "wpforms-field wpforms-field-text half-length");

  const divtwo = document.createElement("div");
  divtwo.setAttribute(
    "class",
    "wpforms-field wpforms-field-select half-length"
  );

  const labelone = document.createElement("label");
  labelone.setAttribute("class", "field-label");
  labelone.innerHTML = "How many engineers do you need?";
  const inputone = document.createElement("input");
  inputone.setAttribute("type", "number");
  inputone.setAttribute("id", "wpforms-161-field_10");
  inputone.setAttribute("class", "wpforms-field-large");
  inputone.setAttribute("placeholder", "Number of engineers");
  divone.appendChild(labelone);
  divone.appendChild(inputone);

  const labeltwo = document.createElement("label");
  labeltwo.setAttribute("class", "field-label");
  labeltwo.innerHTML = "What Language?";
  const inputtwo = document.createElement("select");
  inputtwo.setAttribute("type", "text");
  inputtwo.setAttribute("id", "wpforms-161-field_19");
  inputtwo.setAttribute("class", "wpforms-field-large");

  const optionone = document.createElement("option");
  optionone.setAttribute("value", "");
  optionone.setAttribute("selected", "selected");
  optionone.setAttribute("disabled", "disabled");
  optionone.appendChild(document.createTextNode("Choose your options"));
  inputtwo.appendChild(optionone);

  const optiontwo = document.createElement("option");
  optiontwo.setAttribute("value", "Node");
  optiontwo.appendChild(document.createTextNode("Node"));
  inputtwo.appendChild(optiontwo);

  const optionthree = document.createElement("option");
  optionthree.setAttribute("value", "Java");
  optionthree.appendChild(document.createTextNode("Java"));
  inputtwo.appendChild(optionthree);

  const optionfour = document.createElement("option");
  optionfour.setAttribute("value", ".Net");
  optionfour.appendChild(document.createTextNode(".Net"));
  inputtwo.appendChild(optionfour);

  const optionfive = document.createElement("option");
  optionfive.setAttribute("value", "Andriod");
  optionfive.appendChild(document.createTextNode("Andriod"));
  inputtwo.appendChild(optionfive);

  const optionsix = document.createElement("option");
  optionsix.setAttribute("value", "IOS");
  optionsix.appendChild(document.createTextNode("IOS"));
  inputtwo.appendChild(optionsix);

  const optionseven = document.createElement("option");
  optionseven.setAttribute("value", "Python");
  optionseven.appendChild(document.createTextNode("Python"));
  inputtwo.appendChild(optionseven);

  const optioneight = document.createElement("option");
  optioneight.setAttribute("value", "QA");
  optioneight.appendChild(document.createTextNode("QA"));
  inputtwo.appendChild(optioneight);

  const optionnine = document.createElement("option");
  optionnine.setAttribute("value", "Golang");
  optionnine.appendChild(document.createTextNode("Golang"));
  inputtwo.appendChild(optionnine);

  const optionten = document.createElement("option");
  optionten.setAttribute("value", "Flutter");
  optionten.appendChild(document.createTextNode("Flutter"));
  inputtwo.appendChild(optionten);

  const optioneleven = document.createElement("option");
  optioneleven.setAttribute("value", "Python");
  optioneleven.appendChild(document.createTextNode("Python"));
  inputtwo.appendChild(optioneleven);

  const optiontwelve = document.createElement("option");
  optiontwelve.setAttribute("value", "React Native");
  optiontwelve.appendChild(document.createTextNode("React Native"));
  inputtwo.appendChild(optiontwelve);


  divtwo.appendChild(labeltwo);
  divtwo.appendChild(inputtwo);

  innerinside.appendChild(divtwo);
  innerinside.appendChild(divone);

  
  con.insertBefore(innerdiv, engtext);
};

jQuery(document).ready(function ($) {
  $("#holding").on("click", ".delete-input", function () {
    var selectedComponent = $(this)
      .closest("#add-engineers-container")
      .remove();
  });
});
