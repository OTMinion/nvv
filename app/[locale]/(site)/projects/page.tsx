import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import RightBlog from "@/components/menu/rightBlog";

export const revalidate = 60;

function formatDate(dateString: Date) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export default async function Blog({ params: { locale } }: { params: { locale: string } }) {
  const projects = await getProjects();

  const getCategorySlug = (category: string) => {
    switch (category) {
      case "Tin Noi Bo":
        return "tin-noi-bo";
      case "Tin Chuyen Nganh":
        return "tin-chuyen-nganh";
      // Default case if category doesn't match
      default:
        return "";
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
            <Link href={`/${locale}`}>Trang chu</Link>
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
              <Link href={`/${locale}/projects/${getCategorySlug("Tin Chuyen Nganh")}`}>Xem tat ca</Link>
            </div>

            <div className="h-px bg-black my-7" />

            <div className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinChuyenNganhProjects.slice(0, 2).map((project) => (
                  <div key={project._id}>
                    <Link href={`/${locale}/projects/${project.slug}`}>
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
                        href={`/${locale}/projects/${getCategorySlug(project.category)}`}
                        className="hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p>| {formatDate(project.createdAt)}</p>
                    </div>
                    <div className="h-px bg-gray-300 my-3" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinChuyenNganhProjects.slice(2, 4).map((project) => (
                  <div key={project._id}>
                    <Link href={`/${locale}/projects/${project.slug}`} className="block">
                      <h1 className="font-bold my-2 truncate-news h-12">{project.name}</h1>
                    </Link>
                    <div className="flex text-gray-400">
                      <Link
                        href={`/${locale}/projects/${getCategorySlug(project.category)}`}
                        className="hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p>| {formatDate(project.createdAt)}</p>
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
                href={`/${locale}/projects/${getCategorySlug("Tin Noi Bo")}`}
                className="hover:text-customRed transition duration-300 pr-1"
              >
                Xem tat ca
              </Link>
            </div>

            <div className="h-px bg-black my-7" />

            <div className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinNoiBoProjects.slice(0, 2).map((project) => (
                  <div key={project._id}>
                    <Link href={`/${locale}/projects/${project.slug}`}>
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
                        href={`/${locale}/projects/${getCategorySlug(project.category)}`}
                        className="hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p>| {formatDate(project.createdAt)}</p>
                    </div>
                    <div className="h-px bg-gray-300 my-3" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tinNoiBoProjects.slice(2, 4).map((project) => (
                  <div key={project._id}>
                    <Link href={`/${locale}/projects/${project.slug}`} className="block">
                      <h1 className="font-bold my-2 truncate-news h-12">{project.name}</h1>
                    </Link>
                    <div className="flex text-gray-400">
                      <Link
                        href={`/${locale}/projects/${getCategorySlug(project.category)}`}
                        className="hover:text-customRed transition duration-300 pr-1"
                      >
                        {project.category}
                      </Link>
                      <p>| {formatDate(project.createdAt)}</p>
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
