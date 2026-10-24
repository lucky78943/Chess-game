

let p00 = document.getElementById("00");
let p01 = document.getElementById("01");
let p02 = document.getElementById("02");
let p03 = document.getElementById("03");
let p04 = document.getElementById("04");
let p05 = document.getElementById("05");
let p06 = document.getElementById("06");
let p07 = document.getElementById("07");
let p10 = document.getElementById("10");
let p11 = document.getElementById("11");
let p12 = document.getElementById("12");
let p13 = document.getElementById("13");
let p14 = document.getElementById("14");
let p15 = document.getElementById("15");
let p16 = document.getElementById("16");
let p17 = document.getElementById("17");
let p20 = document.getElementById("20");
let p21 = document.getElementById("21");
let p22 = document.getElementById("22");
let p23 = document.getElementById("23");
let p24 = document.getElementById("24");
let p25 = document.getElementById("25");
let p26 = document.getElementById("26");
let p27 = document.getElementById("27");
let p30 = document.getElementById("30");
let p31 = document.getElementById("31");
let p32 = document.getElementById("32");
let p33 = document.getElementById("33");
let p34 = document.getElementById("34");
let p35 = document.getElementById("35");
let p36 = document.getElementById("36");
let p37 = document.getElementById("37");
let p40 = document.getElementById("40");
let p41 = document.getElementById("41");
let p42 = document.getElementById("42");
let p43 = document.getElementById("43");
let p44 = document.getElementById("44");
let p45 = document.getElementById("45");
let p46 = document.getElementById("46");
let p47 = document.getElementById("47");
let p50 = document.getElementById("50");
let p51 = document.getElementById("51");
let p52 = document.getElementById("52");
let p53 = document.getElementById("53");
let p54 = document.getElementById("54");
let p55 = document.getElementById("55");
let p56 = document.getElementById("56");
let p57 = document.getElementById("57");
let p60 = document.getElementById("60");
let p61 = document.getElementById("61");
let p62 = document.getElementById("62");
let p63 = document.getElementById("63");
let p64 = document.getElementById("64");
let p65 = document.getElementById("65");
let p66 = document.getElementById("66");
let p67 = document.getElementById("67");
let p70 = document.getElementById("70");
let p71 = document.getElementById("71");
let p72 = document.getElementById("72");
let p73 = document.getElementById("73");
let p74 = document.getElementById("74");
let p75 = document.getElementById("75");
let p76 = document.getElementById("76");
let p77 = document.getElementById("77");


let pieces = [p00,p01,p02,p03,p04,p05,p06,p07,
  p10,p11,p12,p13,p14,p15,p16,p17,
  p20,p21,p22,p23,p24,p25,p26,p27,
  p30,p31,p32,p33,p34,p35,p36,p37,
  p40,p41,p42,p43,p44,p45,p46,p47,
  p50,p51,p52,p53,p54,p55,p56,p57,
  p60,p61,p62,p63,p64,p65,p66,p67,
  p70,p71,p72,p73,p74,p75,p76,p77
];

let r0 = [p00,p01,p02,p03,p04,p05,p06,p07];
let r1 = [p10,p11,p12,p13,p14,p15,p16,p17];
let r6 = [p60,p61,p62,p63,p64,p65,p66,p67]
let r7 = [p70,p71,p72,p73,p74,p75,p76,p77];

function startGame(){
  //added pawns in 2nd row
  r1.forEach((cell) => {
    console.log(cell);
    cell.style.backgroundImage = "url('images/pieces/black/bp.svg')";
  });

  //adding pawns in last 2nd row
  r6.forEach((cell) => {
    console.log(cell);
    cell.style.backgroundImage = "url('images/pieces/white/wp.svg')";
  });

  p00.style.backgroundImage = "url('images/pieces/black/br.svg')";
  p07.style.backgroundImage = "url('images/pieces/black/br.svg')";

  p01.style.backgroundImage = "url('images/pieces/black/bn.svg')";
  p06.style.backgroundImage = "url('images/pieces/black/bn.svg')";

  p02.style.backgroundImage = "url('images/pieces/black/bb.svg')";
  p05.style.backgroundImage = "url('images/pieces/black/bb.svg')";

  p03.style.backgroundImage = "url('images/pieces/black/bq.svg')";
  p04.style.backgroundImage = "url('images/pieces/black/bk.svg')";

  p70.style.backgroundImage = "url('images/pieces/white/wr.svg')";
  p77.style.backgroundImage = "url('images/pieces/white/wr.svg')";

  p71.style.backgroundImage = "url('images/pieces/white/wn.svg')";
  p76.style.backgroundImage = "url('images/pieces/white/wn.svg')";

  p72.style.backgroundImage = "url('images/pieces/white/wb.svg')";
  p75.style.backgroundImage = "url('images/pieces/white/wb.svg')";

  p73.style.backgroundImage = "url('images/pieces/white/wq.svg')";
  p74.style.backgroundImage = "url('images/pieces/white/wk.svg')";

}

function pieceMove(piece,postion){
  let pi = window.getComputedStyle(piece).backgroundImage;

  piece.style.backgroundImage = "";
  postion.style.backgroundImage = `${pi}`;
}

startGame();
pieceMove(p10,p20);