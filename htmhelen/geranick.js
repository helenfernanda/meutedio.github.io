var y=0; 
var cheiabox=null; 
 function converte(n) {
if(n=='A') {n='�'}
if(n=='a') {n='@'}
if(n=='B' || n=='b') {n='�'}
if(n=='C') {n='�'}
if(n=='c') {n='�'}
if(n=='D' || n=='d') {n='�'}
if(n=='E') {n='�'}
if(n=='e') {n='�'}
if(n=='f') {n='�'}
if(n=='F') {n='|='}
if(n=='H' || n=='h') {n='|-|'}
if(n=='I') {n='�'} 
if(n=='i') {n='�'}
if(n=='j') {n='�'}
if(n=='k') {n='k'}
if(n=='L' || n=='l') {n='�'}
if(n=='m') {n='m'}
if(n=='M') {n='M'}
if(n=='N') {n='�'}
if(n=='n') {n='�'}
if(n=='o') {n='�'}
if(n=='O') {n='�'}
if(n=='p') {n='�'}
if(n=='P') {n='�'} 
if(n=='r') {n='�'}
if(n=='R') {n='�'}
if(n=='s') {n='�'}
if(n=='S') {n='$'}
if(n=='T') {n='�'}
if(n=='t') {n='�'}
if(n=='u') {n='�'}
if(n=='U') {n='�'}
if(n=='v') {n='|/'}
if(n=='V') {n='|/'}
if(n=='w') {n='w'}
if(n=='W') {n='w'}
if(n=='x') {n='�'}
if(n=='X') {n='%'}
if(n=='y' || n=='Y') {n='�'}
if(n=='Z') {n='�/_'}
if(n=='1') {n='�'}
if(n=='2') {n='�'}
if(n=='3') {n='�'}
if(n=='4') {n='4'}
if(n=='5') {n='5'}
if(n=='6') {n='6'}
if(n=='7') {n='7'}
if(n=='8') {n='8'}
if(n=='9') {n='9'}
if(n=='0') {n='0'}


else n=n
return n}
 function chgNick() {
 var output=''
 var enter=document.form1.entrada.value;
 if(enter!='') { 
 cheiabox=true;
 for(var i=0;i<enter.length+1;i++) {output+=converte(enter.charAt(i));}
 saida1=' '+output+' '
 }
 else if(enter=='' && document.form1.saida.value!='') {alert('Este � o segundo campo, voc� tem de preencher o primeiro.');cheiabox=false;}
 else {alert('Complete o primeiro campo.');cheiabox=false;} 
 }
 function mcpensadormostranick() { 
 if(cheiabox) {
 document.form1.saida.value=saida1.substring(0,y);
 y++;
 tempo=setTimeout('mcpensadormostranick()',100);
 if(y==saida1.length+1) {clearTimeout(tempo)}
 }
 }
 function execmcpensadoraltera() { 
 chgNick();
 if(cheiabox) {mcpensadormostranick()};
 }