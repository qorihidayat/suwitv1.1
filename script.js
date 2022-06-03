//membuat switjawa

let skorP = 0;
let skorB = 0;

function Play(){
//human choose
const human = prompt('Tentukan pilihan \n Gajah/Semut/Orang');
//BOT choose
let bot =Math.round( Math.random() * 6 + 1);
let hasil = "";


//sistem Bot
if(bot <= 2){
    bot = 'gajah';
}else if(bot <= 4 && bot > 2){
 bot = 'semut';
}else{
    bot = 'orang';
}

//sistem Game
if(human == bot){
    hasil += 'Seri';
}else if(human == "gajah"){
    if(bot == 'orang'){
        hasil += 'Menang';
    }else{
        hasil += 'Kalah';
    }
}else if(human == "semut"){
    if(bot == 'gajah'){
        hasil += 'Menang';
    }else{
        hasil += 'Kalah';
    }
}else if(human == "orang"){
    if(bot == 'semut'){
        hasil += 'Menang';
    }else{
        hasil += 'Kalah';
    }
}else{
    hasil += 'Error';
}


if(hasil == 'Menang'){
    skorP++;
}else if(hasil == 'Kalah'){
    skorB++;
}


alert(`${human} VS ${bot} = Kamu ${hasil} \n ${skorP} - ${skorB}`);






const repeat = confirm("main lagi?");
if(repeat){
    Play();
}
}

// console.log(human);
Play();
