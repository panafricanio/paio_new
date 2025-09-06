export interface ScheduleEvent {
  time: string;
  participant: string;
  teamLeader: string;
}

export interface ScheduleSection {
  title: string;
  events: ScheduleEvent[];
  notes?: string[];
}
