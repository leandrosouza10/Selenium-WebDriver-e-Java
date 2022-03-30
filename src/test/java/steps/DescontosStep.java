package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.HomePage;
import runner.RunCucumberTest;

public class DescontosStep extends RunCucumberTest {

    HomePage homePage = new HomePage(driver);

    @Dado("^que estou no site da qazando$")
    public void acessar_site_qazando(){
    homePage.acessarAplicacao();
    }

    @Quando("^eu prencho meu email$")
    public void eu_prencho_meu_email() throws InterruptedException  {
        homePage.scrollDown();
        homePage.preencheEmail();
    }

    @Quando("^clico no botão ganhar cupom$")
    public void clico_no_botão_ganhar_cupom() {
       homePage.clicarBotao();
    }

    @Entao("^é gerado um código de desconto$")
    public void é_gerado_um_código_de_desconto() {
        homePage.codigoDeDesconto();
    }

}
