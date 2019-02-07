import { Component, OnInit } from '@angular/core';
import {IndexService} from './index.service';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public paging = {
    totalItem: 0,
    maxSize: 5,
    currentPage:1,
    page: Number
  }

  query: string = '';

  result: any = undefined;

  searching: any

  public formSearch: FormGroup;

  pageChanged(event: any): void {
    this.paging.page = event.page;
    this.searchQuery(this.formSearch.controls.query.value)
  }

  constructor(
    private indexService: IndexService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      query: ['']
    })

    
    this.formSearch.controls.query.valueChanges.subscribe(query => {
      if (query.length >= 2)
      {
        if(this.searching)
          this.searching.unsubscribe();
          this.searchQuery(query);
      } else {
        query = 'all'
        this.searchQuery(query);
      }
    })


    let payload = undefined;
    this.searchQuery(payload)
    
  }

  searchQuery(query){
      let param = {
        query: query,
        page: this.paging.currentPage
      }

      this.searching = this.indexService.getList(param).subscribe((res:any) => {
      this.result = res;
      this.paging.totalItem = res.total_count
    })
  }


}
