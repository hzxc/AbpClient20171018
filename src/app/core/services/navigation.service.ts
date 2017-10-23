import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface IMenuItem {
    type: string,       // Possible values: link/dropDown/icon/separator/extLink
    name?: string,      // Used as display text for item and title for separator type
    state?: string,     // Router state
    icon?: string,      // Item icon name
    tooltip?: string,   // Tooltip text 
    disabled?: boolean, // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]  // Dropdown items
  }
  interface IChildItem {
    name: string,       // Display text
    state: string       // Router state
  }

@Injectable()
export class NavigationService {

    defaultMenu:IMenuItem[] = [
        {
          name: 'DASHBOARD',
          type: 'link',
          tooltip: 'Dashboard',
          icon: 'dashboard',
          state: 'dashboard'
        },
        {
          name: 'INBOX',
          type: 'link',
          tooltip: 'Inbox',
          icon: 'inbox',
          state: 'inbox'
        },
        {
          name: 'CHAT',
          type: 'link',
          tooltip: 'Chat',
          icon: 'chat',
          state: 'chat'
        },
        {
          name: 'CALENDAR',
          type: 'link',
          tooltip: 'Calendar',
          icon: 'date_range',
          state: 'calendar'
        },
        {
          name: 'DIALOGS',
          type: 'dropDown',
          tooltip: 'Dialogs',
          icon: 'filter_none',
          state: 'dialogs',
          sub: [
            {name: 'CONFIRM', state: 'confirm'},
            {name: 'LOADER', state: 'loader'},
          ]
        }];
        iconTypeMenuTitle:string = 'Frequently Accessed';
        menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
        menuItems$ = this.menuItems.asObservable();
        
}