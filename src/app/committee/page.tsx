"use client";

import React from "react";
import { Variants } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import CommitteeSection from "@/components/CommitteeSection";
import { committeeSections } from "@/config/committee";
import {
  internationalScientificCommittee,
  hostCommittee,
  internationalCommittee,
  teamLeaders,
} from "../../../data/committeeMembers";
// import { coaches } from "../../../data/coaches";

export default function Committee() {
  // Animation variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Map sections to their corresponding member data
  const memberData = [
    internationalScientificCommittee,
    hostCommittee,
    internationalCommittee,
    teamLeaders,
    // coaches,
  ];

  return (
    <div className="overflow-hidden">
      <PageHeader
        title="Committee Members"
        description="Meet the dedicated professionals who make PAIO possible"
      />

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {committeeSections.map((section, index) => (
            <CommitteeSection
              key={section.title}
              title={section.title}
              description={section.description}
              members={memberData[index]}
              colorScheme={section.colorScheme}
              gridCols={section.gridCols}
              fadeInUp={fadeInUp}
              staggerContainer={staggerContainer}
              centerRoles={
                section.title === "Host Committee" ||
                section.title === "Team Leaders" ||
                section.title === "Coaches"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
