import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import  'rxjs/Rx'; //load all features...i guess

import {ProductListComponent} from './products/product-list.component'
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    template: 
    `<div> 
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>`,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS ]
})

export class AppComponent{
    pageTitle: string = 'Acme Product Management';
}