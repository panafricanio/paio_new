import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Typography from "./Typography";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  badge = "Our Committee",
  title,
  description,
  icon: Icon = Users,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-green-100 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative gradients */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-amber-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Icon className="h-4 w-4 mr-2" />
            <span className="font-medium text-sm">{badge}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Typography variant="h1" gradient className="mb-4">
              {title}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Typography variant="body" className="text-gray-700 max-w-3xl mx-auto">
              {description}
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
