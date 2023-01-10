import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: "main",
      title: "Main",
      type: "string",
    }),
    defineField({
      name: "aboutImage",
      title: "AboutImage",
      type: "image",
    }),
   ]
});
