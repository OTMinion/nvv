import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
export const revalidate = 60;

interface RightBlogProps {
  width?: string;
}

export default async function RightBlog({ width }: RightBlogProps) {
  const projects = await getProjects();

  const componentWidth = width;

  const getCategorySlug = (category: string) => {
    switch (category) {
      case "Tin Noi Bo":
        return "tin-noi-bo";
      case "Tin Chuyen Nganh":
        return "tin-chuyen-nganh";
      // case "Tin Bao Chi":
      //   return "tin-bao-chi";
      // Default case if category doesn't match
    }
  };

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
                  <Link
                    href={`/projects/${getCategorySlug(project.category)}`}
                    key={project._id}
                    className=" hover:text-customRed transition duration-300 pr-1"
                  >
                    {project.category}
                  </Link>
                  | {moment(project.createdAt).format("MM/DD/YYYY")}
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
