function validarFormulario()
	{
		if (document.formContato.nome.value == "")
		{
			alert("Nome não preenchido");
			document.formContato.nome.focus();
			return false;
		}
		
		if (document.formContato.cidade.value == "")
		{
			alert("cidade não preenchida");
			document.formContato.cidade.focus();
			return false;
		}
		return true;
	}