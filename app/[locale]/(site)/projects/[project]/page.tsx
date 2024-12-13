import RightBlog from "@/components/menu/rightBlog";
import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";

type Props = {
  params: { project: string };
};

interface PortableTextBlock {
  _key: string;
  _type: string;
  asset?: {
    _ref?: string;
    url?: string;
  };
}

interface ImageBlock {
  _type: "image";
  _key: string;
  asset: {
    url: string;
  };
  alt?: string;
}

interface VideoBlock {
  _type: "video";
  _key: string;
  asset: {
    url: string;
  };
}

interface TextSpan {
  _type: "span";
  text: string;
  marks?: string[];
}

type TextChildren = TextSpan[];

function isImageBlock(block: PortableTextBlock): block is ImageBlock {
  return block._type === "image" && block.asset !== undefined;
}

function isVideoBlock(block: PortableTextBlock): block is VideoBlock {
  return block._type === "video" && block.asset !== undefined;
}

function renderRichText(blocks: TextChildren) {
  return blocks.map((block, index) => {
    if (block._type === "span") {
      let style = "";
      if (block.marks) {
        if (block.marks.includes("strong")) style += "font-bold ";
        if (block.marks.includes("em")) style += "italic ";
        if (block.marks.includes("underline")) style += "underline ";
      }
      return (
        <span key={index} className={style.trim()}>
          {block.text}
        </span>
      );
    }
    return null;
  });
}

export const revalidate = 60;

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 pr-8">
          <div className="mx-6 lg:ml-28 lg:mr-16">
            <header className="flex flex-col">
              <nav className="flex space-x-4 text-xl mt-10 mb-5" aria-label="Breadcrumb">
                <p>Trang chủ</p>
                <span>|</span>
                <p>News</p>
                <span>|</span>
                <p>{project.category}</p>
              </nav>

              <h1 className="text-3xl font-extrabold">{project.name}</h1>
            </header>

            <article className="text-lg text-gray-700 mt-5">
              {project.content.map((block) => {
                if (isImageBlock(block)) {
                  return (
                    <div className="flex flex-col items-center mb-8" key={block._key}>
                      <Image
                        src={block.asset.url}
                        alt={block.alt || `${project.name} - Nam Viet JSC`}
                        width={700}
                        height={600}
                        className="w-[50rem] h-[30rem] object-cover"
                      />
                      {block.alt && (
                        <div className="w-full text-center mt-2">
                          <p className="text-gray-600 text-sm italic">{block.alt}</p>
                        </div>
                      )}
                    </div>
                  );
                } else if (isVideoBlock(block)) {
                  return (
                    <figure className="flex flex-col items-center my-8" key={block._key}>
                      <div className="relative overflow-hidden rounded-lg shadow-md">
                        <video
                          src={block.asset.url}
                          controls
                          className="w-[50rem] h-[30rem] object-cover"
                          title={`${project.name} video - Nam Viet JSC`}
                        />
                      </div>
                    </figure>
                  );
                } else if (block._type === "block" && Array.isArray(block.children)) {
                  return (
                    <p className="mb-4 leading-relaxed" key={block._key}>
                      {block.children ? renderRichText(block.children) : ""}
                    </p>
                  );
                }
                return null;
              })}
            </article>
          </div>
        </div>

        <aside className="lg:w-1/3">
          <RightBlog />
        </aside>
      </div>
    </div>
  );
}
