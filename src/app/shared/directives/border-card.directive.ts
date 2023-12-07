import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  @Input("appBorderCard") bordercolor : string | undefined =""


  GREY_COLOR: string = '#f5f5F5'; 
  GREEN_COLOR: string = '#009688';

  constructor(private element : ElementRef) { 
    this.setBorder(this.GREY_COLOR)
    this.setHight(150)

  }
  /**
   * 
   * @param color 
   */
  private setBorder(color:string) : void{
    const border : string = "solid 3px " + color
    this.element.nativeElement.style.border = border
  }

  /**
   * 
   * @param height 
   */
  private setHight(height : number) : void{
    this.element.nativeElement.style.height = height + "px"
  }

  @HostListener("mouseenter") onMouseEnter(): void{
    this.setBorder(this.bordercolor || this.GREEN_COLOR) 
  }

  @HostListener("mouseleave") onMouseLeave() : void{
    this.setBorder(this.GREY_COLOR)

  }

}
