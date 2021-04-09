import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AdminLte from 'admin-lte';
import * as $ from 'jquery';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mobile: boolean;

  constructor( private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log("mobile", isMobile)
    console.log("tablet", isTablet)

    if(isDesktopDevice)
    {
      this.mobile = false;
    }
    else{
      this.mobile = true;
    }
  }


  // $('body').Layout();
  // $('[data-toggle="push-menu"]').PushMenu();
  // $('[data-widget="treeview"]').Treeview();
  
  
}


