import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PortableText } from "@portabletext/react";
import moment from "moment";

export default async function Blog() {
  const projects = await getProjects();

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
    <div className="flex flex-col mx-6 lg:mx-32 mb-16">
      <div className="flex justify-between py-10">
        <h1 className="text-5xl font-bold">News</h1>
        <Button>
          <Link href={`/projects`}>View All</Link>
        </Button>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-[90%]">
            {projects
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Sort by createdAt in descending order
              .slice(0, 1)
              .map((project) => (
                <>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="object-cover rounded-sm h-64"
                      width={1920}
                      height={1080}
                    />
                  )}
                  <div>
                    <Link href={`/projects/${project.slug}`} key={project._id}>
                      <div className="my-4 font-bold text-4xl  hover:text-customRed transition duration-300">
                        {project.name}
                      </div>
                    </Link>

                    <div className="text-gray-500 flex">
                      <Link
                        href={`/projects/${getCategorySlug(project.category)}`}
                        key={project._id}
                        className=" hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      |<p className="pl-1">{moment(project.createdAt).format("MMMM D, YYYY")}</p>
                    </div>

                    <div className="text-lg text-gray-700 mt-4 truncate-lines">
                      <PortableText value={project.content} />
                    </div>
                  </div>
                </>
              ))}
          </div>

          {/* vertical line */}
          <div className="hidden lg:block lg:w-px lg:bg-gray-700 lg:mx-10 lg:h-auto"></div>

          <div className="flex flex-col w-[60%] space-y-5 ">
            {projects
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Sort by createdAt in descending order
              .slice(1, 6)
              .map((project) => (
                <div key={project._id}>
                  <Link href={`/projects/${project.slug}`}>
                    <div className="my-2 font-extrabold text-xl hover:text-customRed transition duration-300">
                      {project.name}
                    </div>
                  </Link>
                  <div className="text-gray-500">
                    {project.category} {moment(project.createdAt).format("MMMM D, YYYY")}
                  </div>

                  <div className="h-px bg-gray-400 mt-4"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
