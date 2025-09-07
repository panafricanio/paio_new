import React from "react";
import { motion, Variants } from "framer-motion";
import CommitteeMemberCard from "./CommitteeMemberCard";
import { CommitteeMember, ColorScheme } from "@/types/committee";
import { getTitleColorClass, getBackgroundClass } from "@/utils/colorUtils";

interface CommitteeSectionProps {
  title: string;
  description: string;
  members: CommitteeMember[];
  colorScheme: ColorScheme;
  gridCols?: string;
  fadeInUp: Variants;
  staggerContainer: Variants;
  centerRoles?: boolean;
}

const CommitteeSection: React.FC<CommitteeSectionProps> = ({
  title,
  description,
  members,
  colorScheme,
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  fadeInUp,
  staggerContainer,
  centerRoles = false,
}) => {
  const sortedMember = members?.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className={`py-16 md:py-24 ${getBackgroundClass(colorScheme)}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${getTitleColorClass(
              colorScheme
            )}`}
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          className={`grid ${gridCols} gap-8`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sortedMember?.map((member, idx) => (
            <CommitteeMemberCard
              key={member.name + idx}
              member={member}
              index={idx}
              colorScheme={colorScheme}
              fadeInUp={fadeInUp}
              centerRoles={centerRoles}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommitteeSection;
