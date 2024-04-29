import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {

  constructor(private ElementRef:ElementRef) { 
    console.log('tamano activado');
    console.log(this.ElementRef);
    this.ElementRef.nativeElement.style.fontsize = '20px';
    
    
  }

}
