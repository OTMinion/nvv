import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";

export const revalidate = 60;

interface RightBlogProps {
  width?: string;
  params?: {
    locale: string;
  };
  locale?: string;
}

function formatDate(dateString: Date) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export default async function RightBlog({ width, params, locale: propLocale }: RightBlogProps) {
  // Get locale from either params or propLocale, fallback to "vn"
  const locale = params?.locale || propLocale || "vn";
  unstable_setRequestLocale(locale);

  const projects = await getProjects();
  const componentWidth = width;

  const getCategorySlug = (category: string) => {
    switch (category) {
      case "Tin Noi Bo":
        return "tin-noi-bo";
      case "Tin Chuyen Nganh":
        return "tin-chuyen-nganh";
      default:
        return "";
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
          <div key={project._id}>
            <div className="flex justify-between">
              <div className="flex flex-col w-[59%]">
                <Link href={`/${locale}/projects/${project.slug}`}>
                  <p className="text-md font-bold hover:text-customRed transition duration-300">
                    {project.name}
                  </p>
                </Link>
                <p className="text-sm text-gray-500 mt-4">
                  <Link
                    href={`/${locale}/projects/${getCategorySlug(project.category)}`}
                    className="hover:text-customRed transition duration-300 pr-1"
                  >
                    {project.category}
                  </Link>
                  | {formatDate(project.createdAt)}
                </p>
              </div>
              <Link href={`/${locale}/projects/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  className="object-cover rounded-sm h-28 w-36 hover:opacity-90 transition-opacity"
                  width={144}
                  height={112}
                />
              </Link>
            </div>
            <div className="h-px bg-gray-300 my-5" />
          </div>
        ))}
    </div>
  );
}
