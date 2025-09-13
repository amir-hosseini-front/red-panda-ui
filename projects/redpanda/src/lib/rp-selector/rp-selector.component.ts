import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MenuItem } from '../redpandaTypes';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rp-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rp-selector.component.html',
  styleUrl: './rp-selector.component.scss',
})
export class RpSelectorComponent<T> {
  selectedItem: MenuItem<T> = {} as MenuItem<T>;
  titleKeyObject!: keyof string | number;
  valueKeyObject!: keyof string | number;
  newItems: MenuItem<T>[] = [];
  isOpenMenu = false;
  _items: any = [];
  _defaultValue!: T;
  @Input() titleKey!: string;
  @Input() valueKey!: string;
  @Input() size: string = 'small';
  @Input() canHighlightBackground = false;
  @Input() set items(data: any) {
    this._items = data;
    this.init();
  }
  @Input() set defaultValue(data: T) {
    this._defaultValue = data;
    this.init();
  }
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() onItemSelected = new EventEmitter<any>();
  @Input() inputFormControl: FormControl = new FormControl('', []);

  constructor(private cdr: ChangeDetectorRef, private elRef: ElementRef) {}
  init() {
    type ObjectKey = (typeof this._items)[0];
    this.titleKeyObject = this.titleKey as ObjectKey;
    this.valueKeyObject = this.valueKey as ObjectKey;
    this.newItems = this.changeItemsType(this._items);
    this.inputFormControl.setValue(this._defaultValue);
    const selectedItem = this.newItems.find(
      (item) => item.value == this._defaultValue
    );
    if (selectedItem) this.onItemSelect(selectedItem, false);
  }
  ngOnInit(): void {
    this.init();
  }

  changeItemsType(items: any[]): MenuItem<T>[] {
    return items.map((item) => {
      return {
        title: item[this.titleKeyObject],
        value: item[this.valueKeyObject],
      };
    });
  }

  openMenuClick(canFocus: boolean) {
    if (this.disabled) return;
    this.isOpenMenu = !this.isOpenMenu;
  }

  onItemSelect(selectedItem: MenuItem<T>, isFromUi: boolean): void {
    if (isFromUi) this.inputFormControl.markAsTouched();
    this.isOpenMenu = false;
    this.selectedItem = selectedItem;
    const mainItem = this._items.find(
      (item: any) => item[this.valueKeyObject] === selectedItem.value
    );
    this.inputFormControl.setValue(selectedItem.value);
    this.onItemSelected.emit(mainItem);
  }

  focusOut() {
    this.isOpenMenu = false;
    this.inputFormControl.markAsTouched();
  }
}
