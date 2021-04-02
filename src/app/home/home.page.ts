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
        id: 'ref',
        title: 'SONIC 677',
        img : '',
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
        text: 'SONIC (SON) is a smart contract that implements a new ERC677 standard token for Ethereum network and even later a BEP-20 for BSC network.'
      
      }];

      this.secondList = [
        {
          id: 'ref',
          title: ' NFT COLLECTIBLES TOKENS ',
          img1 : '',
          img2 : '',
          button1 : '',
          link1 : '',
          text1 : 'AKAJHAKLHALKHALAHLAJHLDHGLJDGOIEUOIEUEIOUEIOEUIOEUIOEUIEOUEOIUEOIEUOIENNKJ',
          text2 : 'AKAJHAKLHALKHALAHLAJHLDHGLJDGOIjlskjdsaldlEUOIEUEIOUEIOEUIOEUIOEUIEOUEOIUEOIEUOIENNKJ',
          text3 : 'oeiuewrnw,emrnew,LDKJDKJHDKJDHsd,msa.d,msad.samdm',
          text4 : 'ksdkjahsdKJLDKJDLKDJLKJDLJLDKDJLKJDLDJLKJD',
          text5 : 'KJHFDKHDKJRJFLFNLDKçDLKDçLDKçDKçDKçDKDçDKL',
          text6 : 'sjdlsakdjlasdjdlksajdlaksdjlLKJDLKJDLKSJKLAJDLAJSKLJSDAKLJADSJSALKDJLKASD',
        }];

        this.terzaList = [
          {
            id: 'ref',
            title: 'GET APP',
            img1 : '',
            img2 : '',
            link1 : '',
            link2 : '',
            text : 'Download the App and used it to collect your NFT cards',
          }];

          this.quattroList = [
            {
              id: 'ref',
              title: 'ABOUTS',
              subtitle : '',
              img : '',
              text : '',
            }];
  
            this.cinqueList = [
              {
                id: 'ref',
                title: 'ROADMAP',
                img : '',
              }];

              this.contattiList = [
                {
                  id: 'ref',
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
