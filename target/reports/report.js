$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language :pt"
    }
  ],
  "line": 3,
  "name": "Receber o cupom de desconto da qazando",
  "description": "Eu como usuário da qazando\r\nquero receber um cupom de desconto\r\npara comprar um curso com valor reduzido",
  "id": "receber-o-cupom-de-desconto-da-qazando",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Visualizar código de desconto",
  "description": "",
  "id": "receber-o-cupom-de-desconto-da-qazando;visualizar-código-de-desconto",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou no site da qazando",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "eu prencho meu email",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clico no botão ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "é gerado um código de desconto",
  "keyword": "Entao "
});
formatter.match({
  "location": "DescontosStep.acessar_site_qazando()"
});
formatter.result({
  "duration": 16555808000,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_prencho_meu_email()"
});
formatter.result({
  "duration": 3545236700,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.clico_no_botão_ganhar_cupom()"
});
formatter.result({
  "duration": 1306900500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.é_gerado_um_código_de_desconto()"
});
formatter.result({
  "duration": 90870100,
  "status": "passed"
});
});