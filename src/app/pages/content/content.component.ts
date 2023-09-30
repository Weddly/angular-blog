import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id: string | null = ""
  imageCover: string = ""
  cardTitle: string = ""
  cardDescription: string = ""

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setComponentValues(this.id)
  }

  setComponentValues(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    if (result) {
      this.imageCover = result.photo;
      this.cardTitle = result.title;
      this.cardDescription = result.description;
    }

  }
}
