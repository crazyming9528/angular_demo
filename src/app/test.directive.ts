import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  constructor(public elementRef:ElementRef) { }
  @HostListener(`blur`,[`$event.target`])
  blurFn(evt){
    if (evt.value){
      if (evt.value.trim().length>5){
        this.elementRef.nativeElement.value=evt.value.trim().substring(0,5);
      }
    }
  }

}
