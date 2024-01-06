const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    // Dropdown field
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Tin Chuyen Nganh", value: "Tin Chuyen Nganh" },
          { title: "Tin Bao Chi", value: "Tin Bao Chi" },
          { title: "Tin Noi Bo", value: "Tin Noi Bo" },
          // Add more options as needed
        ],
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // Standard text block
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
          options: { hotspot: true },
        },
        {
          name: "video",
          title: "Video",
          type: "file",
          options: {
            accept: "video/*", // Accepts all video formats
          },
          fields: [
            {
              name: "description",
              type: "string",
              title: "Description",
            },
            {
              name: "transcript",
              type: "text",
              title: "Transcript",
            },
          ],
        },
        // You can add more block types as needed
      ],
    },
  ],
};

export default project;
