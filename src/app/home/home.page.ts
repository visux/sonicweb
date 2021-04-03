import { Component ,ViewChild} from '@angular/core';
import { createAnimation, IonContent, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  firstList: any;
  secondList: any;
  terzaList: any;
  quattroList: any;
  contattiList:any;
  cinqueList:any;
  dummyList: any;
  
  
  constructor(private menu: MenuController) { 
      
        this.firstList = [
      {
        id: 'sonic',
        title: 'SONIC 677',
        img : './../../assets/diagrasonic.png',
        button1 : 'SHOW ECONOMIC TREND OF SONIC',
        link1 : '',
        button2 : 'COINGECKO',
        link2 : '',
        button3 : 'CMC',
        link3 : '',
        button4 : 'DEXTOOLS',
        link4 : '',
        button5 : 'UNISWAP',
        link5 : '',
        button6 : 'PANCAKE',
        link6 : '',
        text: 'SONIC (SON) is a smart contract that implement a new ERC677 standard token for Ethereum network and even later a BEP-20 for BSC network.'
      
      }];

      this.secondList = [
        {
          id: 'social',
          title: ' SOCIAL WITH NFT COLLECTIBLES TOKENS ',
          img1 : '',
          img2 : '',
          button1 : '',
          link1 : '',
          text1 : 'A non-fungible token is a unit of data on a digital ledger called a blockchain.',
          text2 : 'Each NFT on Sonic Social can represent a unique digital card picture game collectible.',
          text3 : 'Transfer your cards directly with NFC technology',
          text4 : 'Sharing and comments for NFT cards',
          text5 : 'Buy rare NFT tokens and collect your favorite games',
          text6 : 'You can buy directly with the SON token',
        }];

        this.terzaList = [
          {
            id: 'getapp',
            title: 'GET APP',
            img1 : './../../assets/google-play-badge.png',
            img2 : './../../assets/appstore-badge.png',
            link1 : '',
            link2 : '',
            text : 'Download the App and used it to collect your NFT cards',
          }];

          this.quattroList = [
            {
              id: 'abouts',
              title: 'ABOUTS',
              subtitle : 'SONIC is a collectible NFT card picture games on SONIC SOCIAL with a decentralized ecosystem.',
              img : '',
              text : '',
            }];
  
            this.cinqueList = [
              {
                id: 'roadmap',
                title: 'ROADMAP',
                img : './../../assets/roadmap.png',
              }];

              this.contattiList = [
                {
                  id: 'contacts',
                  title: 'CONTACTS',
                  img : '',
                }];
    
        

   
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  logScrollStart(event) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  ScrollToPoint(X, Y) {
    this.content.scrollToPoint(X, Y, 1500);
  }

  scrollToLabel(label) {
    var titleELe = document.getElementById(label);
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }

  

}
