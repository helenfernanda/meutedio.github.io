function toogleMenu(currMenu) {
if (document.getElementById) {
thisMenu = document.getElementById(currMenu).style
if (thisMenu.display == "block") {
thisMenu.display= "none"
}
else {
thisMenu.display = "block"
}
return false
}
else {
return true
}
}