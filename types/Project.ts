import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  category: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  file: any;
};
