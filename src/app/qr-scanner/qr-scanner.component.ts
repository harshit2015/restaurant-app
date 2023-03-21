import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent {
  public scannerEnabled: boolean = false;
  public information: string = "Click button to scan QR code";
  public menuRedirectURL: string = "";
  constructor() { }
  ngOnInit(): void {
  }
  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "scanning... ";
    this.information = $event;
    sessionStorage.setItem("seatNumber", "17");
    this.menuRedirectURL = this.information + '/' + sessionStorage.getItem("seatNumber");
    this.information = "Redirecting please wait";
    window.location.href = this.menuRedirectURL;
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "detecting...";
  }
}
