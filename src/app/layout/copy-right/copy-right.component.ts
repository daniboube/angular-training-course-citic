import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css']
})
export class CopyRightComponent {
  @Input() appTitle = '';
  authorName = 'Daniel Boubeta';
  authorURL = 'https://github.com/daniboube';

  public getAuthorCaption() {
    return `© ${new Date().getFullYear()} By ${this.authorName}`;
  }

}
