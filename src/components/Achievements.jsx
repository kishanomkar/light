'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    type: 'award',
    title: 'Hackathon Winner 🏆',
    description: 'First place in the local "Code for a Cause" hackathon for building an emergency response app.',
  },
  {
    type: 'certification',
    title: 'Certified TensorFlow Developer',
    description: 'Completed and passed the official TensorFlow Developer Certification exam.',
  },
  {
    type: 'award',
    title: 'Top Coder Award',
    description: 'Recognized as a top performer in a national coding competition with over 500 participants.',
  },
  {
    type: 'certification',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Demonstrated knowledge of AWS cloud concepts, services, and security.',
  },
];

export const Achievements = () => {
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
    <section id="achievements" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Achievements & Certifications</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((ach, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between p-6 shadow-md transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-4">
                    {ach.type === 'award' ? <FaTrophy size={32} className="text-yellow-500" /> : <FaCertificate size={32} className="text-blue-500" />}
                    <CardTitle className="text-lg font-semibold">{ach.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{ach.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};