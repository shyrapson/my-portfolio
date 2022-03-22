export default {
  name: "brands",
  title: "Brands",
  type: "document",
  fields: [
    {
      name: "image",
      title: "ImageUrl",
      type: "image",
      options: { hotspot: true },
    },
    { name: "name", title: "Name", type: "string" },
  ],
};
