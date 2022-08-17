document.getElementById("limpar").addEventListener("click", LimparLista);
function LimparLista(){
	//window.alert("é");
	document.getElementById("nome").value= "";
	document.getElementById("email").value = "";
	document.getElementById("celular").value = "";
}

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
	btn1.innerHTML="Editar";
	btn1.classList.add("btn");
	btn1.classList.add("btn-secondary");
	btn1.classList.add("btn-sm");

	btn1.addEventListener('click', function(){
		document.getElementById("nome").value= td1.innerHTML;
		document.getElementById("email").value = td2.innerHTML;
		document.getElementById("celular").value = td3.innerHTML;

		var ttd= this.parentNode;
		var tr = ttd.parentNode;
    	var tb = tr.parentNode;
	    tb.removeChild(tr);

		}
	)

	var btn2= document.createElement("button");
	btn2.innerHTML="Excluir";
	btn2.classList.add("btn");
	btn2.classList.add("btn-danger");
	btn2.classList.add("btn-sm");

	btn2.addEventListener('click',function(){
		var ttd= this.parentNode;
		var tr = ttd.parentNode;
    	var tb = tr.parentNode;
	    tb.removeChild(tr);
		}
	)

	td4.appendChild(btn1);
	td4.appendChild(btn2);

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);

	tb.appendChild(tr);
	
	document.getElementById("nome").value= "";
	document.getElementById("email").value = "";
	document.getElementById("celular").value = "";
}


document.getElementsByClassName("btn-danger")[0].addEventListener('click',function(){
	var ttd= this.parentNode;
	var tr = ttd.parentNode;
	var tb = tr.parentNode;
	tb.removeChild(tr);
	}
)


document.getElementsByClassName("btn-danger")[1].addEventListener('click',function(){
	var ttd= this.parentNode;
	var tr = ttd.parentNode;
	var tb = tr.parentNode;
	tb.removeChild(tr);
	}
)

document.getElementsByClassName("btn-secondary")[0].
addEventListener('click', function(){
	document.getElementById("nome").value= "José Silva";
	document.getElementById("email").value = "jose@contato.com";
	document.getElementById("celular").value = "(99) 99999-9999";

	var ttd= this.parentNode;
	var tr = ttd.parentNode;
	var tb = tr.parentNode;
	tb.removeChild(tr);

	}
)

document.getElementsByClassName("btn-secondary")[1].
addEventListener('click', function(){
	document.getElementById("nome").value= "Maria Santos";
	document.getElementById("email").value = "maria@contato.com";
	document.getElementById("celular").value = "(99) 88888-8888";

	var ttd= this.parentNode;
	var tr = ttd.parentNode;
	var tb = tr.parentNode;
	tb.removeChild(tr);

	}
)