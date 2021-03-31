import { Component ,ViewChild} from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  dummyList: any;

  constructor(private menu: MenuController) { 
      
    this.dummyList = [
      {
        id: 'ref',
        title: 'SONIC 777',
        text: 'Inventore quae numquam id rerum. Tempora quaerat et veniam. Similique quia amet. Delectus doloremque delectus et doloribus saepe est magnam voluptatem. Consequatur sed ea excepturi eveniet corrupti laboriosam. Laudantium mollitia placeat nemo quod tenetur qui natus. Facilis sit blanditiis harum explicabo eos at ea expedita. Dolor eius animi quod sint et qui non et rem. Consequatur dolor consequatur quos corrupti dolores quis illo molestiae libero. Nihil aut hic nemo dignissimos. Asperiores quo beatae error ut qui nihil. Voluptatibus perspiciatis fuga voluptas distinctio harum et et dolores. Fugiat dolor molestiae necessitatibus dolorum.'
      }, {
        id: 'sma',
        title: 'GET APP',
        text: 'Inventore quae numquam id rerum. Tempora quaerat et veniam. Similique quia amet. Delectus doloremque delectus et doloribus saepe est magnam voluptatem. Consequatur sed ea excepturi eveniet corrupti laboriosam. Laudantium mollitia placeat nemo quod tenetur qui natus. Facilis sit blanditiis harum explicabo eos at ea expedita. Dolor eius animi quod sint et qui non et rem. Consequatur dolor consequatur quos corrupti dolores quis illo molestiae libero. Nihil aut hic nemo dignissimos. Asperiores quo beatae error ut qui nihil. Voluptatibus perspiciatis fuga voluptas distinctio harum et et dolores. Fugiat dolor molestiae necessitatibus dolorum.'
      }, {
        id: 'ibh',
        title: 'About',
        text: 'Inventore quae numquam id rerum. Tempora quaerat et veniam. Similique quia amet. Delectus doloremque delectus et doloribus saepe est magnam voluptatem. Consequatur sed ea excepturi eveniet corrupti laboriosam. Laudantium mollitia placeat nemo quod tenetur qui natus. Facilis sit blanditiis harum explicabo eos at ea expedita. Dolor eius animi quod sint et qui non et rem. Consequatur dolor consequatur quos corrupti dolores quis illo molestiae libero. Nihil aut hic nemo dignissimos. Asperiores quo beatae error ut qui nihil. Voluptatibus perspiciatis fuga voluptas distinctio harum et et dolores. Fugiat dolor molestiae necessitatibus dolorum.'
      }, {
        id: 'tab',
        title: 'Roadmap',
        text: 'Inventore quae numquam id rerum. Tempora quaerat et veniam. Similique quia amet. Delectus doloremque delectus et doloribus saepe est magnam voluptatem. Consequatur sed ea excepturi eveniet corrupti laboriosam. Laudantium mollitia placeat nemo quod tenetur qui natus. Facilis sit blanditiis harum explicabo eos at ea expedita. Dolor eius animi quod sint et qui non et rem. Consequatur dolor consequatur quos corrupti dolores quis illo molestiae libero. Nihil aut hic nemo dignissimos. Asperiores quo beatae error ut qui nihil. Voluptatibus perspiciatis fuga voluptas distinctio harum et et dolores. Fugiat dolor molestiae necessitatibus dolorum.'
      }, {
        id: 'tab',
        title: 'Contacts',
        text: 'Inventore quae numquam id rerum. Tempora quaerat et veniam. Similique quia amet. Delectus doloremque delectus et doloribus saepe est magnam voluptatem. Consequatur sed ea excepturi eveniet corrupti laboriosam. Laudantium mollitia placeat nemo quod tenetur qui natus. Facilis sit blanditiis harum explicabo eos at ea expedita. Dolor eius animi quod sint et qui non et rem. Consequatur dolor consequatur quos corrupti dolores quis illo molestiae libero. Nihil aut hic nemo dignissimos. Asperiores quo beatae error ut qui nihil. Voluptatibus perspiciatis fuga voluptas distinctio harum et et dolores. Fugiat dolor molestiae necessitatibus dolorum.'
      }
    ];

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
