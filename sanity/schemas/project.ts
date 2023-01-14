import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'priority',
      title: 'Priority',
      description: 'Prominence of the project',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: 'Details of the project',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Cloudinary Images',
      type: 'cloudinary.asset',
      description: 'IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt_image_text',
      title: 'Alt Image Text',
      type: 'text',
      description: 'Add text to the image',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: 'linkToSite',
      title: 'LinkToSite',
      type: 'url',
    }),
    defineField({
      name: 'linkToGitHub',
      title: 'LinkToGitHub',
      type: 'url',
    }),
  ],
});
