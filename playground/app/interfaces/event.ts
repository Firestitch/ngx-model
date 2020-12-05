
export interface Event {
  id?: number;
  start?: Date;
  end?: Date;
  count?: number;
  until?: Date;
  interval?: number;
  frequency?: string;
  timezone?: string;
  type?: string;
  rrule?: string;
  string?: string;
  title?: string;
  series?: string;
  allDay?: boolean;
  parentEventId?: number;
  duration?: number;
  state?: string;
}
