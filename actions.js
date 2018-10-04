document.getElementById('gen-cpf').addEventListener('click', function (event) {
  var cpf = generateCpf()
  document.getElementById('cpf-without-dot').value = cpf
  document.getElementById('cpf-with-dot').value = cpfMask(cpf)
})

document.getElementById('copy-cpf-without').addEventListener('click', function (event) {
  copyToClipboard('cpf-without-dot')
})
document.getElementById('copy-cpf-with').addEventListener('click', function (event) {
  copyToClipboard('cpf-with-dot')
})