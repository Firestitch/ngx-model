import { EventModel } from './../../models/event.model';
import { Component, OnInit } from '@angular/core';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'kitchen-sink',
  templateUrl: 'kitchen-sink.component.html',
  styleUrls: ['kitchen-sink.component.scss']
})
export class KitchenSinkComponent implements OnInit {

  public config = {};

  constructor(
    private exampleComponent: FsExampleComponent,
              private message: FsMessage) {
    //exampleComponent.setConfigureComponent(KitchenSinkConfigureComponent, { config: this.config });
  }

  public ngOnInit(): void {

    const eventFactory = EventModel.factory({ id: 1, start: new Date() });
    console.log(eventFactory, eventFactory.toData());

    const eventNew = new EventModel();
    eventNew.start = new Date();
    console.log(eventNew);

  }
}
