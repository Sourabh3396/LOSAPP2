import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
DataTable : any;
  showtable: boolean;
  dataTable: any;
  constructor() { }

  ngOnInit(): void {
    const table: any = $("#example1, #example2");
        this.dataTable = table.DataTable({
          "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false,
        })
        
  
  }
  
  


}
  

