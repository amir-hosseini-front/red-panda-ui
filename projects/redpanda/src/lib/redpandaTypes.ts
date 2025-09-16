export type ThemePalette = 'square' | 'round';
export type ColorState =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonType = 'button';

export type LayoutRadioButtons = 'row' | 'column';

export type InputType = 'number' | 'password' | 'text';

export type MenuItem<T> = {
  title: T;
  value: T;
};

export type ButtonSize = 'xsmall' | 'small' | 'medium';
export type Color = 'White' | 'Orange' | 'Purple';
export type ConfirmDialog = {
  title: string;
  text: string;
  confirmBtn: string;
  cancelBtn: string;
};

export enum DetailViewers {
  BILL = 'bill',
  DRIVER = 'driver',
  MANIFEST = 'manifest',
  SERVICE = 'service',
  VEHICLE = 'vehicle',
}
export enum COLUMNS_TYPES {
  TEXT = 'text',
  COLOR = 'color',
  NUMBER = 'number',
  SELECTOR = 'selector',
  ROW_SELECTOR = 'row-selector',
  STATUS = 'status',
  STATUS_ACTIVE = 'status-active',
  ACTION = 'action',
  ACTION_BUTTONS = 'action-buttons',
  /** @deprecated do not use SHAMSI_DATE please use DATE */
  SHAMSI_DATE = 'shamsi-date',
  DATE = 'date',
  MULTI_COLUMN = 'multiColumn',
  PELAK = 'pelak',
  DETAIL_VIEWER_FOR_REPORT = 'detail-viewer-for-report',
}
