import { Component, OnInit, inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormControl } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'comment-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  comments: CommentModel | any;

  form = this.formBuilder.group({
    comment: new FormControl(''),
    commentDate: new FormControl(''),
    movieID: new FormControl(''),
    score: new FormControl(0),
    uID: new FormControl(''),
  });

  constructor(
    private auth: Auth = inject(Auth),
    private commentService: CommentService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.form.controls.movieID.patchValue(id);

    //@todo: auth id inject
    
    

    console.log(this.form.value);

    this.listComment(id);
  }
  async listComment(id: string) {
    try {
      const headerData = await this.commentService.listComments(id);
      this.comments = headerData;
      return this.comments;
    } catch (error) {
      console.error(error);
    }
  }

  async submit() {
    this.form.controls.commentDate.patchValue(
      new Date(Date.now()).toISOString()
    );
    const ids = this.auth.currentUser?.uid as string;

    this.form.controls.uID.patchValue(ids)
    
    if (this.form.controls.comment.value) {
      this.commentService.createComment(this.form.value);
    }
  }
  // async add(name: string) {

  //   name = name.trim();

  //   if (!name) { return; }

  //   this.commentService.addComment({ name:name,id:Date.now() })
  //     .then(hero => {
  //       //this.heroes.push({name,id:Date.now()}); // Kahramanı heroes listesine ekleyin
  //     })
  //     .catch(error => {
  //       console.error('Hata:', error); // Hata durumunda konsola hata mesajını yazdırın
  //     });
  // }
  // async addComment(){

  //   const docRef = await addDoc(collection(this.commentService, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);}
}
