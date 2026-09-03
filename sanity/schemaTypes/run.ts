import { defineType, defineField } from 'sanity'

export const run = defineType({
  name: 'run',
  title: 'Run',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'runType',
      title: 'Run Type',
      type: 'string',
      options: {
        list: [
          { title: 'Thursday', value: 'thursday' },
          { title: 'Sunday', value: 'sunday' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'guest',
      title: 'Guest (Thursday runs only)',
      type: 'string',
    }),
    defineField({
      name: 'activities',
      title: 'Activities (Sunday runs only)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'registrationFormUrl',
      title: 'Registration Form URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
        ],
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
    }),
  ],
})