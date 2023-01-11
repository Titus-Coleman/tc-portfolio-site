import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "HeroImage",
      type: "cloudinary.asset",
    }),
   ]
});
