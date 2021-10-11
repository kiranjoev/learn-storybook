import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.template.html',
  styleUrls: ['./page-header.scss'],
})
export default class PageHeaderComponent {
  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
