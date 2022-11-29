export default {
  name: "new",
  title: "New",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },

    {
      name: "launchAt",
      title: "Launch Scheduled At",
      type: "datetime",
    },
  ],
};
