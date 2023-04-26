import * as React from 'react';
import {createComponent} from '@lit-labs/react';
import {MyTabs} from './tabs';
import { MyTab } from './tab';

export const Tabs = createComponent({
  tagName: 'my-tabs',
  elementClass: MyTabs,
  react: React,
});

export const Tab = createComponent({
    tagName: 'my-tab',
    elementClass: MyTab,
    react: React,
  });