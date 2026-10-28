let cells = [
  //  0   1   2   3   4   5   6   7
  /*0*/ [-4, -2, -3, -5, -6, -3, -2, -4], //4 rook
  /*1*/ [-1, -1, -1, -1, -1, -1, -1, -1], //2 knight
  /*2*/ [0, 0, 0, 0, 0, 0, 0, 0], //3 bishop
  /*3*/ [0, 0, 0, 0, 0, 0, 0, 0], // 5 queen
  /*4*/ [0, 0, 0, 0, 0, 0, 0, 0], //6 king
  /*5*/ [0, 0, 0, 0, 0, 0, 0, 0], //1 pawn
  /*6*/ [1, 1, 1, 1, 1, 1, 1, 1],
  /*7*/ [4, 2, 3, 5, 6, 3, 2, 4],
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

// console.log(typeof Number(p00.id));
let pieces = [
  p00,
  p01,
  p02,
  p03,
  p04,
  p05,
  p06,
  p07,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p30,
  p31,
  p32,
  p33,
  p34,
  p35,
  p36,
  p37,
  p40,
  p41,
  p42,
  p43,
  p44,
  p45,
  p46,
  p47,
  p50,
  p51,
  p52,
  p53,
  p54,
  p55,
  p56,
  p57,
  p60,
  p61,
  p62,
  p63,
  p64,
  p65,
  p66,
  p67,
  p70,
  p71,
  p72,
  p73,
  p74,
  p75,
  p76,
  p77,
];

let r0 = [p00, p01, p02, p03, p04, p05, p06, p07];
let r1 = [p10, p11, p12, p13, p14, p15, p16, p17];
let r6 = [p60, p61, p62, p63, p64, p65, p66, p67];
let r7 = [p70, p71, p72, p73, p74, p75, p76, p77];

let pieceValue = {
  wp: 1,
  wn: 2,
  wb: 3,
  wr: 4,
  wq: 5,
  wk: 6,
  bp: -1,
  bn: -2,
  bb: -3,
  br: -4,
  bq: -5,
  bk: -6,
};

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

function indexToArray(i) {
  let ai = [];
  ai.unshift(i % 10);
  i = Math.floor(i / 10);
  ai.unshift(i % 10);
  return ai;
}

function getPieceName(x, y) {
  let pi = window.getComputedStyle(getSelector([x, y])).backgroundImage;
  console.log(pi);
  let pieceName = pi.substring(47, 49);
  console.log(pieceName);
  return pieceName;
}

function pieceToValue(p) {
  switch (p) {
    case "wp":
      return 1;
    case "wr":
      return 4;
    case "wb":
      return 3;
    case "wq":
      return 5;
    case "wn":
      return 2;
    case "wk":
      return 6;
    case "bp":
      return -1;
    case "br":
      return -4;
    case "bb":
      return -3;
    case "bq":
      return -5;
    case "bn":
      return -2;
    case "bk":
      return -6;
  }
}

function pieceMove(piecePos, postion) {
  let originalIdx = indexToArray(Number(piecePos.id));
  let newIdx = indexToArray(Number(postion.id));

  let piece = getPieceName(originalIdx[0], originalIdx[1]);
  let pi = window.getComputedStyle(piecePos).backgroundImage;

  piecePos.style.backgroundImage = "";
  cells[originalIdx[0]][originalIdx[1]] = 0;

  postion.style.backgroundImage = `${pi}`;
  cells[newIdx[0]][newIdx[1]] = pieceToValue(piece);
}

startGame();
pieceMove(p11, p30);
pieceMove(p71, p22);
// pieceMove(getSelector([pi,pj]),p);

let prev_piece_name;
let curr_piece = 0;
let select = false;
let kill = 0;
let move = 0;
let pi = -1;
let pj = -1;
let turn = 1; //1 white -1 black
let White_king_X = 0;
let White_king_Y = 4;
let Black_king_X = 7;
let Black_king_Y = 4;
let prev_value=0;
//let flag
//check function
let pIndex = [];
let selected_piece = 0;
let size = 0;
let click = false;
function isCheck(x, y, piece) {
  //up
  for (let i = x - 1; i >= 0; i--) {
    if (piece > 0) {
      //white
      if (cells[i][y] == -4 || cells[i][y] == -5) {
        return true; //check by rook or queen
      }
    } else {
      //black
      if (cells[i][y] == 4 && cells[i][y] == 5) {
        return true; //check by rook or queen
      }
    }
    if (cells[i][y] != 0) {
      //no check sum
      return false;
    }
  }
  //down

  for (let i = x + 1; (i = 7); i++) {
    if (piece > 0) {
      //white
      if (cells[i][y] == -4 || cells[i][y] == -5) {
        //check by rook or queen
        return true;
      }
    } else {
      //black
      if (cells[i][y] == 4 || cells[i][y] == 5) {
        //check by white rook or queen
      }
    }
    if (cells[i][y] != 0) {
      //no check
      return false;
    }
  }
  //left
  for (let j = y - 1; j >= 0; j--) {
    if (piece > 0) {
      //white
      if (cells[x][j] == -4 || cells[x][j] == -5) {
        //check by black rook or queen
        return true;
      }
    } else {
      //black
      if (cells[x][j] == 4 || cells[x][j] == 5) {
        //check by white rook or queen
        return true;
      }
    }
    if (cells[y][j] != 0) {
      //no check
      return false;
    }
  }
  //right
  for (let j = y + 1; j <= 7; j++) {
    if (piece > 0) {
      //white
      if (cells[x][j] == -4 || cells[x][j] == -5) {
        //check by black or queen
        return true;
      }
    } else {
      //black
      if (cells[x][j] == -4 || cells[x][j] == -5) {
        //check by white rook or queen
        return true;
      }
    }
    if (cells[x][j] != 0) {
      //no check
      return false;
    }
  } //right end

  //left upper diagonal
  // if(x)
}
//check function

//move function
// function move(piece,x,y){
//   cells[prevx][prevy]=0;
//   //make sure to put 0 zero at previous position of piece
//   cells[x][y]=piece;
//   //show [x][y] with piece picture [ bsdk lucky ]
//   //convert prev
//   //move-( prevx , prevy) (x,y)
// }
//move function end

//<=============ROOK==========>
function option_show_rook(x, y, piece) {
  //up
  for (let i = x - 1; i >= 0; i--) {
    if (piece > 0) {
      //white
      if (cells[i][y] <= 0) {
        //show option [i][y]
        if (click) {
          pIndex.push(i);
          pIndex.push(y);
          getSelector([i, y]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([i, y]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[i][y] >= 0) {
        //show option
        if (click) {
          pIndex.push(i);
          pIndex.push(y);
          getSelector([i, y]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([i, y]).style.border = "1px solid black";
        }
      }
    }
    if (cells[i][y] != 0) {
      //stop
      break;
    }
  }
  //down
  for (let i = x + 1; i <= 7; i++) {
    if (piece > 0) {
      //white
      if (cells[i][y] <= 0) {
        //show option [i][y]
        if (click) {
          pIndex.push(i);
          pIndex.push(y);
          getSelector([i, y]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([i, y]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[i][y] >= 0) {
        //show option
        if (click) {
          pIndex.push(i);
          pIndex.push(y);
          getSelector([i, y]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([i, y]).style.border = "1px solid black";
        }
      }
    }
    if (cells[i][y] != 0) {
      //stop
      break;
    }
  }

  //left
  for (let j = y - 1; j >= 0; j--) {
    if (piece > 0) {
      //white
      if (cells[x][j] <= 0) {
        //show option [x][j]
        if (click) {
          pIndex.push(x);
          pIndex.push(j);
          getSelector([x, j]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x, j]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x][j] >= 0) {
        //show option
        if (click) {
          pIndex.push(x);
          pIndex.push(j);
          getSelector([x, j]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x, j]).style.border = "1px solid black";
        }
      }
    }
    if (cells[x][j] != 0) {
      //stop
      break;
    }
  }

  //right

  for (let j = y + 1; j <= 7; j++) {
    if (piece > 0) {
      //white
      if (cells[x][j] <= 0) {
        //show option [i][y]
        if (click) {
          pIndex.push(x);
          pIndex.push(j);
          getSelector([x, j]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x, j]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x][j] >= 0) {
        //show option
        if (click) {
          pIndex.push(x);
          pIndex.push(j);
          getSelector([x, j]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x, j]).style.border = "1px solid black";
        }
      }
    }
    if (cells[x][j] != 0) {
      //stop
      break;
    }
  }
} //<---ROOK--->end

//<============KNIGHT============>
function option_show_knight(x, y, piece) {
  //upleft
  // console.log(click);
  if (x >= 2 && y > 0) {
    if (piece > 0) {
      //white
      if (cells[x - 2][y - 1] <= 0) {
        //show option [x-2][y-1]
        if (click) {
          pIndex.push(x - 2);
          pIndex.push(y - 1);
          getSelector([x - 2, y - 1]).style.border = "8px solid #5C4033";
        } else {
          getSelector([x - 2, y - 1]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x - 2][y - 1] >= 0) {
        //show option [x-2][y-1]
        if (click) {
          // console.log("gg");
          pIndex.push(x - 2);
          pIndex.push(y - 1);
          getSelector([x - 2, y - 1]).style.border = "8px solid #5C4033";
        } else {
          // console.log("ejje");
          getSelector([x - 2, y - 1]).style.border = "1px solid black";
        }
      }
    }
  }
  //upright
  if (x >= 2 && y < 7) {
    if (piece > 0) {
      //white
      if (cells[x - 2][y + 1] <= 0) {
        //show option [x-2][y+1]
        if (click) {
          pIndex.push(x - 2);
          console.log("ee");
          pIndex.push(y + 1);
          getSelector([x - 2, y + 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          console.log("ee");
          getSelector([x - 2, y + 1]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x - 2][y + 1] >= 0) {
        //show option
        if (click) {
          pIndex.push(x - 2);
          pIndex.push(y + 1);
          getSelector([x - 2, y + 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 2, y + 1]).style.border = "1px solid black";
        }
      }
    }
  }
  //right up
  if (y <= 5 && x > 0) {
    if (piece > 0) {
      //white
      if (cells[x - 1][y + 2] <= 0) {
        //show  option
        if (click) {
          pIndex.push(x - 1);
          pIndex.push(y + 2);
          getSelector([x - 1, y + 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 1, y + 2]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x - 1][y + 2] >= 0) {
        //show option[x-1][y+2]
        if (click) {
          pIndex.push(x - 1);
          pIndex.push(y + 2);
          getSelector([x - 1, y + 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 1, y + 2]).style.border = "1px solid black";
        }
      }
    }
  }
  //right down
  if (y <= 5 && x < 7) {
    if (piece > 0) {
      //white
      if (cells[x + 1][y + 2] <= 0) {
        //show option
        if (click) {
          pIndex.push(x + 1);
          pIndex.push(y + 2);
          getSelector([x + 1, y + 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 1, y + 2]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x + 1][y + 2] >= 0) {
        //show option
        if (click) {
          pIndex.push(x + 1);
          pIndex.push(y + 2);
          getSelector([x + 1, y + 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 1, y + 2]).style.border = "1px solid black";
        }
      }
    }
  }
  //left up
  if (y >= 2 && x > 0) {
    if (piece > 0) {
      //white
      if (cells[x - 1][y - 2] <= 0) {
        //show option
        if (click) {
          pIndex.push(x - 1);
          pIndex.push(y - 2);
          getSelector([x - 1, y - 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 1, y - 2]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x - 1][y - 2] >= 0) {
        //show option
        if (click) {
          pIndex.push(x - 1);
          pIndex.push(y - 2);
          getSelector([x - 1, y - 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 1, y - 2]).style.border = "1px solid black";
        }
      }
    }
  }
  //left down
  if (y >= 2 && x < 7) {
    if (piece > 0) {
      //white
      if (cells[x + 1][y - 2] <= 0) {
        //show option
        if (click) {
          pIndex.push(x + 1);
          pIndex.push(y - 2);
          getSelector([x + 1, y - 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 1, y - 2]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x + 1][y - 2] >= 0) {
        //show option
        if (click) {
          pIndex.push(x + 1);
          pIndex.push(y - 2);
          getSelector([x + 1, y - 2]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 1, y - 2]).style.border = "1px solid black";
        }
      }
    }
  }
  //down left
  if (x <= 5 && y > 0) {
    if (piece > 0) {
      //white
      if (cells[x + 2][y - 1] <= 0) {
        //show option
        if (click) {
          pIndex.push(x + 2);
          pIndex.push(y - 1);
          getSelector([x + 2, y - 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 2, y - 1]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      if (cells[x + 2][y - 1] >= 0) {
        //show option
        if (click) {
          pIndex.push(x + 2);
          pIndex.push(y - 1);
          getSelector([x + 2, y - 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 2, y - 1]).style.border = "1px solid black";
        }
      }
    }
  }
  //down right
  if (x <= 5 && y < 7) {
    if (piece > 0) {
      //white
      if (cells[x + 2][y + 1] <= 0) {
        //show option

        if (click) {
          pIndex.push(x + 2);
          pIndex.push(y + 1);
          getSelector([x + 2, y + 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 2, y + 1]).style.border = "1px solid black";
        }
      }
    } else {
      //black
      // console.log("dr");
      if (cells[x + 2][y + 1] >= 0) {
        //show option
        if (click) {
          pIndex.push(x + 2);
          pIndex.push(y + 1);
          getSelector([x + 2, y + 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 2, y + 1]).style.border = "1px solid black";
        }
      }
    }
  }
}
//<===========KNIGHT=============>END

//<============PAWN==============>
function option_show_pawn(x, y, piece) {
  // console.log("inside show pawn");
  if (piece == 1) {
    //white(+1)
    //up
    if (x > 0 && x <= 6) {
      if (cells[x - 1][y] == 0) {
        //empty
        //show option[x-1][y]
        if (click) {
          pIndex.push(x - 1);
          pIndex.push(y);
          getSelector([x - 1, y]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 1, y]).style.border = "1px solid black";
        }
        if (x == 6 && cells[x - 2][y] == 0) {
          //empyt (two front move)
          //show option[x-2][y]
          if (click) {
            pIndex.push(x - 2);
            pIndex.push(y);
            getSelector([x - 2, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x - 2, y]).style.border = "1px solid black";
          }
        }
      }
    }
    //left diagonal
    if (x > 0 && x <= 6 && y > 0 && y <= 7) {
      if (cells[x - 1][y - 1] < 0) {
        //black(-ve)
        //show option[x-1][y-1]
        if (click) {
          pIndex.push(x - 1);
          pIndex.push(y - 1);
          getSelector([x - 1, y - 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 1, y - 1]).style.border = "1px solid black";
        }
      }
    }
    //right diagonal
    if (x > 0 && x <= 6 && y >= 0 && y < 7) {
      if (cells[x - 1][y + 1] < 0) {
        //black (-ve)
        //show option[x-1][y+1]
        if (click) {
          pIndex.push(x - 1);
          pIndex.push(y + 1);
          getSelector([x - 1, y + 1]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x - 1, y + 1]).style.border = "1px solid black";
        }
      }
    }
  } else {
    //black pawn(-1)
    //down
    if (x < 7 && x >= 1) {
      if (cells[x + 1][y] == 0) {
        //empty
        //show option[x+1][y]
        if (click) {
          pIndex.push(x + 1);
          pIndex.push(y);
          getSelector([x + 1, y]).style.border = "8px solid #5C4033";
        } else {
          //remove border
          getSelector([x + 1, y]).style.border = "1px solid black";
        }
        if (x == 1 && cells[x + 2][y] == 0) {
          //empty (two front move for black)
          //show option[x+2][y]
          if (click) {
            pIndex.push(x + 2);
            pIndex.push(y);
            getSelector([x + 2, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x + 2, y]).style.border = "1px solid black";
          }
        }
      }
      //left lower diagonal
      if (y > 0 && y <= 7 && x >= 1 && x < 7) {
        if (cells[x + 1][y - 1] > 0) {
          //white(+ve)
          //show option[x+1][y-1]
          if (click) {
            pIndex.push(x + 1);
            pIndex.push(y - 1);
            getSelector([x + 1, y - 1]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x + 1, y - 1]).style.border = "1px solid black";
          }
        }
      }
      //right lower diagonal
      if (x >= 1 && x < 7 && y >= 0 && y < 7) {
        if (cells[x + 1][y + 1] > 0) {
          //white(+ve)
          //show option[x+1][y+1]
          if (click) {
            pIndex.push(x + 1);
            pIndex.push(y + 1);
            getSelector([x + 1, y + 1]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x + 1, y + 1]).style.border = "1px solid black";
          }
        }
      }
    }
  }
}
//<============PAWN==============>END

//king

//<==============BISHOP=============>
function option_show_beshoop(x, y, piece) {
  let tempx = x;
  let tempy = y;
  if (piece == 1) {
    if (x > 0 && y > 0 && cells[x - 1][y - 1] <= 0) {
      //upper left
      while (y != 0) {
        x--;
        y--;
        // if(pieceColor(indexToPieceName(x,y)) == 1) break;
        // console.log(x,y);
        if (cells[x][y] <= 0) {
          // getSelector([x,y]).style.border = "8px solid #5C4033";
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        
        if (cells[x][y] != 0 &&cells[x][y]!=prev_value ) break;
      }
    }
    x = tempx;
    y = tempy;
    if (x > 0 && y < 7 && cells[x - 1][y + 1] <= 0) {
      //upper right
      while (x != 0) {
        x--;
        y++;
        if (cells[x][y] <= 0) {
          //  getSelector([x,y]).style.border = "8px solid #5C4033";
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
        // if(pieceColor(indexToPieceName(x,y)) == 1) break;
      }
    }
    x = tempx;
    y = tempy;
    if (x < 7 && y > 0 && cells[x + 1][y - 1] <= 0) {
      //down left
      while (y != 0) {
        x++;
        y--;
        // if(pieceColor(indexToPieceName(x,y)) == 1) break;
        if (cells[x][y] <= 0) {
          //  getSelector([x,y]).style.border = "8px solid #5C4033";
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }

    x = tempx;
    y = tempy;
    if (x < 7 && y < 7 && cells[x + 1][y + 1] <= 0) {
      //down right
      while (x != 7) {
        x++;
        y++;
        // if(pieceColor(indexToPieceName(x,y)) == 1) break;
        if (cells[x][y] <= 0) {
          //  getSelector([x,y]).style.border = "8px solid #5C4033";
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
  }
  // black beshoop
  else {
    if (x > 0 && y > 0 && cells[x - 1][y - 1] >= 0) {
      //upper left diagonal
      while (y != 0) {
        x--;
        y--;
        // if(pieceColor(indexToPieceName(x,y)) == -1) break;
        if (cells[x][y] >= 0) {
          //  getSelector([x,y]).style.border = "8px solid #5C4033";

          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
          if (cells[x][y] != 0) break;
        }
      }
    }

    x = tempx;
    y = tempy;
    if (x > 0 && y < 7 && cells[x - 1][y + 1] >= 0) {
      //upper right diagonal
      while (x != 0) {
        // getSelector([x,y]).style.border = "8px solid #5C4033";
        x--;
        y++;
        if (cells[x][y] >= 0) {
          //  getSelector([x,y]).style.border = "8px solid #5C4033";
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
          if (cells[x][y] != 0) break;
        }
      }
      // if(pieceColor(indexToPieceName(x,y)) == -1) break;
    }

    x = tempx;
    y = tempy;
    if (x < 7 && y > 0 && cells[x + 1][y - 1] >= 0) {
      //down left diagonal
      while (y != 0) {
        x++;
        y--;
        // if(pieceColor(indexToPieceName(x,y)) == -1) break;
        if (cells[x][y] >= 0) {
          //  getSelector([x,y]).style.border = "8px solid #5C4033";
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
          if (cells[x][y] != 0) break;
        }
      }
    }
    x = tempx;
    y = tempy;
    if (x < 7 && y < 7 && cells[x + 1][y + 1] >= 0) {
      //down right diagonal
      while (x != 7) {
        x++;
        y++;
        // if(pieceColor(indexToPieceName(x,y)) == -1) break;
        if (cells[x][y] >= 0) {
          //  getSelector([x,y]).style.border = "8px solid #5C4033";
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
          if (cells[x][y] != 0) break;
        }
      }
    }
  }
}
//<==============BISHOP=============>end

function option_show_queen(x, y, piece) {
  let tempx = x;
  let tempy = y;
  // console.log(x,y);

  //white queen
  if (piece == 1) {
    if (cells[x][y - 1] <= 0) {
      //left
      while (y != 0) {
        y--;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }

        if (cells[x][y] != 0) break;
      }
    }

    x = tempx;
    y = tempy;
    if (cells[x][y + 1] <= 0) {
      //right
      while (y != 7) {
        y++;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }

    x = tempx;
    y = tempy;
    if (cells[x - 1][y - 1] <= 0) {
      //left upper diagonal
      while (y != 0) {
        x--;
        y--;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }

    x = tempx;
    y = tempy;
    if (cells[x + 1][y - 1] <= 0) {
      //left lower diagonal
      while (y != 0) {
        x++;
        y--;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }

    x = tempx;
    y = tempy;
    if (cells[x - 1][y] <= 0) {
      // upper
      while (x != 0) {
        x--;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }

    x = tempx;
    y = tempy;
    if (cells[x - 1][y + 1] <= 0) {
      //upper right diagonal
      while (x != 0) {
        x--;
        y++;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) {
          break;
        }
      }
    }

    x = tempx;
    y = tempy;
    if (cells[x + 1][y + 1] <= 0) {
      //lower right diagonal
      while (x != 0) {
        x++;
        y++;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) {
          break;
        }
      }
    }

    x = tempx;
    y = tempy;
    if (cells[x + 1][y] <= 0) {
      //down
      while (x != 7) {
        x++;
        if (cells[x][y] <= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
  }

  //black queen
  else {
    if (cells[x - 1][y] >= 0) {
      //up
      console.log("up");
      while (x != 0) {
        x--;
        console.log(x, y);
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x - 1][y - 1] >= 0) {
      //left upper diagonal
      console.log("left upper diagonal");
      while (x != 0) {
        x--;
        y--;
        console.log(x, y);
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x - 1][y + 1] >= 0) {
      //upper right diagonal
      while (x != 0) {
        x--;
        y++;
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x][y - 1] >= 0) {
      //left
      while (y != 0) {
        y--;
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    // console.log(x, y);
    if (cells[x][y + 1] >= 0) {
      //right
      // console.log(x, y);
      while (y != 7) {
        y++;
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x + 1][y] >= 0) {
      //down
      while (x != 7) {
        x++;
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x + 1][y - 1] >= 0) {
      //left lower diagonal
      while (y != 0) {
        x++;
        y--;
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
    x = tempx;
    y = tempy;
    if (cells[x + 1][y + 1] >= 0) {
      //right lower diagonal
      while (y != 7) {
        x++;
        y++;
        if (cells[x][y] >= 0) {
          if (click) {
            pIndex.push(x);
            pIndex.push(y);
            getSelector([x, y]).style.border = "8px solid #5C4033";
          } else {
            //remove border
            getSelector([x, y]).style.border = "1px solid black";
          }
        }
        if (cells[x][y] != 0) break;
      }
    }
  }
}
//index for piece
function getSelector([row, col]) {
  return eval(`p${row}${col}`);
}

function BorW(pn) {
  let piece;
  if (pn[0] == "w") {
    piece = 1;
  } else if (pn[0] == "b") {
    piece = -1;
  } else {
    piece = 0;
  }
  return piece;
}

function showMoves(arrIdx, pieceName, piece) {
  // if(click){
  //   click=false;
  // }else{
  //   click=true;
  // }

  // console.log(click);
  if (pieceName[1] == "p") {
    option_show_pawn(arrIdx[0], arrIdx[1], piece);
  } else if (pieceName[1] == "r") {
    option_show_rook(arrIdx[0], arrIdx[1], piece);
  } else if (pieceName[1] == "b") {
    option_show_beshoop(arrIdx[0], arrIdx[1], piece);
  } else if (pieceName[1] == "q") {
    option_show_queen(arrIdx[0], arrIdx[1], piece);
  } else if (pieceName[1] == "n") {
    option_show_knight(arrIdx[0], arrIdx[1], piece);
  }
}

//<=========isInpath===========>
function isInPath(i, j) {
  console.log(i + "," + j);
  size = pIndex.length;
  console.log(size);
  for (let k = 0; k < size; k += 2) {
    console.log(pIndex[k] + "," + pIndex[k + 1]);
    if (i == pIndex[k] && j == pIndex[k + 1]) {
      console.log("bsdk");
      return true;
    }
  }
  console.log("madarchod");
  return false;
}
//<=========isInpath===========>End
pieces.forEach((p) => {
  p.addEventListener("click", function () {
    let arrIdx = indexToArray(Number(p.id));
    let pieceName = getPieceName(arrIdx[0], arrIdx[1]);
    let piece = BorW(pieceName); // -1 for black and 1 for white

    //first time selecting piece to move
    if (!select) {
      console.log("1st time");
      click = true;
      select = true;
      pi = arrIdx[0];
      pj = arrIdx[1];

      curr_piece = piece; //black white
      prev_piece_name = pieceName;
      showMoves(arrIdx, pieceName, piece);
    } else {
      //for unselect or move or kill

      //same piece unselect
      if (pi == arrIdx[0] && pj == arrIdx[1]) {
        console.log("same");
        click = false;
        showMoves(arrIdx, pieceName, piece);
        select = false;
        pIndex = [];
      } else if (curr_piece === piece) {
        //same color unselect then select
        console.log("same color");
        let prev_idx = [pi, pj];
        click = false;
        showMoves(prev_idx, prev_piece_name, piece);
        click = true;
        showMoves(arrIdx, pieceName, piece);
        pi = arrIdx[0];
        pj = arrIdx[1];
        curr_piece = piece;
        prev_piece_name = pieceName;
        pIndex = [];
      } else if (isInPath(arrIdx[0], arrIdx[1])) {
        //kill
        if (piece != 0) {
          console.log("kill");
        }
        //move
        prev_value=cells[pi][pj];
        pieceMove(getSelector([pi, pj]), p);
        //
        cells[arrIdx[0]][arrIdx[1]]=0;
        //
        pIndex = [];
        let prev_idx = [pi, pj];
        //for removing path of after moving or killing
        click = false;
        console.log(prev_value);
        showMoves(prev_idx, prev_piece_name, curr_piece);
        //
        cells[arrIdx[0]][arrIdx[1]]=prev_value;
        //
        getSelector([arrIdx[0], arrIdx[1]]).style.border = "1px solid black";
        select = 0;
      } else {
        console.log("wrong move");
      }
    }
    // if(!click){
    //   pi=arrIdx[0];
    //   pj=arrIdx[1];
    // }
    // if(pi==arrIdx[0]&&pj==arrIdx[1]){
    //   click=false;
    //   showMoves(arrIdx,pieceName,piece);
    // }
    //let i,j = index of div
    //path check isRight_Choice()
    // for(let p=0;p<size;p+=2){
    // if(i==p&&j==p+1){
    // cells[prevx][prevy]=0;//image daal
    // move(selected_piece,i,j);
    // }
    // }

    // showMoves(arrIdx,pieceName,piece);
  });
});
