import { Type } from '@angular/core';

export interface ModalConfig<T = any> {
  component: Type<any>;
  data?: T;
}
