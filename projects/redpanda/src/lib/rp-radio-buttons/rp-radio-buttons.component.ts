import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
type MenuItem<T> = {
  title: T;
  value: T;
};
type LayoutRadioButtons = 'row' | 'column';
@Component({
  selector: 'rp-radio-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rp-radio-buttons.component.html',
  styleUrl: './rp-radio-buttons.component.scss',
})
export class RpRadioButtonsComponent<T> {
  selectedItem: MenuItem<T> = {} as MenuItem<T>;
  titleKeyObject!: keyof string | number;
  valueKeyObject!: keyof string | number;
  _defaultValue = undefined;
  newItems: MenuItem<T>[] = [];
  _items: any = [];
  initCounter = 0;
  @Input() set items(data: any) {
    this._items = data;
    this.initCounter++;
    this.init();
  }
  @Input({ required: true }) set defaultValue(data: any) {
    this._defaultValue = data;
    this.initCounter++;
    this.init();
  }
  @Input() titleKey!: string;
  @Input() valueKey!: string;
  @Input() layout: LayoutRadioButtons = 'column';
  @Input() name: string = 'radio';
  @Output() onChange = new EventEmitter<string>();
  changeItemsType(items: any[]): MenuItem<T>[] {
    return items.map((item) => {
      return {
        title: item[this.titleKeyObject],
        value: item[this.valueKeyObject],
      };
    });
  }
  init() {
    if (this.initCounter !== 2) {
      return;
    }
    type ObjectKey = (typeof this._items)[0];
    this.titleKeyObject = this.titleKey as ObjectKey;
    this.valueKeyObject = this.valueKey as ObjectKey;
    this.newItems = this.changeItemsType(this._items);
    if (this._defaultValue === undefined) {
      this.onItemClick(this.newItems[0]);
    } else {
      this.onItemClick(
        this.newItems.find((item) => item.value == this._defaultValue)
      );
    }
  }
  onItemClick(item: MenuItem<T> | undefined): void {
    if (!item) return;
    this.selectedItem = item;
    this.onChange.emit(String(item.value));
  }
}
