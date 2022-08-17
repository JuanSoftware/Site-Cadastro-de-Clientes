document.getElementById("adicionar").addEventListener("click", adicionar);
function adicionar() {
   
	
    var nome = document.getElementById("nome").value;
    var email= document.getElementById("email").value;
    var celular = document.getElementById("celular").value;

	var tb = document.getElementById("tabela");

	var tr=document.createElement("tr");

	var td1= document.createElement("td");
	td1.innerHTML = nome;

	var td2= document.createElement("td");
	td2.innerHTML = email;

	var td3= document.createElement("td");
	td3.innerHTML = celular;

	var td4 = document.createElement("td");
	var btn1= document.createElement("button");

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tb.appendChild(tr);
	
	document.getElementById("nome").value= "";
	document.getElementById("email").value = "";
	document.getElementById("celular").value = "";
}
function removerElemento(elementoClicado) {
    elementoClicado.closest("tr").remove();
  }