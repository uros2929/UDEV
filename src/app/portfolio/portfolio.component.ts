import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  allImgCards = document.getElementsByClassName('portfolio');
  indexForObj = 0;
  imgObject = {
    ospAngular: ['OSPangular.png', 'OSPangular2.png'],
    ospElectron: ['OSPelectron1.png'],
    typingSpeed: ['typingSpeed.png'],
    minesWeeper: ['mines.png'],
    ticTacToe: ['XO.png'],
    caffeApp: ['caffe.png'],
    gitHubAcc: ['GITacc.png']
  }


  constructor() {

  }

  ngOnInit() {


  }

  imgsModalShow(event) {
    event.preventDefault();
    document.getElementById('modalShowImg').style.display = 'block';
    let findedImgCard = event.target.className;
    if (findedImgCard == 'card-img-topOSPangular') {
      this.chooseImg(this.imgObject.ospAngular);
    } if (findedImgCard == 'card-img-topOSPelectron1') {
      this.chooseImg(this.imgObject.ospElectron);
    } else if (findedImgCard == 'card-img-topTypingSpeed') {
      this.chooseImg(this.imgObject.typingSpeed);
    } else if (findedImgCard == 'card-img-topMines') {
      this.chooseImg(this.imgObject.minesWeeper);
    } else if (findedImgCard == 'card-img-topXO') {
      this.chooseImg(this.imgObject.ticTacToe)
    } else if (findedImgCard == 'card-img-topCaffe') {
      this.chooseImg(this.imgObject.caffeApp)
    } else if (findedImgCard == 'card-img-topGitAcc') {
      this.chooseImg(this.imgObject.gitHubAcc)
    }
  }

  chooseImg(obj: any[]) {
    document.getElementById('showImg').style.backgroundImage = "url('./assets/images/" + obj[this.indexForObj] + "')";

    document.getElementById('nextImg').addEventListener('click', () => {
      this.indexForObj++;
      document.getElementById('showImg').style.backgroundImage = "url('./assets/images/" + obj[this.indexForObj] + "')";
      if (this.indexForObj == obj.length) {
        this.indexForObj = 0;
        document.getElementById('showImg').style.backgroundImage = "url('./assets/images/" + obj[this.indexForObj] + "')";
      }

    })
    document.getElementById('prevImg').addEventListener('click', () => {
      this.indexForObj--;
      document.getElementById('showImg').style.backgroundImage = "url('./assets/images/" + obj[this.indexForObj] + "')";
      if (this.indexForObj < 0) {
      this.indexForObj=obj.length-1;
      document.getElementById('showImg').style.backgroundImage = "url('./assets/images/" + obj[this.indexForObj] + "')";
      }

    })
  }
  // FOR LOCAL
  // chooseImg(obj: any[]) {
  //   document.getElementById('showImg').style.backgroundImage = "url('../../assets/images/" + obj[this.indexForObj] + "')";

  //   document.getElementById('nextImg').addEventListener('click', () => {
  //     this.indexForObj++;
  //     document.getElementById('showImg').style.backgroundImage = "url('../../assets/images/" + obj[this.indexForObj] + "')";
  //     if (this.indexForObj == obj.length) {
  //       this.indexForObj = 0;
  //       document.getElementById('showImg').style.backgroundImage = "url('../../assets/images/" + obj[this.indexForObj] + "')";
  //     }

  //   })
  //   document.getElementById('prevImg').addEventListener('click', () => {
  //     this.indexForObj--;
  //     document.getElementById('showImg').style.backgroundImage = "url('../../assets/images/" + obj[this.indexForObj] + "')";
  //     if (this.indexForObj < 0) {
  //     this.indexForObj=obj.length-1;
  //     document.getElementById('showImg').style.backgroundImage = "url('../../assets/images/" + obj[this.indexForObj] + "')";
  //     }

  //   })
  // }

  closeModalShowImgs() {
    document.getElementById('modalShowImg').style.display = 'none';
    this.indexForObj = 0;
    location.reload(); // NEED TO CHNAGE !!!!
  }

}