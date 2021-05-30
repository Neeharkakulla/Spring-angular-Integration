import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router) { }
  image:any;
  ngOnInit(): void {
    
    this.image=window.sessionStorage.getItem('image')
   if(this.image==undefined)
    this.router.navigate([''])
  }

}
