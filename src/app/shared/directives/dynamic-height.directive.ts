
import { AfterViewInit, Directive, ElementRef, HostBinding, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: "[dynamicHeight]",
})

export class DynamicHeightDirective implements AfterViewInit {
    private domElement: HTMLElement;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.domElement = this.elementRef.nativeElement as HTMLElement;             
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.domElement, "height", ((this.domElement.offsetWidth * 2) / 3));
    }
}