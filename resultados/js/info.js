
function check(){
		// Dados do criminoso
		var nome = "Andrew";
		var sobrenome = "White";
		var nasc = "29/10/1952";
		var dt_det = "05/08/1992";
		var num_pris = "6484";
		var num_cel = "45";

		// Dados fornecidos pelo usuario
		var nome_input = document.getElementById('name').value;
		var sobrenome_input = document.getElementById('sobrenome').value;
		var data_nascimento = document.getElementById('dt_nasc').value;
		var data_prisao = document.getElementById('dt_pris').value;
		var num_cel_input = document.getElementById('num_cel').value;
		var reg = document.getElementById('reg').value;

		if(nome.toLowerCase() == nome_input.toLowerCase()
			&& sobrenome.toLowerCase() == sobrenome_input.toLowerCase()
			&& data_nascimento == nasc
			&& dt_det == data_prisao
			&& num_pris == reg
			&& num_cel == num_cel_input
			)
		{
			window.location.assign("resultados/ficha.html");
		}
		else
		{
			window.location.assign("resultados/not_found.html");
		}
	}