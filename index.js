let salarioTotal = 0

function calculateSalary(salarioFixo, vendasEfetuadas){
  if (vendasEfetuadas > 1200) {
    return salarioTotal = salarioFixo + (0.03*1200) + (vendasEfetuadas-1200)*0.05
  } else {
    return salarioTotal = salarioFixo + (0.03*vendasEfetuadas)
  }
}

function cashMachine(withdrawValue){
  let notas200 = 0
  let notas100 = 0
  let notas50 = 0
  let notas20 = 0
  let notas10 = 0
  let value = withdrawValue
  
  if (withdrawValue % 10 == 0 && withdrawValue >= 10){
    while (value >= 10){
      if (value >= 200){
        notas200 = Math.ceil(value/200)
        value = value - (notas200*200)
      } else if (value >= 100){
        notas100 = Math.ceil(value/100)
        value = value - (notas100*100)
      } else if (value >= 50){
        notas50 = Math.ceil(value/50)
        value = value - (notas50*50)
      } else if (value >= 20){
        notas20 = Math.ceil(value/20)
        value = value - (notas20*20)
      } else if (value >= 10){
        notas10 = Math.ceil(value/10)
        value = value - (notas10*10)
      }
    }
    return `Notas sacadas: ${notas200} notas de R$200, ${notas100} notas de R$100, ${notas50} notas de R$50, ${notas20} notas de R$20, ${notas10} notas de R$10. Saldo atual: R$${salarioTotal - withdrawValue},00`
  } else {
    return `Insira um valor múltiplo de R$10,00 para que o saque possa ser realizado.`
  }
}

function calculateStock(estoqueAtual, estoqueMax, estoqueMin){
  let qtdMedia = (estoqueMax + estoqueMin)/2
  if (estoqueAtual >= qtdMedia){
    return `Não efetuar compra`
  } else {
    return `Efetuar compra`
  }
}

function calculateAge(birthYear, currentYear){
  let ageYears = currentYear - birthYear
  let ageMonths = ageYears*12
  let ageDays = ageMonths*30
  let ageWeeks = ageMonths*4

  return `A pessoa em questão possui ${ageYears} anos de idade. Possui ${ageMonths} meses de idade. Possui ${ageDays} dias de idade. E possui ${ageWeeks} semanas de idade.`
}

console.log(calculateAge(1994,2022))