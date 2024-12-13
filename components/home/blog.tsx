// Blog.tsx (Server Component)
import { getProjects } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import BlogContent from "./BlogContent";
import BlogClient from "./blogClient";

type BlogProps = {
  params?: { locale: string };
  locale?: string;
};

export const metadata: Metadata = {
  title: "Tin tức Nam Viet | Nam Viet News - Thức ăn chăn nuôi",
  description:
    "Cập nhật tin tức mới nhất về Nam Viet và ngành thức ăn chăn nuôi. Latest news about Nam Viet and animal feed industry.",
  openGraph: {
    title: "Tin tức Nam Viet | Nam Viet News",
    type: "article",
    locale: "vi_VN",
  },
};

export default async function Blog({ params, locale: propLocale }: BlogProps) {
  const projects = await getProjects();
  const locale = params?.locale || propLocale || "vn";

  return (
    <main className="flex flex-col mx-6 lg:mx-32 mb-16">
      <BlogClient />
      <BlogContent projects={projects} locale={locale} />
    </main>
  );
}
