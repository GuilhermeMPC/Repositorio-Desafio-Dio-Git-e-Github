function calculadora() {
    const operacao = Number(prompt("Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)"))

    if (!operacao || operacao > 6){
        alert("Erro! Operação inválida!")
        calculadora()
    }

    else{
        var n1 = Number(prompt('Digite o primeiro número'))
        var n2 = Number(prompt('Digite o segundo número'))
        var res;

        if (!n1 || !n2) {
            alert("Erro! Parametros Invalidos!")
            calculadora()
        }

        else {
        
            if(operacao == 1) {
                soma();
            }

            else if(operacao == 2) {
                subtracao();
            }

            else if(operacao == 3) {
                multiplicacao();
            }

            else if(operacao == 4) {
                divreal();
            }

            else if(operacao == 5) {
                divinteira();
            }

            else if(operacao == 6) {
                potencia();
            }

            function soma() {
                res = n1 + n2;
                alert(`${n1} + ${n2} = ${res}`);
            }
    
            function subtracao() {
                res = n1 - n2;
                alert(`${n1} - ${n2} = ${res}`);
            }
    
            function multiplicacao() {
                res = n1 * n2;
                alert(`${n1} * ${n2} = ${res}`);
            }
    
            function divreal() {
                res = n1 / n2;
                alert(`${n1} / ${n2} = ${res}`);
            }
    
            function divinteira() {
                res = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é igual a ${res}`);
            }
    
            function potencia() {
               res = n1 ** n2;
                alert(`${n1} elevado à ${n2} é igual a ${res}`);
            }

            function novaFuncao () {
                opr = Number(prompt("Você gostaria de realizar uma nova operação?\n 1 - Sim\n 2 - Não"))
                if (opr == 1) {
                    calculadora()
                }
                else if (opr = 2) {
                   alert("Até mais!")
               }
                else {
                    alert("Número inválido, tente novamente")
                    novaFuncao()
                }
            }
            novaFuncao();
        }

    }
    
    
}

calculadora();