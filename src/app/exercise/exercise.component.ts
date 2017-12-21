import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { GameService } from '../modules/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
 
})

export class ExerciseComponent implements OnInit {

  constructor(private http: Http, public game: GameService, private router: Router) { }
  

  ngOnInit() {
    this.router.navigate(['/login']);
  }

  myFunction(e: MouseEvent, i: number){
    e.preventDefault();
    this.http.post(this.game.apiRoot + "/game/room/quotes/choose", { i: i }).subscribe(res=>{
    })



        var exercises = [];
        var number = [];
        var p = [];

    
        var x = document.getElementById("input6").dataset;
        exercises.push(x);
        var y = document.getElementById("input7").dataset;
        number.push(y);
        var o = document.getElementById("input1").dataset;
        p.push("Jumping Jacks: " + document.getElementById("input1").dataset + "<br >"+ 
        "Sit ups: " + document.getElementById("input2").dataset + "<br >"+
        "Running: " + document.getElementById("input3").dataset + "<br >"+
        "Swimming: " + document.getElementById("input4").dataset + "<br >"+
        "Rowing: " + document.getElementById("input5").dataset + "<br >"+   
        x + " " + y + "<br >");
        console.log(p);
}

  
}

