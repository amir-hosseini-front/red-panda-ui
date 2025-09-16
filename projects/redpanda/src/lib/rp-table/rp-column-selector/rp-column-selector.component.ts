import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from '../../redpandaTypes';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from '../../../svg-icon/close-icon/close-icon.component';

@Component({
  selector: 'rp-column-selector',
  templateUrl: './rp-column-selector.component.html',
  styleUrls: ['./rp-column-selector.component.scss'],
  standalone: true,
  imports: [CommonModule, CloseIconComponent],
})
export class RpColumnSelectorComponent<T> {
  selectedItem: MenuItem<T> = {} as MenuItem<T>;
  newItems: MenuItem<T>[] = [];
  isOpenMenu = false;
  _items: any[] = [];
  // _items: any[] = ACTIVE_OPTIONS;
  @Input() set items(data: any) {
    this._items = data;
    this.hasItems = true;
    this.init();
  }
  _defaultValue = undefined;
  _titleKey!: T;
  _valueKey!: T;
  initCounter = 0;
  hasTitleKey = false;
  hasValueKey = false;
  hasItems = false;
  hasDefaultValue = false;
  @Input() set titleKey(data: T) {
    this._titleKey = data;
    this.hasTitleKey = true;
    this.init();
  }
  @Input() set valueKey(data: T) {
    this._valueKey = data;
    this.hasValueKey = true;
    this.init();
  }
  @Input() label: string = '';
  @Output() onItemSelected = new EventEmitter<any>();
  @Input() inputFormControl: FormControl = new FormControl('', []);
  constructor(private cdr: ChangeDetectorRef) {}
  init() {
    if (this.hasTitleKey && this.hasValueKey && this.hasItems) {
      this.newItems = this.changeItemsType(this._items);
      const item = this.newItems.find(
        (item) => item.value == this._defaultValue
      );
      if (!this._defaultValue || this._defaultValue === null) return;
      this.inputFormControl.setValue(this._defaultValue);
      this.onItemSelect(
        this.newItems.find((item) => item.value == this._defaultValue)!,
        false
      );
    }
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  changeItemsType(items: any[]): MenuItem<T>[] {
    return items.map((item) => {
      return {
        title: item[this._titleKey],
        value: item[this._valueKey],
      };
    });
  }
  openMenuClick() {
    this.isOpenMenu = !this.isOpenMenu;
  }
  onItemSelect(selectedItem: MenuItem<T>, isFromUi: boolean): void {
    if (isFromUi) this.inputFormControl.markAsTouched();
    this.isOpenMenu = false;
    this.selectedItem = selectedItem;
    this.inputFormControl.setValue(selectedItem.value);
    this.onItemSelected.emit(selectedItem.value);
  }
  focusOut() {
    this.isOpenMenu = false;
    this.inputFormControl.markAsTouched();
  }
  removedText() {
    this.selectedItem = {} as MenuItem<T>;
    this.inputFormControl.setValue('');
    this.onItemSelected.emit('');
  }
}
