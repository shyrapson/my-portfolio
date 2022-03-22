export default {
  name: "experiences",
  title: "experiences",
  type: "document",

  fields: [
    {
      name: "years",
      title: "Years",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: 'workExperience' }],
    },
  ],
};
