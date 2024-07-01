import { Suspense } from "react";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import RightBlog from "@/components/menu/rightBlog";

export const revalidate = 60;

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
  // Filter projects by category and sort by the latest date
  const tinChuyenNganhProjects = projects
    .filter((project) => project.category === "Tin Chuyen Nganh")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const tinNoiBoProjects = projects
    .filter((project) => project.category === "Tin Noi Bo")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image src="/images/news.jpg" alt="logo" width={2000} height={2000} className="object-cover h-96" />
        <div className="absolute ml-10 bottom-0 mb-20 flex flex-col text-white">
          <div className="flex text-lg">
            <Link href="/">Trang chu</Link>
            <div className="mx-2 mb-4"> | </div>
            <p>Tin Tuc</p>
          </div>

          <h1 className="text-6xl font-bold">Tin Tuc</h1>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          {/* Tin Chuyen Nganh */}

          <div className="mx-6 lg:ml-28 lg:mr-16 flex flex-col mt-10">
            <div className="flex justify-between -mb-5 text-gray-600">
              <h1>Tin Chuyen Nganh</h1>
              <Link href="/projects/tin-chuyen-nganh">Xem tat ca</Link>
            </div>

            <div className="h-px bg-black my-7" />

            <div className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinChuyenNganhProjects.slice(0, 2).map((project) => (
                  <div key={project._id}>
                    <Link href={`/projects/${project.slug}`} className="flex flex-col">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1080}
                        className="object-cover h-52"
                      />
                      <h1 className="font-bold my-2 overflow-y-hidden truncate-news h-12">{project.name}</h1>
                    </Link>
                    <div className="flex text-gray-400">
                      <Link
                        href={"/projects/tin-chuyen-nganh"}
                        className=" hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p className="ml-1">| {moment(project.createdAt).format("MM/DD/YYYY")}</p>
                    </div>
                    <div className="h-px bg-gray-300 my-3" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinChuyenNganhProjects.slice(2, 4).map((project) => (
                  <div key={project._id}>
                    <Link href={`/projects/${project.slug}`} className="flex flex-col">
                      <h1 className="font-bold my-2 truncate-news h-12">{project.name}</h1>
                    </Link>
                    <div className="flex text-gray-400">
                      <Link
                        href={"/projects/tin-chuyen-nganh"}
                        className=" hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p className="ml-1">| {moment(project.createdAt).format("MM/DD/YYYY")}</p>
                    </div>
                    <div className="h-px bg-gray-300 my-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tin Noi Bo */}
          <div className="mx-6 lg:ml-28 lg:mr-16 flex flex-col mt-10">
            <div className="flex justify-between -mb-5 text-gray-600">
              <h1>Tin Noi Bo</h1>
              <Link
                href="/projects/tin-noi-bo"
                className=" hover:text-customRed transition duration-300 pr-1"
              >
                Xem tat ca
              </Link>
            </div>

            <div className="h-px bg-black my-7" />

            <div className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinNoiBoProjects.slice(0, 2).map((project) => (
                  <div key={project._id}>
                    <Link href={`/projects/${project.slug}`} className="flex flex-col">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1080}
                        className="object-cover h-52"
                      />
                      <h1 className="font-bold my-2 overflow-y-hidden truncate-news h-12">{project.name}</h1>
                    </Link>
                    <div className="flex text-gray-400">
                      <Link
                        href={"/projects/tin-noi-bo"}
                        className=" hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p className="ml-1">| {moment(project.createdAt).format("MM/DD/YYYY")}</p>
                    </div>
                    <div className="h-px bg-gray-300 my-3" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinNoiBoProjects.slice(2, 4).map((project) => (
                  <div key={project._id}>
                    <Link href={`/projects/${project.slug}`} className="flex flex-col">
                      <h1 className="font-bold my-2 truncate-news h-12">{project.name}</h1>
                    </Link>
                    <div className="flex text-gray-400">
                      <Link
                        href={"/projects/tin-noi-bo"}
                        className=" hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p className="ml-1">| {moment(project.createdAt).format("MM/DD/YYYY")}</p>
                    </div>
                    <div className="h-px bg-gray-300 my-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <RightBlog width="1700px" />
      </div>
    </div>
  );
}
