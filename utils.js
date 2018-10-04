function copyToClipboard(idElement) {
  if (!idElement) return
  document.getElementById(idElement).select()
  document.execCommand('copy')
}