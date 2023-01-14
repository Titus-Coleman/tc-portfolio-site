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
      name: 'image',
      title: 'About Image',
      type: 'cloudinary.asset',
      description: 'IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
   ]
});
