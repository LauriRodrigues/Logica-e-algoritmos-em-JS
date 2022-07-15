const name = prompt("Digite o seu nome:")
const n1 = Number(prompt("Digite sua primeira nota:"))
const n2 = Number(prompt("Digite sua segunda nota:"))
const n3 = Number(prompt("Digite sua terceira nota:"))

const average = (n1 + n2 + n3) / 3

average = average.toFixed(2)

if (average >= 6) {
  alert("Parabéns " + name + "!" +
        "\nVocê passou no bimestre com média " + average + "!")
} else 
  alert("Sua média no bimestre foi " + average + "!" +
        "\nNão foi dessa vez " + name + ", mas ainda dá tempo de você dar o seu melhor para a prova de recuperação. Boa sorte!")
