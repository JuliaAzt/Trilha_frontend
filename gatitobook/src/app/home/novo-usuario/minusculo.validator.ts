import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl){
  const valor = control.value as string;
  let result = valor !== valor.toLowerCase() ?  {minusculo:true} :  null;

  return result;

}
