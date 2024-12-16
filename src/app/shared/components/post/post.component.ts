import { Component, OnInit } from '@angular/core';
import { Ipost } from '../model/post';
import { postdata } from '../const/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


postarray:Array<Ipost>=postdata
}