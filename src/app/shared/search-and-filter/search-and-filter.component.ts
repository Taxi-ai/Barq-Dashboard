import { Component, OnInit, Input, OnChanges, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.css']
})
export class SearchAndFilterComponent implements OnInit, AfterContentChecked {

  selectForSearch: string;
  selectForFilter: string;
  oldSelectForSearch = this.selectForSearch;
  oldSelectForFilter = this.selectForFilter;

  searchQuery: { label: string, value: string, type: string, selectOptions?: { label: string, value: string }[] };

  filterQuery: { label: string, value: string, type: string, selectOptions?: { label: string, value: string }[] };

  @Input() searchQueries: { label: string, value: string, type: string, selectOptions?: { label: string, value: string }[] }[];

  @Input() filterQueries: { label: string, value: string, type: string, selectOptions?: { label: string, value: string }[] }[];

  constructor() { }

  ngOnInit() {
    this.searchQuery = this.searchQueries[0];
    this.selectForSearch = this.searchQueries[0].value;

    this.filterQuery = this.filterQueries[0];
    this.selectForFilter = this.filterQueries[0].value;
  }

  ngAfterContentChecked() {

    // console.log('changed');


    if (this.oldSelectForSearch !== this.selectForSearch) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.searchQueries.length; i++) {
        if (this.searchQueries[i].value === this.selectForSearch) {
          this.searchQuery = this.searchQueries[i];
          break;
        }
      }
    }

    if (this.oldSelectForFilter !== this.selectForFilter) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.filterQueries.length; i++) {
        if (this.filterQueries[i].value === this.selectForFilter) {
          this.filterQuery = this.filterQueries[i];
          break;
        }
      }
    }


    this.oldSelectForSearch = this.selectForSearch;
    this.oldSelectForFilter = this.selectForFilter;
  }

}
