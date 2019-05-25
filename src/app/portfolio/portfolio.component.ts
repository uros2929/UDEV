import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  indexForObj = 0;
  portfolioAry = [
    {
      title: 'UDEV restaurant',
      text: 'Example of website for restaurant',
      gitLink: 'https://github.com/uros2929/restaurant-UDEV',
      demoLink: 'https://uros2929.github.io/restaurant-UDEV/',
      imgClass: 'card-img-topUdevRestaurant'
    },
    {
      title: 'UDEV shop',
      text: 'Example of shop website',
      gitLink: 'https://github.com/uros2929/UDEVshopping',
      demoLink: 'https://uros2929.github.io/UDEVshopping/start',
      imgClass: 'card-img-topUDEVshop'
    },
    {
      title: 'OSPbyUM',
      text: 'Small aplication for Accounting, application written in angular4+.',
      gitLink: 'https://github.com/uros2929/ospbyum-angular2',
      demoLink: 'https://uros2929.github.io/ospbyum-angular2/',
      imgClass: 'card-img-topOSPangular'
    },
    {
      title: 'OSPbyUM2',
      text: 'Small aplication for Accounting, application written with JavaScript, HTML,' +
        ' CSS in Electronjs.Electron is used to build cross platform desktop apps with JavaScript, HTML, and CSS ',
      gitLink: 'https://github.com/uros2929/knjigovodstvo-electron',
      demoLink: '',
      imgClass: 'card-img-topOSPelectron1'
    },
    {
      title: 'Registration with MongoDB',
      text: 'This is app for sing up and log in user. App used MonogoDB for saving data',
      gitLink: 'https://github.com/uros2929/registration-server',
      demoLink: '',
      imgClass: 'card-img-registrationServer'
    },
    {
      title: 'Work with MySQL',
      text: 'Learning MySQL.',
      gitLink: 'https://github.com/uros2929/Learning-MySQL',
      demoLink: '',
      imgClass: 'card-img-card-img-MySQL'
    },
    {
      title: 'TypingSpeed app',
      text: 'Website that provides online typing test for trening purpose.' +
        'You can choose language of text and type it as quickly and accurately as possible until the test time is up',
      gitLink: 'https://github.com/uros2929/typing-speed-test',
      demoLink: 'https://uros2929.github.io/typing-speed-test/',
      imgClass: 'card-img-topTypingSpeed'
    },
    {
      title: 'Minesweeper game',
      text: 'Minesweeper is a single-player puzzle video game.' +
        ' The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them,' +
        ' with help from clues about the number of neighboring mines in each field.',
      gitLink: 'https://github.com/uros2929/minesweeper-game',
      demoLink: 'https://uros2929.github.io/minesweeper-game/',
      imgClass: 'card-img-topMines'
    },
    {
      title: 'Tic-Tac-Toe game',
      text: 'Game for two players, X and O, who take turns marking the spaces in a 3×3 grid.' +
        ' The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.',
      gitLink: 'https://github.com/uros2929/tic-tac-toe-angular-bootstrap',
      demoLink: 'https://uros2929.github.io/tic-tac-toe-angular-bootstrap/main',
      imgClass: 'card-img-topXO'
    },
    {
      title: 'CaffeApp',
      text: 'Small restaurant/caffe table booking system.Helping restaurant/caffe to get more  reservations online,' +
        ' increase guest capacity',
      gitLink: 'https://github.com/uros2929/caffe-website-angular-bootstrap',
      demoLink: 'https://uros2929.github.io/caffe-website-angular-bootstrap/main',
      imgClass: 'card-img-topCaffe'
    },
    {
      title: 'GitHub Account Info',
      text: 'Type your GitHub username and fast get some of account informations.',
      gitLink: 'https://github.com/uros2929/githubAccInfo',
      demoLink: 'https://uros2929.github.io/githubAccInfo/',
      imgClass: 'card-img-topGitAcc'
    }
  ];
  imgObject = {
    ospAngular: ['OSPangular.png', 'OSPangular2.png', 'OSPangular3.png',
      'OSPangular4.png', 'OSPangular5.png', 'OSPangular6.png', 'OSPangular7.png', 'OSPangular8.png'],
    ospElectron: ['OSPelectron1.png'],
    typingSpeed: ['typingSpeed.png'],
    minesWeeper: ['mines.png'],
    ticTacToe: ['XO.png'],
    caffeApp: ['caffe.png'],
    gitHubAcc: ['GITacc.png'],
    udevRestaurant: ['UDEVrestaurant.png'],
    udevShop: ['UDEVshop.png']
  };


  constructor() { }

  ngOnInit() { }

  imgsModalShow(event) {
    event.preventDefault();
    console.log(event.target.className);
    document.getElementById('modalShowImg').style.display = 'block';
    const findedImgCard = event.target.className;
    if (findedImgCard === 'card-img-topOSPangular') {
      this.chooseImg(this.imgObject.ospAngular);
    } if (findedImgCard === 'card-img-topOSPelectron1') {
      this.chooseImg(this.imgObject.ospElectron);
    } else if (findedImgCard === 'card-img-topTypingSpeed') {
      this.chooseImg(this.imgObject.typingSpeed);
    } else if (findedImgCard === 'card-img-topMines') {
      this.chooseImg(this.imgObject.minesWeeper);
    } else if (findedImgCard === 'card-img-topXO') {
      this.chooseImg(this.imgObject.ticTacToe);
    } else if (findedImgCard === 'card-img-topCaffe') {
      this.chooseImg(this.imgObject.caffeApp);
    } else if (findedImgCard === 'card-img-topGitAcc') {
      this.chooseImg(this.imgObject.gitHubAcc);
    } else if (findedImgCard === 'card-img-topUdevRestaurant') {
      this.chooseImg(this.imgObject.udevRestaurant);
    } else if (findedImgCard === 'card-img-topUDEVshop') {
      this.chooseImg(this.imgObject.udevShop);
    }
  }
  // chooseImg(obj: any[]) {
  //   document.getElementById('showImg').style.backgroundImage = 'url("../../UDEV/assets/images/' + obj[this.indexForObj] + '")';
  //   document.getElementById('nextImg').addEventListener('click', () => {
  //     this.indexForObj++;
  //     document.getElementById('showImg').style.backgroundImage = 'url("../../UDEV/assets/images/' + obj[this.indexForObj] + '")';
  //     if (this.indexForObj == obj.length) {
  //       this.indexForObj = 0;
  //       document.getElementById('showImg').style.backgroundImage = 'url("../../UDEV/assets/images/' + obj[this.indexForObj] + '")';
  //     }
  //
  //   });
  //   document.getElementById('prevImg').addEventListener('click', () => {
  //     this.indexForObj--;
  //     document.getElementById('showImg').style.backgroundImage = 'url("../../UDEV/assets/images/' + obj[this.indexForObj] + '")';
  //     if (this.indexForObj < 0) {
  //     this.indexForObj=obj.length-1;
  //     document.getElementById('showImg').style.backgroundImage = 'url("../../UDEV/assets/images/' + obj[this.indexForObj] + '")';
  //     }
  //
  //   });
  // }

  closeModalShowImgs() {
    document.getElementById('modalShowImg').style.display = 'none';
    this.indexForObj = 0;
    // NEED TO CHANGE !!!!
    location.reload();
  }

  // FOR LOCAL
  chooseImg(obj: any[]) {
    document.getElementById('showImg').style.backgroundImage = 'url("/assets/images/' + obj[this.indexForObj] + '")';

    document.getElementById('nextImg').addEventListener('click', () => {
      this.indexForObj++;
      document.getElementById('showImg').style.backgroundImage = 'url("/assets/images/' + obj[this.indexForObj] + '")';
      if (this.indexForObj === obj.length) {
        this.indexForObj = 0;
        document.getElementById('showImg').style.backgroundImage = 'url("/assets/images/' + obj[this.indexForObj] + '")';
      }

    });
    document.getElementById('prevImg').addEventListener('click', () => {
      this.indexForObj--;
      document.getElementById('showImg').style.backgroundImage = 'url("/assets/images/' + obj[this.indexForObj] + '")';
      if (this.indexForObj < 0) {
      this.indexForObj = obj.length - 1;
      document.getElementById('showImg').style.backgroundImage = 'url("/assets/images/' + obj[this.indexForObj] + ')';
      }

    });
  }
}

