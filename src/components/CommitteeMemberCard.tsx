import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { CommitteeMember, ColorScheme } from "@/types/committee";
import { getColorConfig } from "@/utils/colorUtils";
import {
  validateImageUrl,
  getImageSrc,
  logMissingImage,
} from "@/utils/imageUtils";

interface CommitteeMemberCardProps {
  member: CommitteeMember;
  index: number;
  colorScheme: ColorScheme;
  fadeInUp: Variants;
  centerRoles?: boolean;
}

const CommitteeMemberCard: React.FC<CommitteeMemberCardProps> = ({
  member,
  index,
  colorScheme,
  fadeInUp,
  centerRoles = false,
}) => {
  const colors = getColorConfig(colorScheme);

  // Enhanced image validation and logging
  const hasValidImage = validateImageUrl(member.image);
  const imageSrc = getImageSrc(member.image, member.name);

  // Only log if there's an image URL but it's invalid (don't log for empty strings or placeholders)
  if (!hasValidImage && member.image && !member.image.includes("placeholder")) {
    logMissingImage(member.name, member.image);
  }

  return (
    <motion.div
      key={member.name + index}
      className={`${colors.card} rounded-xl p-8 shadow-sm hover:shadow-md transition-all`}
      variants={fadeInUp}
      whileHover={{ y: -5 }}
    >
      <div
        className={`relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 ${colors.border}`}
      >
        {hasValidImage ? (
          <Image
            src={imageSrc}
            alt={member.name}
            fill
            className="object-cover"
            onError={() => {
              logMissingImage(member.name, member.image);
            }}
          />
        ) : (
          <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 text-xs">
            <div className="text-center">
              <div className="font-semibold">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-[10px] mt-1">No Image</div>
            </div>
          </div>
        )}
      </div>

      <h3 className={`text-xl font-semibold mb-2 text-center ${colors.text}`}>
        {member.name}
      </h3>

      <div className={`space-y-2 ${centerRoles ? "text-center" : ""}`}>
        {member.roles.map((role, i) => (
          <div
            key={i}
            className={`${
              centerRoles ? "justify-center" : ""
            } flex items-center text-gray-700`}
          >
            {!centerRoles &&
            (role.includes("Professor") ||
              role.includes("Gold") ||
              role.includes("Honorable") ||
              role.includes("Engineer") ||
              role.includes("Committee")) ? (
              <Award className={`h-5 w-5 mr-2 ${colors.icon}`} />
            ) : !centerRoles ? (
              <GraduationCap className={`h-5 w-5 mr-2 ${colors.icon}`} />
            ) : null}
            <span className="text-sm">{role}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommitteeMemberCard;
