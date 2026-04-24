'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaUserFriends, FaHeart } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Community = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="community" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Community & Volunteering</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full flex flex-col items-center p-8 text-center shadow-lg transition-transform hover:scale-[1.02] hover:shadow-2xl">
              <FaGithub size={48} className="text-primary mb-6" />
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold">Open Source Contributions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Actively contribute to open-source projects on GitHub, helping improve and maintain software for the community.
                </p>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary hover:underline">
                  View My GitHub
                </a>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full flex flex-col items-center p-8 text-center shadow-lg transition-transform hover:scale-[1.02] hover:shadow-2xl">
              <FaUserFriends size={48} className="text-primary mb-6" />
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold">Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Volunteering as a mentor for aspiring developers, sharing knowledge and guiding them on their coding journey.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full flex flex-col items-center p-8 text-center shadow-lg transition-transform hover:scale-[1.02] hover:shadow-2xl">
              <FaHeart size={48} className="text-primary mb-6" />
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold">Volunteering</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Contributing my skills to non-profit organizations and community projects to make a positive impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};