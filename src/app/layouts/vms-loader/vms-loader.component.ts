import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader-service';
import { CustomHttpInterceptor } from './http-interceptor';
@Component({
  selector: 'app-vms-loader',
  templateUrl: './vms-loader.component.html',
  styleUrls: ['./vms-loader.component.css']
})
export class VmsLoader implements OnInit {
  public loading = false;
  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.loading = this.loaderService.isLoad;
  }

}
