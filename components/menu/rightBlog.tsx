import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
export const revalidate = 60;

interface RightBlogProps {
  width?: string; // The '?' makes the width prop optional
}

export default async function RightBlog({ width }: RightBlogProps) {
  const projects = await getProjects();

  // Define a default width if none is provided
  const defaultWidth = "3000px"; // You can adjust this default value as needed
  const componentWidth = width || defaultWidth;

  return (
    <div
      className={`lg:flex flex-col right-0 top-0 max-sm:hidden mt-10 lg:mr-10 mx-6`}
      style={{ width: componentWidth }}
    >
      <p className="text-xl text-gray-600 ">Tin Moi Nhat</p>
      <div className="h-px bg-black my-4" />

      {projects
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 8)
        .map((project) => (
          <>
            <Link href={`/projects/${project.slug}`} key={project._id} className="flex justify-between">
              <div className="flex flex-col w-[59%]">
                <p className="text-md font-bold">{project.name}</p>
                <p className="text-sm text-gray-500 mt-4">
                  {project.category} | {moment(project.createdAt).format("MM/DD/YYYY")}
                </p>
              </div>

              <Image
                src={project.image}
                alt={project.name}
                className="object-cover rounded-sm h-28 w-36"
                width={1920}
                height={1080}
              />
            </Link>

            <div className="h-px bg-gray-300 my-5" />
          </>
        ))}
    </div>
  );
}
