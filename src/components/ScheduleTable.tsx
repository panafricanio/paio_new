import { motion } from "framer-motion";
import { ScheduleEvent } from "@/types/schedule";

interface ScheduleTableProps {
  headers?: string[];
  events: ScheduleEvent[];
}

export default function ScheduleTable({
  headers = ["Time (UTC)", "Participant", "Team Leader / Deputy Leader"],
  events,
}: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto bg-white p-4 md:p-6 rounded-xl border border-amber-100 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-4 px-6 text-left text-xl font-semibold text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {events.map((event, index) => (
            <tr key={index} className="transition-colors hover:bg-amber-50/30">
              <td className="py-4 px-6 text-md font-medium text-gray-900">
                {event.time}
              </td>
              <td className="py-4 px-6 text-md text-primary font-medium">
                {event.participant}
              </td>
              <td className="py-4 px-6 text-md text-gray-700">
                {event.teamLeader}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
