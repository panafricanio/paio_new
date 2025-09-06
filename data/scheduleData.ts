import { ScheduleSection } from "@/types/schedule";

export const practiceContestInfo = {
  title: "Practice Contest",
  description: "The practice contest will be held asynchronously. Countries may book slots from 7th September till 12th September for the practice contest. We will put out a form shortly.",
  briefingInfo: "To accommodate different schedules, we will hold two different briefing slots. One on 7th September and another on 10th September. Participants and leaders will only need to attend one of the two briefing slots."
};

export const scheduleData: ScheduleSection[] = [
  {
    title: "Briefing: 7th September",
    events: [
      {
        time: "1300-1400",
        participant: "Introduction to PAIO & Participants Briefing",
        teamLeader: "Introduction to PAIO & Participants Briefing"
      }
    ]
  },
  {
    title: "Briefing: 10th September",
    events: [
      {
        time: "1600-1700",
        participant: "Introduction to PAIO & Participants Briefing",
        teamLeader: "Introduction to PAIO & Participants Briefing"
      }
    ]
  },
  {
    title: "Day 0: 12th September",
    events: [
      {
        time: "1600-1630",
        participant: "Opening Ceremony",
        teamLeader: "Opening Ceremony"
      },
      {
        time: "1700-1800",
        participant: "Free Time",
        teamLeader: "General Assembly* 0: - Regulations & Nomination of Chair. Briefing on how appeals and medal cutoffs work"
      }
    ],
    notes: ["General Assembly refers to a meeting of all countries participating in the olympiad."]
  },
  {
    title: "Day 1: 13th September",
    events: [
      {
        time: "0900-1400",
        participant: "Contest",
        teamLeader: ""
      },
      {
        time: "1400-1500",
        participant: "Screen recording upload & Break",
        teamLeader: ""
      },
      {
        time: "1500-1600",
        participant: "Discord Hangout (Optional)",
        teamLeader: "General Assembly 1: Results and Appeals Day 1"
      }
    ]
  },
  {
    title: "Day 2: 14th September",
    events: [
      {
        time: "0900-1400",
        participant: "Contest",
        teamLeader: ""
      },
      {
        time: "1400-1500",
        participant: "Break",
        teamLeader: "General Assembly 2: Results and Appeals Day 2"
      },
      {
        time: "1500-1600",
        participant: "Sponsor Engagement (AOA, Discord)",
        teamLeader: "General Assembly 3: Vote on Scoreboard & AOB"
      },
      {
        time: "1600-1630",
        participant: "Break",
        teamLeader: ""
      },
      {
        time: "1630-1800",
        participant: "Closing Ceremony & Prize Presentation*",
        teamLeader: ""
      }
    ],
    notes: ["Medals will be handed out at IOI or the next major event. Electronic certificates will be given out at the prize presentation."]
  }
];