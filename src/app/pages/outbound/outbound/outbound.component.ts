import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'outbound-discover',
  templateUrl: './outbound.component.html',
  styleUrls: ['./outbound.component.scss']
})
export class OutboundComponent {
  @ViewChild('mapmoreinfo') mapmoreinfo: ElementRef;
  @ViewChild('imapmoreinfo') imapmoreinfo: ElementRef;
  @ViewChild('treemapmoreinfo') treemapmoreinfo: ElementRef;
  @ViewChild('itreemapmoreinfo') itreemapmoreinfo: ElementRef;
  @ViewChild('profilemoreinfo') profilemoreinfo: ElementRef;
  @ViewChild('iprofilemoreinfo') iprofilemoreinfo: ElementRef;
  @ViewChild('activitymoreinfo') activitymoreinfo: ElementRef;
  @ViewChild('dactivitymoreinfo') dactivitymoreinfo: ElementRef;

  @ViewChild('reportsopen') reportsopen: ElementRef;

  FMapMoreInfo() {
    this.mapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
    this.imapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  TreeMapMoreInfo() {
    this.treemapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
    this.itreemapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  DProfileMoreInfo() {
    this.profilemoreinfo.nativeElement.classList.toggle('moreinfo-active');
    this.iprofilemoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  DActivityMoreInfo() {
    this.activitymoreinfo.nativeElement.classList.toggle('moreinfo-active');
    this.dactivitymoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  DReportsOpen() {
    this.reportsopen.nativeElement.classList.toggle('open');
  }
}