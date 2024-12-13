// BlogContent.tsx (Client Component)
"use client";

import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import { motion } from "framer-motion";

type BlogContentProps = {
  projects: any[]; // Replace with your project type
  locale: string;
};

export default function BlogContent({ projects, locale }: BlogContentProps) {
  const getCategorySlug = (category: string) => {
    switch (category) {
      case "Tin Noi Bo":
        return "tin-noi-bo";
      case "Tin Chuyen Nganh":
        return "tin-chuyen-nganh";
    }
  };

  const formatDateTime = (date: Date) => {
    return moment(date).format("YYYY-MM-DDTHH:mm:ss");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto">
      <motion.div
        className="flex flex-col lg:flex-row justify-between"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.article className="w-[90%] hidden lg:block" variants={itemVariants}>
          {projects
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 1)
            .map((project) => (
              <motion.div
                key={project._id}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.name} - Nam Viet JSC`}
                    className="object-cover rounded-sm h-64 hover:opacity-90 transition duration-300"
                    width={1920}
                    height={1080}
                    priority
                  />
                )}
                <div>
                  <Link href={`/${locale}/projects/${project.slug}`}>
                    <motion.h1
                      className="my-4 font-bold text-4xl hover:text-customRed transition duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.name}
                    </motion.h1>
                  </Link>

                  <div className="text-gray-500 flex items-center">
                    <Link
                      href={`/${locale}/projects/${getCategorySlug(project.category)}`}
                      className="hover:text-customRed transition duration-300 pr-1"
                    >
                      {project.category}
                    </Link>
                    |
                    <time dateTime={formatDateTime(project.createdAt)} className="pl-1">
                      {moment(project.createdAt).format("MMMM D, YYYY")}
                    </time>
                  </div>

                  <motion.div
                    className="text-lg text-gray-700 mt-4 truncate-lines"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <PortableText value={project.content} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.article>

        <div
          className="hidden lg:block lg:w-px lg:bg-gray-700 lg:mx-10 lg:h-auto"
          role="separator"
        />

        <motion.section
          className="flex flex-col lg:w-[60%] space-y-5"
          variants={containerVariants}
          aria-label="Bài viết gần đây | Recent Articles"
        >
          {projects
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(1, 6)
            .map((project, index) => (
              <motion.article
                key={project._id}
                className="blog-post"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                custom={index}
              >
                <Link href={`/${locale}/projects/${project.slug}`}>
                  <h2 className="my-2 font-extrabold text-xl hover:text-customRed transition duration-300">
                    {project.name}
                  </h2>
                </Link>
                <div className="text-gray-500 flex items-center">
                  <Link
                    href={`/${locale}/projects/${getCategorySlug(project.category)}`}
                    className="hover:text-customRed transition duration-300 pr-1"
                  >
                    {project.category}
                  </Link>
                  |
                  <time dateTime={formatDateTime(project.createdAt)} className="pl-1">
                    {moment(project.createdAt).format("MMMM D, YYYY")}
                  </time>
                </div>
                <div className="h-px bg-gray-400 mt-4"></div>
              </motion.article>
            ))}
        </motion.section>
      </motion.div>
    </div>
  );
}
