import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from "./config/client-config";

// export async function getMenu(): Promise<Menu[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "menu"]{
//       _id,
//       file{
//         asset->{
//           _id,
//           url
//         },
//         description,
//         transcript
//       }
//     }`
//   );
// }

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      createdAt,
      category,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "imageAlt": image.alt,
      url,
      content[] {
        ...,
        asset->{
          _id,
          url
        }
      },
      file{
        asset->{
          _id,
          url
        },
        description,
        transcript
      }
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      createdAt,
      category,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "imageAlt": image.alt,
      url,
      content[] {
        ...,
        asset->{
          _id,
          url
        }
      },
      file{
        asset->{
          _id,
          url
        },
        description,
        transcript
      }
    }`,
    { slug }
  );
}
