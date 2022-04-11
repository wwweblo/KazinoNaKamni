const themeButton = document.querySelector('.theme-button');
const theme = document.querySelector('#css-link');
//изменение темы сайта
 function changeTheme() {
  if (theme.getAttribute('href') == 'light-thame.css') {
    theme.href = 'dark-thame.css';
  } else {
    theme.href = 'light-thame.css';
  }
    }

//регистрация на сайте
function registration(){
    //Ввод ника
    const playerName = prompt('Придумайте себе имя','Player_1');
    let namePlace = document.querySelector('.player-name');
    namePlace.textContent = playerName;
  
    //Случайное имя противника
    let computerNameBase = ['Биба', 'Боба', 'Лёлик', 'Болик', 'Жока', 'Бока','anal penetrator',
    'Тащю Как Путин','ОпАSнЫй ВоЗрАSт', 'Мефедрон','Я ЗгРЫС ДЕДА ','I LoVE BalTikA', 'Пуssи Прокурор',
     'СоЛян@я дев04кА'];
    let computerNameNum = Math.floor(Math.random()*computerNameBase.length);
    const computerName = computerNameBase[computerNameNum];
    let computerNamePlace = document.querySelector('.computer-name');
    computerNamePlace.textContent = computerName;
    } 

//сессия
   function game(){
        //игрок выбирает стартовое колличество камней
    const starterCount = Number(prompt('Сколько камней будет у игроков в начале?', 10));
    var playerCount = starterCount;
    var computerCount = starterCount;
  
    var playerCountPlase = document.querySelector('.player-count');
    playerCountPlase.textContent = playerCount;
    
    var computerCountPlase = document.querySelector('.computer-count');
    computerCountPlase.textContent = computerCount;
     
  
        //игрок делает ставку
    while (playerCount > 0 && computerCount > 0 && playerCount + computerCount == 2 * starterCount){
            //игрок делает ставку
            var playerBet = Number(prompt('Поставьте насколько камней из вашего "запаса"',3));
            while (playerBet > playerCount || playerBet % 1 != 0 || playerBet < 1){
             if (playerBet > playerCount) alert('Для такой ставки у вас недостаточно камней');
             if (playerBet % 1 != 0) alert('за попытку разломать камень вас выгоняют из казино');
             if (playerBet < 1) alert('а ты хитёр');
             var playerBet = Number(prompt('Поставьте насколько камней из вашего "запаса"',3));
            }
        
            //определяется, четность/неченность ставки
        if (playerBet % 2 == 00) cond = true;
        else cond = false;
  
            //предположение противника
        var computerPred = Boolean(Math.floor(Math.random()*2));
        var computerBet = Number(Math.floor(Math.random()*computerCount));
        console.log('computerPred --> ' + computerPred)
        console.log('computerBet --> ' + computerBet)
      
    
            //игрок проиграл
       if (cond == computerPred){
          playerCount -= computerBet;
          computerCount += computerBet;
         alert(`you lose.. you: ${playerCount} вражина: ${computerCount}`);
          console.log("you're lose");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
         
       }else{//игрок выйграл
         playerCount += playerBet;
         computerCount -= playerBet;
         alert(`you win!1! you: ${playerCount} вражина: ${computerCount}`);
         console.log("you win");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
        }

        if (playerCount <= 0 & computerCount <= 0) break;
        
        //компютер делает ставку
        computerBet = Math.floor(Math.random()*computerCount);
        if (computerBet % 2 == 00) cond = true;
        else cond = false;
        console.log('computerBet --> ' + computerBet);
        
        let playerPred = prompt(`Как вы считаете противник поставил четное,
         или нечетное число?(введите число совподающее с четностью/нечетностью предположения) `, 1)
        if (playerPred % 2 == 00) cond = true;
        else playerPred = false;

         //игрок делает ставку
         var playerBet = Number(prompt('Поставьте насколько камней из вашего "запаса"',3));
         while (playerBet > playerCount || playerBet % 1 != 0 || playerBet < 1){
          if (playerBet > playerCount) alert('Для такой ставки у вас недостаточно камней');
          if (playerBet % 1 != 0) alert('за попытку разломать камень вас выгоняют из казино');
          if (playerBet < 1) alert('а ты хитёр');
          var playerBet = Number(prompt('Поставьте насколько камней из вашего "запаса"',3));
         }
        
         if (cond == playerPred){
          playerCount -= computerBet;
          computerCount += computerBet;
         alert(`you win!1! you: ${playerCount} вражина: ${computerCount}`);
          console.log("you win");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
         
       }else{//игрок неугадал
          playerCount -= computerBet;
          computerCount += computerBet;
         alert(`you're lose.. you: ${playerCount} вражина: ${computerCount}`);
          console.log("you lose");
         console.log('playerCount --> ' + playerCount);
         console.log('computerCount --> ' + computerCount);
        }
        // выводит игроку итог сессии
       var conclusion = document.querySelector('.conclusion');
       if (playerCount > 0 && computerCount <= 0)
            conclusion.textContent = 'Вы выйграли';
       else if(playerCount <= 0 && computerCount > 0)
            conclusion.textContent = 'Вы проиграли';
        console.log('-------------------')
      }
    }