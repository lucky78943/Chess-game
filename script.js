let cells = [
      //  0   1   2   3   4   5   6   7
  /*0*/ [-4, -2, -3, -5, -6, -3, -2, -4],
  /*1*/ [ 0, -1, -1, -1, -1, -1, -1, -1],
  /*2*/ [ 0,  0,  0,  0,  2,  0,  0,  0],
  /*3*/ [-1,  0,  0,  0,  0,  0,  5,  0],
  /*4*/ [ 0,  0,  0,  0,  0,  0,  0,  0],
  /*5*/ [ 0,  0,  0,  0,  0,  0,  0,  0],
  /*6*/ [ 1,  1,  1,  1,  1,  1,  1,  1],
  /*7*/ [ 4,  0,  3,  5,  6,  3,  2,  4],
];



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


function startGame() {
  //added pawns in 2nd row
  r1.forEach((cell) => {
    cell.style.backgroundImage = "url('images/pieces/black/bp.svg')";
  });

  //adding pawns in last 2nd row
  r6.forEach((cell) => {
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


function pieceMove(piece, postion) {
  let pi = window.getComputedStyle(piece).backgroundImage;
  
  piece.style.backgroundImage = "";
  postion.style.backgroundImage = `${pi}`;
}

// pieceMove(p70, p33);

startGame();
pieceMove(p10, p30);
pieceMove(p71, p24);
pieceMove(p73, p36);

let prevx;
let prevy;
let turn=1;//1 white -1 black
let White_king_X=0;
let White_king_Y=4;
let Black_king_X=7;
let Black_king_Y=4;
//let flag
//check function
let pIndex=[];
let selected_piece=0;
let size=0;
let click=false;
function isCheck(x,y,piece){
  //up
  for(let i=x-1;i>=0;i--){
      if(piece>0){//white
        if(cells[i][y]==-4||cells[i][y]==-5){
          return true;//check by rook or queen
        }
      }else{//black
        if(cells[i][y]==4&&cells[i][y]==5){
          return true;//check by rook or queen
        }
      }
      if(cells[i][y]!=0){
          //no check sum 
          return false;
      }
    }
  //down

  for(let i=x+1;i=7;i++){
    if(piece>0){//white
        if(cells[i][y]==-4||cells[i][y]==-5){
          //check by rook or queen
          return true;
        }
      }else{//black
        if(cells[i][y]==4||cells[i][y]==5){
          //check by white rook or queen
        }
      }
      if(cells[i][y]!=0){
          //no check
          return false;
      }
  }
  //left 
  for(let j=y-1;j>=0;j--){
      if(piece>0){//white
        if(cells[x][j]==-4||cells[x][j]==-5){
          //check by black rook or queen
          return true;
        }
      }else{//black
        if(cells[x][j]==4||cells[x][j]==5){
          //check by white rook or queen
          return true;
        }
      }
      if(cells[y][j]!=0){
          //no check
          return false;
      }
  }
  //right
  for(let j=y+1;j<=7;j++){
      if(piece>0){//white
        if(cells[x][j]==-4||cells[x][j]==-5){
          //check by black or queen
          return true;
        }
      }else{//black
        if(cells[x][j]==-4||cells[x][j]==-5){
          //check by white rook or queen
          return true;
        }
      }
      if(cells[x][j]!=0){
          //no check
          return false;
      }
  }//right end

  //left upper diagonal
  // if(x)

}
//check function

//move function 
function move(piece,x,y){
  cells[prevx][prevy]=0;
  //make sure to put 0 zero at previous position of piece
  cells[x][y]=piece;
  //show [x][y] with piece picture [ bsdk lucky ]
  //convert prev
  //move-( prevx , prevy) (x,y)
}
//move function end

//<=============ROOK==========>
function option_show_rook(x,y,piece){
   
  //up
    for(let i=x-1;i>=0;i--){
      if(piece>0){//white
        if(cells[i][y]<=0){
          //show option [i][y]
          if(click){
            pIndex.push(i);
            pIndex.push(y);
            getSelector([i,y]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }else{//black
        if(cells[i][y]>=0){
          //show option
          if(click){
            pIndex.push(i);
            pIndex.push(y);
            getSelector([i,y]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }
      if(cells[i][y]!=0){
          //stop
          break;
      }
    }
  //down
  for(let i=x+1;i<=7;i++){
    if(piece>0){//white
        if(cells[i][y]<=0){
          //show option [i][y]
          if(click){
            pIndex.push(i);
            pIndex.push(y);
            getSelector([i,y]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }
      else{//black
        if(cells[i][y]>=0){
          //show option
          if(click){
            pIndex.push(i);
            pIndex.push(y);
            getSelector([i,y]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }
      if(cells[i][y]!=0){
          //stop
          break;
      }
  }
  

  //left
  for(let j=y-1;j>=0;j--){
      if(piece>0){//white
        if(cells[x][j]<=0){
          //show option [x][j]
          if(click){
            pIndex.push(x);
            pIndex.push(j);
            getSelector([x,j]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }else{//black
        if(cells[x][j]>=0){
          //show option
          if(click){
            pIndex.push(x);
            pIndex.push(j);
            getSelector([x,j]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }
      if(cells[x][j]!=0){
          //stop
          break;
      }
  }

  //right

  for(let j=y+1;j<=7;j++){
      if(piece>0){//white
        if(cells[x][j]<=0){
          //show option [i][y]
          if(click){
            pIndex.push(x);
            pIndex.push(j);
            getSelector([x,j]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }else{//black
        if(cells[x][j]>=0){
          //show option
          if(click){
            pIndex.push(x);
            pIndex.push(j);
            getSelector([x,j]).style.border = "8px solid #5C4033";
          }else{
            //remove border
          }
        }
      }
      if(cells[x][j]!=0){
          //stop
          break;
      }
  }

}//<---ROOK--->end




//<============KNIGHT============>

function option_show_knight(x,y,piece){
  //upleft
  if(x>=2&&y>0){
    if(piece>0){//white
      if(cells[x-2][y-1]<=0){
        //show option [x-2][y-1]
        if(click){
          pIndex.push(x-2);
          pIndex.push(y-1);
          getSelector([x-2,y-1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }else{//black
      if(cells[x-2][y-1]>=0){
        //show option [x-2][y-1]
        if(click){
          pIndex.push(x-2);
          pIndex.push(y-1);
          getSelector([x-2,y-1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  //upright
  if(x>=2&&y<7){
    if(piece>0){//white
      if(cells[x-2][y+1]<=0){
        //show option [x-2][y+1]
        if(click){
          pIndex.push(x-2);
          pIndex.push(y+1);
          getSelector([x-2,y+1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }  
    }else{//black
      if(cells[x-2][y+1]>=0){
        //show option
        if(click){
          pIndex.push(x-2);
          pIndex.push(y+1);
          getSelector([x-2,y+1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  //right up
  if(y<=5&&x>0){
    if(piece>0){//white
     if(cells[x-1][y+2]<=0){
      //show  option 
      if(click){
          pIndex.push(x-1);
          pIndex.push(y+2);
          getSelector([x-1,y+2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
     } 
    }else{//black
      if(cells[x-1][y+2]>=0){
        //show option[x-1][y+2]
        if(click){
          pIndex.push(x-1);
          pIndex.push(y+2);
          getSelector([x-1,y+2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  //right down
  if(y<=5&&x<7){
    if(piece>0){//white
      if(cells[x+1][y+2]<=0){
        //show option
        if(click){
          pIndex.push(x+1);
          pIndex.push(y+2);
          getSelector([x+1,y+2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }else{//black
      if(cells[x+1][y+2]>=0){
        //show option
        if(click){
          pIndex.push(x+1);
          pIndex.push(y+2);
          getSelector([x+1,y+2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  //left up
  if(y>=2&&x>0){
    if(piece>0){//white
     if(cells[x-1][y-2]<=0){
      //show option
      if(click){
          pIndex.push(x-1);
          pIndex.push(y-2);
          getSelector([x-1,y-2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
     } 
    }else{//black
      if(cells[x-1][y-2]>=0){
        //show option
        if(click){
          pIndex.push(x-1);
          pIndex.push(y-2);
          getSelector([x-1,y-2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  //left down
  if(y>=2&&x<7){
    if(piece>0){//white
     if(cells[x+1][y-2]<=0){
      //show option
      if(click){
          pIndex.push(x+1);
          pIndex.push(y-2);
          getSelector([x+1,y-2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
     } 
    }else{//black
      if(cells[x+1][y-2]>=0){
        //show option
        if(click){
          pIndex.push(x+1);
          pIndex.push(y-2);
          getSelector([x+1,y-2]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  //down left
  if(x<=5&&y>0){
    if(piece>0){//white
     if(cells[x+2][y-1]<=0){
      //show option
      if(click){
          pIndex.push(x+2);
          pIndex.push(y-1);
          getSelector([x+2,y-1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
     } 
    }
    else{//black
      if(cells[x+2][y-1]>=0){
        //show option
        if(click){
          pIndex.push(x+2);
          pIndex.push(y-1);
          getSelector([x+2,y-1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  //down right
  if(x<=5&&y<7){
    if(piece>0){//white
     if(cells[x+2][y+1]<=0){
      //show option

      if(click){
          pIndex.push(x+2);
          pIndex.push(y+1);
          getSelector([x+2,y+1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
     } 
     }
    else{//black
      console.log("dr");
      if(cells[x+2][y+1]>=0){
        //show option
        if(click){
          pIndex.push(x+2);
          pIndex.push(y+1);
          getSelector([x-2,y-1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
}
//<===========KNIGHT=============>END


//let flag
//<============PAWN==============>
function option_show_pawn(x, y, piece) {
  if (piece == 1) {
    //white(+1)
    //up
    if (x > 0 && x <= 6) {
      if (cells[x - 1][y] == 0) {
        //empty
        //show option[x-1][y]
        if(click){
          pIndex.push(x-1);
          pIndex.push(y);
          getSelector([x-1,y]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
        if (x == 6 && cells[x - 2][y] == 0) {
          //empyt (two front move)
          //show option[x-2][y]
          if(click){
          pIndex.push(x-2);
          pIndex.push(y);
          getSelector([x-2,y]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
        }
      }
    }
    //left diagonal
    if(x>0&&x<=6&&y>0&&y<=7){
      if(cells[x-1][y-1]<0){//black(-ve)
        //show option[x-1][y-1]
        if(click){
          pIndex.push(x-1);
          pIndex.push(y-1);
          getSelector([x-1,y-1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
    //right diagonal
    if(x>0&&x<=6&&y>=0&&y<7){
      if(cells[x-1][y+1]<0){//black (-ve)
        //show option[x-1][y+1]
        if(click){
          pIndex.push(x-1);
          pIndex.push(y+1);
          getSelector([x-1,y+1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
      }
    }
  }
  else{//black pawn(-1)
    //down
    if(x<7&&x>=1){
      if(cells[x+1][y]==0){//empty
        //show option[x+1][y]
        if(click){
          pIndex.push(x+1);
          pIndex.push(y);
          getSelector([x+1,y]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
        if (x == 1 && cells[x + 2][y] == 0) {
          //empty (two front move for black)
          //show option[x+2][y]
          if(click){
          pIndex.push(x+2);
          pIndex.push(y);
          getSelector([x+2,y]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
        }
      }
      //left lower diagonal
      if (y > 0 && y <= 7 && x >= 1 && x < 7) {
        if (cells[x + 1][y - 1] > 0) {
          //white(+ve)
          //show option[x+1][y-1]
          if(click){
          pIndex.push(x+1);
          pIndex.push(y-1);
          getSelector([x+1,y-1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
        }
      }
      //right lower diagonal
      if (x >= 1 && x < 7 && y >= 0 && y < 7) {
        if (cells[x + 1][y + 1] > 0) {
          //white(+ve)
          //show option[x+1][y+1]
          if(click){
          pIndex.push(x+1);
          pIndex.push(y+1);
          getSelector([x+1,y+1]).style.border = "8px solid #5C4033";
        }else{
          //remove border
        }
        }
      }
    }
  }
}
  
//option_show_pawn end



//king
//
//option show beshoop start
//<==============BISHOP=============>
  function option_show_beshoop(x,y,piece){
  let tempx=x;
  let tempy=y;
  if(piece == 1){
      if(cells[x-1][y-1] == 0){ //working
        while(y!=0){
          x--;
          y--;
          // if(pieceColor(indexToPieceName(x,y)) == 1) break;
          // console.log(x,y);
          if(cells[x][y] <=0 ){
            if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            } 
          }
          if(cells[x][y]!=0) break;
        }
      }
      x=tempx;
      y=tempy;
      if(cells[x-1][y+1] == 0){ //working
        while(x!=0){
          x--;
          y++;
          if(cells[x][y] <=0 ){
            if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            } 
         }
         if(cells[x][y]!=0) break;
          // if(pieceColor(indexToPieceName(x,y)) == 1) break;
        }
      }
      x=tempx;
      y=tempy;
      if(cells[x+1][y-1] == 0){
        while(y!=0){
          x++;
          y--;
          // if(pieceColor(indexToPieceName(x,y)) == 1) break;
          if(cells[x][y] <=0 ){

           if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            } 
         }
          if(cells[x][y]!=0) break;
        }
      }

      x=tempx;
      y=tempy;
      if(cells[x+1][y+1] == 0){
        while(x!=7){
          x++;
          y++;
          // if(pieceColor(indexToPieceName(x,y)) == 1) break;
            if(cells[x][y] <=0 ){

           if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
         }
          if(cells[x][y]!=0) break;
        }
      }
   }
   else{
      if(cells[x-1][y-1] == 0){ //upper left diagonal
        while(y!=0){
          x--;
          y--;
          // if(pieceColor(indexToPieceName(x,y)) == -1) break;
            if(cells[x][y] >=0 ){

           if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            } 
         }
          if(cells[x][y]!=0) break;
        }
      }
      x=tempx;
      y=tempy;
      if(cells[x-1][y+1] == 0){ //upper right diagonal
        while(x!=0){
          // getSelector([x,y]).style.border = "8px solid #5C4033";
          x--;
          y++;
          if(cells[x][y] >=0 ){

           if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            } 
         }
          if(cells[x][y]!=0) break;
          // if(pieceColor(indexToPieceName(x,y)) == -1) break;
        }
      }
      x=tempx;
      y=tempy;
      if(cells[x+1][y-1] == 0){ //down left diagonal
        while(y!=0){
          x++;
          y--;
          // if(pieceColor(indexToPieceName(x,y)) == -1) break;
          if(cells[x][y] >=0 ){
           if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            } 
         }
          if(cells[x][y]!=0) break;
        }
      }
      x=tempx;
      y=tempy;
      if(cells[x+1][y+1] == 0){
        while(x!=7){
          x++;
          y++;
          // if(pieceColor(indexToPieceName(x,y)) == -1) break;
            if(cells[x][y] >=0 ){

            if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            } 
           }
          if(cells[x][y]!=0) break;
        }
      }
   }
}
//<==============BISHOP=============>end
//bbb

function option_show_queen(x, y, piece) {

  let tempx = x;
  let tempy = y;
  // console.log(x,y);

  //white queen
  if (piece == 1) {
    if (cells[x][y - 1] <= 0) { //left
      while (y != 0) {
        y--;
        if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }

        if (cells[x][y] != 0) break;
      }
    }


    x = tempx;
    y = tempy;
    if (cells[x][y + 1] <= 0) { //right
      while (y != 7) {
        y++;
        if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }


    x = tempx;
    y = tempy;
    if (cells[x - 1][y - 1] <= 0) {//left upper diagonal
      while (y != 0) {
        x--;
        y--;
       if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }


     x = tempx;
    y = tempy;
    if (cells[x + 1][y - 1] <= 0) {//left lower diagonal
      while (y != 0) {
        x++;
        y--;
       if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }


    x = tempx;
    y = tempy;
    if (cells[x - 1][y] <= 0) { // upper
      while (x != 0) {
        x--;
       if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }


    x = tempx;
    y = tempy;
    if (cells[x - 1][y + 1] <= 0) { //upper right diagonal
      while (x != 0) {
        x--;
        y++;
        if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0){ break;}
      }
    }


    x = tempx;
    y = tempy;
    if (cells[x + 1][y + 1] <= 0) { //lower right diagonal
      while (x != 0) {
        x++;
        y++;
        if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0){ break;}
      }
    }


    x = tempx;
    y = tempy;
    if (cells[x + 1][y] <= 0) { //down
      while (x != 7) {
        x++;
        if(cells[x][y]<=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
  } 

  //black queen
  else {
    if (cells[x - 1][y] >= 0) { //up
      console.log("up");
      while (x != 0) {
        x--;
        console.log(x,y);
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x - 1][y - 1] >= 0) { //left upper diagonal
      console.log("left upper diagonal");
      while (x != 0) {
        x--;
        y--;
        console.log(x,y);
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x - 1][y + 1] >= 0) { //upper right diagonal
      while (x != 0) {
        x--;
        y++;
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x][y - 1] >= 0) { //left
      while (y != 0) {
        y--;
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    // console.log(x, y);
    if (cells[x][y + 1] >= 0) { //right
      // console.log(x, y);
      while (y != 7) {
        y++;
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x + 1][y] >= 0 ) { //down
      while (x != 7) {
        x++;
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x + 1][y - 1] >= 0) { //left lower diagonal
      while (y != 0) {
        x++;
        y--;
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x + 1][y + 1] >= 0) { //right lower diagonal
      while (y != 7) {
        x++;
        y++;
        if(cells[x][y]>=0){
          if(click){
              pIndex.push(x);
              pIndex.push(y);
              getSelector([x,y]).style.border = "8px solid #5C4033";
            }else{
              //remove border
            }
        }
        if (cells[x][y] != 0) break;
      }
    }
  }
}
//option show bishop end
// function startGame() {
//   //added pawns in 2nd row
//   r1.forEach((cell) => {
//     console.log(cell);
//     cell.style.backgroundImage = "url('images/pieces/black/bp.svg')";
//   });
// }

//index for piece
function getSelector([row, col]) {
  return eval(`p${row}${col}`);
}

function indexToArray(i){
  let ai = [];
  ai.unshift(i%10);
  i=Math.floor(i/10);
  ai.unshift(i%10);
  return ai;
}

function getPieceName(x,y){
  let pi = window.getComputedStyle(getSelector([x, y])).backgroundImage;
  console.log(pi);
  let pieceName = pi.substring(58, 60);
  return pieceName;
}

function BorW(pn){
   let piece;
    if (pn[0] == "w") {
      piece = 1;
    } else if (pn[0] == "b") {
      piece = -1;
    }
    return piece;
}


//<=================Correct choice or not=================>

// function isRight_Choice(i,j){
//   for(let p)
// }
//
//<===========MOVE===========>
  function move(p,i,j){
    cells[i][j]=p;
    //pij me image of p( selected piece )
    pIndex
  }

pieces.forEach((p) => {
  p.addEventListener("click", function () {

    let arrIdx = indexToArray(Number(p.id));
    
    let pieceName = getPieceName(arrIdx[0],arrIdx[1]);

    let piece  = BorW(pieceName);

    //
    /*
    if(click){//
    //let i,j = index of div
    //path check isRight_Choice()
    for(let p=0;p<size;p+=2){
    if(i==p&&j==p+1){
    cells[prevx][prevy]=0;//image daal
    move(selected_piece,i,j);
    }
    }
    }
    */
    //
    if (pieceName[1] == "p") {
      option_show_pawn(arrIdx[0], arrIdx[1], piece);
    } 
    else if (pieceName[1] == "r") {
      option_show_rook(arrIdx[0], arrIdx[1], piece);
    } 
    else if (pieceName[1] == "b") {
      option_show_beshoop(arrIdx[0], arrIdx[1], piece);
    } 
    else if (pieceName[1] == "q") {
      option_show_queen(arrIdx[0], arrIdx[1], piece);
    } 
    else if (pieceName[1] == "n") {
      option_show_knight(arrIdx[0],arrIdx[1],piece);
    }
  });
});




function showMoves(pos) {
  let pi = window.getComputedStyle(getSelector(pos)).backgroundImage;
  let pieceName = pi.substring(58, 60);

  if (pieceName == "bp") {
    // p20.classList.add("moveset");
    if ((pos[0] = 1)) {
      pos[0] += 1;
      getSelector(pos).style.border = "8px solid #5C4033";
    }
    pos[0] += 1;
    console.log(pos);
    getSelector(pos).style.border = "8px solid #5C4033";
  }
}

// pieceMove(p03, p54);
// pieceMove(p73, p24);
// pieceMove(p10, p30);
// showMoves([1,2]);
// console.log(getSelector([1,2]))