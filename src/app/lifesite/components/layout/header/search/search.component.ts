import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormControl } from '@angular/forms';

import { SearchService, SearchInfo } from './search.service';

/**
 * @component SearchComponent
 * @description Allows the user to search JSON data tags and find a filtered set of results.  They can click on the
 * results to go to the corresponding section.
 *
 * Used this tutorial as a reference and altered it to suit our needs:
 * http://4dev.tech/2016/03/tutorial-creating-an-angular2-autocomplete/
 */
@Component({
    selector: 'ls-search',
    template: require('./search.html'),
    styles: [require('./_search.scss')],
    providers: [SearchService],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class SearchComponent implements OnInit {
    private searchQuery: string = '';
    private searchResults: Array<{value: string, href: string}> = [];
    private info: SearchInfo[];
    private searchControl: FormControl = new FormControl();

    constructor(private searchService: SearchService) {
    }

    ngOnInit(): any {
        this.searchService.loadJson().subscribe(data => {
            this.info = data;
        });

        this.searchControl.valueChanges
            .debounceTime(250)
            .distinctUntilChanged()
            .subscribe((query: string) => {
                if (query.trim() === '' || query.trim().length <= 2) {
                    this.searchResults = [];
                    return;
                }

                this.searchResults = this.info
                    .filter((info) => {
                        return info.tag.toLowerCase().indexOf(query.trim().toLowerCase()) > -1;
                    })
                    .map((info) => {
                        return {
                            value: info.tag,
                            href: info.href
                        };
                    });
            });
    }

    /**
     * When a user clicks on the search result, stores the item and the link.  We will use this to navigate to the
     * corresponding section
     * @param  {string} item The string value of the selected item
     * @param  {string} link The string value of the link on which to navigate to
     */
    select(item: string, link: string) {
        console.log('selected: ', item);
        console.log('href: ', link);
        this.searchQuery = item;
        this.searchResults = [];
    }
}
