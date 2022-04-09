const themeButton = document.querySelector('.theme-button');
const theme = document.querySelector('#css-link');
 function changeTheme() {
  if (theme.getAttribute('href') == 'styles/light-thame.css') {
    theme.href = 'styles/dark-thame.css';
  } else {
    theme.href = "styles/light-thame.css";
  }
};

function registration(){
    //Ввод ника
    let playerName = prompt('Придумайте себе имя','Player_1');
    let namePlace = document.querySelector('.player-name');
    namePlace.textContent = playerName;
  
    //Случайное имя противника
    let computerNameBase = ['Биба', 'Боба', 'Лёлик', 'Болик', 'Жока', 'Бока','Носок судьбы','Тащю Как Путин','ОпАSнЫй ВоЗрАSт', 'Мефедрон','Я ЗгРЫС ДЕДА ','I LoVE BalTikA', 'Пуssи Прокурор', 'СоЛян@я дев04кА'];
    let computerNameNum = Math.floor(Math.random()*computerNameBase.length);
    let computerName = computerNameBase[computerNameNum];
    let computerNamePlace = document.querySelector('.computer-name');
    computerNamePlace.textContent = computerName;
    } 
  
function game(){
        //игрок выбирает стартовое колличество камней
    starterCount = Number(prompt('Сколько камней будет у игроков в начале?', 10));
    var playerCount = starterCount;
    var computerCount = starterCount;
  
    let playerCountPlase = document.querySelector('.player-count');
    playerCountPlase.textContent = playerCount;
    
    let computerCountPlase = document.querySelector('.computer-count');
    computerCountPlase.textContent = computerCount;
     
  
        //игрок делает ставку
     while (playerCount > 0 && computerCount > 0 && playerCount + computerCount == 2 * starterCount){
            //игрок делает ставку
        let playerBet = Number(prompt('Поставьте насколько камней из вашего "запаса"',3));
       
        if (playerCount - playerBet < 0){
            alert('Для такой ставки у вас недостаточно камней');
            break;
        }
        if (playerBet % 1 != 0){
          alert('за попытку разломать камень вас выгоняют из казино');
          break;
        }
        if (playerBet < 1){
            alert('а ты хитёр');
            break;
        }
        
            //определяется, четность/неченность ставки
        if (playerBet % 2 == 00) cond = true;
        else cond = false;
  
            //предположение противника
        var computerPred = Boolean(Math.floor(Math.random()*2));
        var computerBet = Number(Math.floor(Math.random()*computerCount));
        console.log('computerBet --> ' + computerBet)
      
    
            //игрок проиграл
       if (cond == computerPred){
          playerCount -= computerBet;
          computerCount += computerBet;
         alert(`you're lose.. you: ${playerCount} вражина: ${computerCount}`);
          console.log("you're lose");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
         
       }else{//игрок выйграл
         playerCount += playerBet;
         computerBet -= playerBet;
         alert(`you win!1! you: ${playerCount} вражина: ${computerCount}`);
         console.log("you win");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
        }
        
        //компютер делает ставку
        computerBet = Math.floor(Math.random()*computerCount);
        if (computerBet % 2 == 00) cond = true;
        else cond = false;
        console.log('computerBet --> ' + computerBet);
        
        let playerPred = prompt(`Как вы считаете противник поставил четное, или нечетное число?(введите число совподающее с четностью/нечетностью предположения) `, 1)
        if (playerPred % 2 == 00) cond = true;
        else playerPred = false;
        
         if (cond == playerPred){
          playerCount -= computerBet;
          computerCount += computerBet;
         alert(`you're lose.. you: ${playerCount} вражина: ${computerCount}`);
          console.log("you're lose");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
         
       }else{//игрок неугадал
          playerCount -= computerBet;
          computerCount += computerBet;
         alert(`you're lose.. you: ${playerCount} вражина: ${computerCount}`);
          console.log("you're lose");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
        }
       
       var conclusion = document.getElementById("conclusion");
       conclusion.classList.toggle("conclusionCss");
       if (playerCount > 0 && computerCount <= 0)
         conclusion.textContent = 'Вы выйграли';
       else if(playerCount <= 0 && computerCount > 0) conclusion.textContent = 'Вы проиграли';
  console.log('-------------------')
      }
    }

    