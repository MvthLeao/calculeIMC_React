function Imc(peso, altura) {
    return peso / (altura * altura);
}

function Explicacao(IMC) {
    if (IMC < 17) {
        return "Seu peso está muito baixo."
    } else if (IMC < 18.49) {
        return "Você está abaixo do peso"
    } else if (IMC < 24.99) {
        return "Parabéns! você está no seu peso ideal"
    } else if (IMC < 29.99) {
        return "Você está um pouco acima do peso"
    } else if (IMC < 34,99) {
        return "Você está em Obesidade grau I"
    } else if (IMC < 39,99) {
        return "Você está em Obesidade grau II (SEVERA)"
    } else {
        return "Você está em Obesidade grau III (MÓRBIDA)"
    }
}