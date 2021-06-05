import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/firestore";


const config = {
  apiKey: "000000000000000000000000000000000000000",
  databaseURL: "https://tuition-manager-6c8b4-default-rtdb.firebaseio.com"
};

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.css']
})
export class MainModuleComponent implements OnInit {

  constructor() {
   firebase.initializeApp(config);
   
  }
  ngOnInit(): void {
  }

}
