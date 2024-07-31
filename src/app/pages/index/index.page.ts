import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, cartOutline, logoIonic } from 'ionicons/icons';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonIcon]
})
export class IndexPage implements  OnInit {

  constructor() {
    addIcons({cartOutline});
  }

ngOnInit()
{addIcons({ logoIonic });

}

}
