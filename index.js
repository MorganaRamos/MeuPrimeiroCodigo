//PROGRAMA CALCULO DE IMC

<script>

function pulaLinha() { // função para organização do conteudo na tela
    
    document.write("<br><br>");

}

function mostra(frase) { // função para apresentação de informação ao usuário final
    
    document.write(frase);
    pulaLinha();
        
}

function calculaImc(altura, peso) {

    let imc = peso / (altura * altura);
    mostra("O IMC calculado é  de: " + imc); 
}

calculaImc(1.60, 80);

</script>