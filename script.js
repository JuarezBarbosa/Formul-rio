function validar() {
  // pegando o valor do nome pelos names
  var nome = document.getElementById("nome");
  var sobrenome = document.getElementById("sobrenome");
  var icpf = document.getElementById("icpf");
  var itelefone = document.getElementById("itelefone");
  var icelular = document.getElementById("icelular");
  var endereco = document.getElementById("endereco");

  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");
    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  else if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();
    return;
  }
  else if (icpf.value == "") {
    alert("CPF não informada");
    icpf.focus();
    return;
  }
  else if (itelefone.value == "") {
    alert("Telefone Fixo não informada");
    itelefone.focus();
    return;
  }
  else if (icelular.value == "") {
    alert("Telefone Fixo não informada");
    icelular.focus();
    return;
  }
  else if (endereco.value == "") {
    alert("Logradouro não informada");
    endereco.focus();
    return;
  }
  else if (num_casa.value == "") {
    alert("Numero da residencia não informada");
    num_casa.focus();
    return;
  }
  
  alert("Obrigado por ser cadastradar!");
  // envia o formulário
  //formulario.submit();
}

function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}

function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}

function leech(v){
  v=v.replace(/o/gi,"0")
  v=v.replace(/i/gi,"1")
  v=v.replace(/z/gi,"2")
  v=v.replace(/e/gi,"3")
  v=v.replace(/a/gi,"4")
  v=v.replace(/s/gi,"5")
  v=v.replace(/t/gi,"7")
  return v
}

function soNumeros(v){
  return v.replace(/\D/g,"")
}

function telefone(v){
  v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
  v=v.replace(/^(\d\d)(\d)/g,"($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d{4})(\d)/,"$1-$2")    //Coloca hífen entre o quarto e o quinto dígitos
  return v
}

function celular(v){
  v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
  v=v.replace(/^(\d\d)(\d)/g,"($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d{5})(\d)/,"$1-$2")    //Coloca hífen entre o quarto e o quinto dígitos
  return v
}

function cpf(v){
  v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
  v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
  v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                           //de novo (para o segundo bloco de números)
  v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
  return v
}

function rg(v){
  v=v.replace(/\D/g,"");                       //Remove tudo o que não é dígito
      v=v.replace(/(\d)(\d{7})$/,"$1.$2");    //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
      v=v.replace(/(\d)(\d{4})$/,"$1.$2");    //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
      v=v.replace(/(\d)(\d)$/,"$1-$2");       //Coloca o - antes do último dígito
  return v;
}
function cep(v){
  v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
  v=v.replace(/^(\d{5})(\d)/,"$1-$2")      //Esse é tão fácil que não merece explicações
  return v
}


$("#icep").blur(function(){
  var cep = this.value.replace(/[^0-9]/, "");
  // Validação do CEP; caso o CEP não possua 8 números, então cancela
  // a consulta e libera o campo para o usuario digitar o endereço
  if(cep.length != 8){
    return false;
  }
  
  // A url de pesquisa consiste no endereço do webservice + o cep
  var url = "https://viacep.com.br/ws/"+cep+"/json/";
  
  // Faz a pesquisa do CEP
  $.getJSON(url, function(dadosRetorno){
    try{
      // Preenche os campos de acordo com o retorno da pesquisa
      $("#endereco").val(dadosRetorno.logradouro);
      $("#bairro").val(dadosRetorno.bairro);
      $("#cidade").val(dadosRetorno.localidade);
      $("#uf").val(dadosRetorno.uf);
    }catch(ex){}
  });
});