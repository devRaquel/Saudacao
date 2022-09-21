// Tem que falar bom dia, boa tarde ou boa noite automaticamente//

let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
let saudacao;

//console.log(`Agora são ${hora} horas e ${minutos} minutos!`)
if (hora < 6) {
    //console.log('Boa madrugada!');
    saudacao= ("Boa madrugada")
}
else if (hora < 12) {
    //console.log('Bom dia!')
    saudacao= ("Bom dia")
}else if (hora <=18) {
    saudacao=('Boa tarde')
} else {
    saudacao=('Boa noite')
}
//Criar Alert pra perguntar o nome e para exibir a saudação//
let nome = prompt("Qual é o seu nome?")
function olaNome (nome) {
    console.log (saudacao + ", " + nome + "! Agora são: " + hora + " horas e "+ minutos+ " minutos!");
    window.alert(saudacao + ", " + nome + "! Agora são: " + hora + " horas e "+ minutos+ " minutos!");
}
olaNome(nome);
// SOS - como junta os dois pra exibir no mesmo alert? //