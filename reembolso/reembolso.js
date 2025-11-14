document.getElementById("form-reembolso").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = this.nome.value;
  const nascimento = this.nascimento.value;
  const banco = this.banco.value;
  const agencia = this.agencia.value;
  const conta = this.conta.value;
  const tipoConta = this.tipoConta.value;
  const email = this.email.value;
  const telefone = this.telefone.value;
  const cep = this.cep.value;
  const endereco = this.endereco.value;
  const assinatura = this.assinatura.value;

  const texto = `
—— SOLICITAÇÃO DE REEMBOLSO ——

✈︎Nome- ${nome}
✈︎Data de Nascimento: ${nascimento}

✈︎Banco- ${banco}
✈︎Agência- ${agencia}
✈︎Conta- ${conta}
✈︎Tipo de Conta- ${tipoConta}

✈︎Email- ${email}
✈︎Telefone- ${telefone}

✈︎CEP- ${cep}
✈︎Endereço- ${endereco}

✈︎Assinatura- ${assinatura}
`;

  document.getElementById("resposta").innerText = texto;

  this.reset();
});

// Botão copiar
document.getElementById("btn-copiar").addEventListener("click", () => {
  const txt = document.getElementById("resposta").innerText;
  navigator.clipboard.writeText(txt).then(() => {
    alert("Resultado copiado!");
  });
});
