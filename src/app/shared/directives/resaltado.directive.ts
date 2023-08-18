import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective  implements OnChanges {

  @Input()
  appResaltado = 'yellow';

  constructor(private elementRef: ElementRef, private Renderer2: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.establecerColorDeFondo();
   }

   establecerColorDeFondo(): void {    
     this.Renderer2.setStyle(
      this.elementRef.nativeElement, 
      'background-color', 
      this.appResaltado
     );
    //  this.Renderer2.setStyle(
    //   this.elementRef.nativeElement,
    //   'font-size',
    //   '20px'
    //  )
   }
}
