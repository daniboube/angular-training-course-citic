import { Component, ErrorHandler } from '@angular/core';
import { ErrorNotification, NotificationsService } from 'src/app/core/notifications.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  errorMessage: string = '';

  constructor(private notificationsService: NotificationsService) { 
    this.notificationsService.getNotification$().subscribe(
      (notification: ErrorNotification) => { this.errorMessage = notification.message; },
    );

  }

}
