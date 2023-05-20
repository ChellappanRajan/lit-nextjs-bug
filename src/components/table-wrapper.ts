import * as React from 'react';
import {createComponent} from '@lit-labs/react';
import { MyTable } from './table';
import { MyTableCell } from './cell';
import { MyTableCellHead } from './head';
import { MyTableRow } from './row';
import { MyModal } from './modal';
import { MyInput } from './input';

export const MyTableComponent = createComponent({
  tagName: 'my-table',
  elementClass: MyTable,
  react: React,
});


export const MyTableCellComponent = createComponent({
  tagName: 'my-cell',
  elementClass: MyTableCell,
  react: React,
});


export const MyTableCellHeadComponent = createComponent({
  tagName: 'my-cell-head',
  elementClass: MyTableCellHead,
  react: React,
});

export const MyTableRowComponent = createComponent({
  tagName: 'my-table-row',
  elementClass: MyTableRow,
  react: React,
});

export const MyModalComponent = createComponent({
  tagName: 'my-modal',
  elementClass: MyModal,
  react: React,
});


export const MyInputComponent = createComponent({
  tagName: 'my-input',
  elementClass: MyInput,
  react: React,
});




