import { motion } from "framer-motion";
import { ScheduleSection as ScheduleSectionType } from "../types/schedule";
import ScheduleTable from "./ScheduleTable";

interface ScheduleSectionProps {
  section: ScheduleSectionType;
  index: number;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ScheduleSection({
  section,
  index,
}: ScheduleSectionProps) {
  return (
    <motion.div variants={fadeInUp} className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{section.title}</h3>
      <ScheduleTable events={section.events} headers={section.headers} />
      {section.notes && (
        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
          {section.notes.map((note, noteIndex) => (
            <p key={noteIndex} className="text-sm text-gray-700">
              {note}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
}
