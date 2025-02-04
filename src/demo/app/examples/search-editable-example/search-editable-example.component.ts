import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'ng-app-search-editable-example',
    templateUrl: './search-editable-example.component.html',
    styleUrls: ['./search-editable-example.component.scss'],
    standalone: false
})
export class SearchEditableExampleComponent implements OnInit {
	people$: Observable<Person[]>;
	selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.people$ = this.dataService.getPeople();
	}
}
