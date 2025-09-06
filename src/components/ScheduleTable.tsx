import { motion } from "framer-motion";
import { ScheduleEvent } from "@/types/schedule";

interface ScheduleTableProps {
  events: ScheduleEvent[];
}

export default function ScheduleTable({ events }: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto bg-white p-4 md:p-6 rounded-xl border border-amber-100 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
          <tr>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900 rounded-tl-lg">
              Time (UTC)
            </th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">
              Participant
            </th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900 rounded-tr-lg">
              Team Leader / Deputy Leader
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {events.map((event, index) => (
            <tr key={index} className="transition-colors hover:bg-amber-50/30">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">
                {event.time}
              </td>
              <td className="py-4 px-6 text-sm text-primary font-medium">
                {event.participant}
              </td>
              <td className="py-4 px-6 text-sm text-gray-700">
                {event.teamLeader}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
