function generateCpf() {
  var cpf = []
  var validation = 0
  for (var i = 10; i >= 2; i--) {
    var digit = Math.floor(Math.random() * 10)
    validation += i * digit
    cpf.push(digit)
  }
  cpf.push(validation % 11 < 2 ? 0 : 11 - (validation % 11))
  validation = cpf.reduce(function (a, c, i) {
    return a + ((11 - i) * c)
  }, 0)
  cpf.push(validation % 11 < 2 ? 0 : 11 - (validation % 11))
  return cpf.join('')
}

function cpfMask(cpf) {
  return cpf.split('').reduce(function (a, c, i) {
    a += c
    if ((i + 1) === 9) a += '-'
    else if (((i + 1) % 3) === 0) a += '.'
    return a
  }, '')
}