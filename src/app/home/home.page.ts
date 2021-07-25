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
  contattiList: any;
  cinqueList: any;
  dummyList: any;


  constructor(private menu: MenuController) {

        this.firstList = [
      {
        id: 'sonic',
        title: 'SONIC(K)',
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
        text: 'This Smart Contract implement a new ERC777 standard token for Ethereum network and even later a BEP-20 for BSC network.'

      }];

      this.secondList = [{
          id: 'social',
          title: ' Social with NFT Collectibles Tokens ',
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
            title: 'Get App',
            img1 : './../../assets/google-play-badge.png',
            img2 : './../../assets/appstore-badge.png',
            link1 : '',
            link2 : '',
            text : 'Download the App and used it to collect your NFT cards',
          }];

          this.quattroList = [
            {
              id: 'about',
              title: 'About',
              subtitle : 'SONIC(K) is a collectible NFT card picture games on SONIC SOCIAL with a decentralized ecosystem.',
              img : '',
              text : '',
            }];
  
            this.cinqueList = [
              {
                id: 'roadmap',
                title: 'Roadmap',
                img : './../../assets/roadmap.png',
              }];

              this.contattiList = [
                {
                  id: 'contacts',
                  title: 'Contacts',
                  img : '',
                  text1 : 'For general infornation, please contact info@sonikchain.com.',
                  text2 : 'For all marketing, media info,advertising please contact our Sonic(k) Marketing Team at marketing@sonikchain.com.',
                  text3 : 'For support and tech please contact our Sonic(k) Support Team at support@sonikchain.com.',
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
    console.log('logScrollEnd : When Scroll Ends', event);
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
    // tslint:disable-next-line:prefer-const
    const titleELe = document.getElementById(label);
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }

  openLink(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeUwCIqVpt6xY_hEDnKVJ9ki0S7_Xdlu8H9AlGIq42-1ZM0cA/viewform?usp=pp_url', '_self');
  }

  openLinkTelegram(){
    window.open('https://t.me/sonikchain', '_self');
  }

  openLinkWhitepaperIT(){
    window.open('https://www.sonikchain.com/assets/pdf/SonicWhitePaperIT.pdf', '_self');
  }

  openLinkWhitepaperEN(){
    window.open('https://www.sonikchain.com/assets/pdf/SonicWhitePaperEN.pdf', '_self');
  }

  openLinkFacebook(){
    window.open('https://fb.me/sonikchain', '_self');
  }

  openLinkTwitter(){
    window.open('https://twitter.com/sonikchain', '_self');
  }


}
