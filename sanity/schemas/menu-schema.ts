const menu = {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      name: "file",
      title: "File",
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
        // You can add more fields as needed
      ],
    },
  ],
};

export default menu;
