import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { DetailViewers } from '../../redpandaTypes';
import { CaretUpIconComponent } from '../../../svg-icon/caret-up-icon/caret-up-icon.component';
// import { NiraModalService } from 'nira-modal';

@Directive({
  selector: '[detailViewerManager]',
})
export class DetailViewerManagerDirective {
  @Input() detailViewerData: any;
  @Input() detailViewerName: DetailViewers | undefined;

  constructor(
    private el: ElementRef,
    // private niraModalService: NiraModalService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    this.changeStyle();
  }

  changeStyle() {
    this.el.nativeElement.style.backgroundColor = '#b4dcff';
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.style.borderRadius = '18px';
    this.el.nativeElement.style.padding = '2px 8px ';
    this.el.nativeElement.classList.add('detailViewer');
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        CaretUpIconComponent
      );
    const componentRef =
      this.viewContainerRef.createComponent(componentFactory);
    const host = this.el.nativeElement;
    host.insertBefore(componentRef.location.nativeElement, host.firstChild);
  }

  @HostListener('click') onMouseUp() {
    let component = undefined;
    switch (
      this.detailViewerName
      // case DetailViewers.BILL: {
      //   component = BillDetailViewerComponent;
      //   break;
      // }
      // case DetailViewers.DRIVER: {
      //   component = DriverDetailViewerComponent;
      //   break;
      // }
      // case DetailViewers.MANIFEST: {
      //   component = ManifestDetailViewerComponent;
      //   break;
      // }
      // case DetailViewers.SERVICE: {
      //   component = ServiceDetailViewerComponent;
      //   break;
      // }
      // case DetailViewers.VEHICLE: {
      //   component = VehicleDetailViewerComponent;
      //   break;
      // }
    ) {
    }
    // this.niraModalService.open(component, {
    //   data: this.detailViewerData,
    // });
  }
}
