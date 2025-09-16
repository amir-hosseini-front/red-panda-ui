import { Observable } from 'rxjs';
import { COLUMNS_TYPES } from '../../redpandaTypes';

type ColumnTypeText = {
  key: string;
  type: COLUMNS_TYPES.TEXT;
  label: string;
  copyToClipboard?: boolean;
  editable?: boolean;
  active?: boolean;
  data?: {
    /** default value is  true and numbers turn to persian Digits */
    enDigitsToFa: boolean;
  };
};
type ColumnTypeShamsiDate = {
  key: string;
  type: COLUMNS_TYPES.SHAMSI_DATE;
  label: string;
  copyToClipboard?: boolean;
  editable?: boolean;
  active?: boolean;
  data?: {
    dateFormat: string;
  };
};
type ColumnTypeDate = {
  key: string;
  type: COLUMNS_TYPES.DATE;
  label: string;
  copyToClipboard?: boolean;
  editable?: boolean;
  active?: boolean;
  data?: {
    dateFormat: string;
  };
};
type ColumnTypeSelector = {
  key: string;
  type: COLUMNS_TYPES.SELECTOR;
  label: string;
  active?: boolean;
  data: {
    key: string;
  };
  copyToClipboard?: boolean;
  editable?: false;
};
type ColumnTypeSelectorEditable = {
  key: string;
  type: COLUMNS_TYPES.SELECTOR;
  label: string;
  active?: boolean;
  data: {
    key: string;
    value: string;
    editableData: Observable<any[]>;
  };
  copyToClipboard?: boolean;
  editable: true;
};
type ColumnTypeStatus = {
  key: string;
  type: COLUMNS_TYPES.STATUS | COLUMNS_TYPES.STATUS_ACTIVE;
  label: string;
  active?: boolean;
  editable?: boolean;
};
type ColumnTypeColor = {
  key: string;
  type: COLUMNS_TYPES.COLOR;
  label: string;
  active?: boolean;
  editable?: boolean;
};
export type ColumnTypeAction = {
  key: string;
  type: COLUMNS_TYPES.ACTION;
  label: string;
  active?: boolean;
  title: string;
};

export type ColumnTypeActionButtons = {
  key: string;
  type: COLUMNS_TYPES.ACTION_BUTTONS;
  label: string;
  active?: boolean;
  data: {
    key: string;
    title: string;
    component: any;
  }[];
};
export type ColumnTypeNumber = {
  key: string;
  type: COLUMNS_TYPES.NUMBER;
  label: string;
  copyToClipboard?: boolean;
  editable?: boolean;
  active?: boolean;
  canColorfulNumber?: boolean;
  data?: {
    /** default value is  true and numbers turn to persian Digits */
    enDigitsToFa?: boolean;
    /** default value is  true   */
    canShowTomanInToolTip?: boolean;
    /** default value is  false  */
    canShowIRR?: boolean;
    /** default value is  true   */
    canSplitNumbers?: boolean;
    /** default value is  true   */
    canShowWordInToolTip?: boolean;
  };
};
export type ColumnTypePelak = {
  key: string;
  type: COLUMNS_TYPES.PELAK;
  label: string;
  active?: boolean;
};
export type ColumnTypeDetailViewerForReport = {
  key: string;
  type: COLUMNS_TYPES.NUMBER;
  label: string;
  active?: boolean;
  data?: {
    detailViewers: string[];
    keyType: string;
    onClick: (data: any) => void;
  };
};

export type ColumnTypeRowSelector = {
  key: string;
  type: COLUMNS_TYPES.ROW_SELECTOR;
  label: string;
  active?: boolean;
  data: {
    key: string;
  };
};

export type ColumnTypeMultiColumn = {
  key: string;
  type: COLUMNS_TYPES.MULTI_COLUMN;
  label: string;
  active?: boolean;
  columns: [
    {
      key: string;
      type: COLUMNS_TYPES.SELECTOR;
      label: string;
      data: {
        key: string;
      };
    }
  ];
};
export type ColumnsSchema =
  | ColumnTypeText
  | ColumnTypeSelector
  | ColumnTypeSelectorEditable
  | ColumnTypeStatus
  | ColumnTypeColor
  | ColumnTypeAction
  | ColumnTypeActionButtons
  | ColumnTypeNumber
  | ColumnTypeRowSelector
  | ColumnTypeMultiColumn
  | ColumnTypePelak
  | ColumnTypeShamsiDate
  | ColumnTypeDate;
