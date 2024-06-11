import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  standalone: true,
  styleUrls: ['./messages.component.css'],
  imports: [CommonModule]
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }
}
