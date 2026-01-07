import {defineType} from 'sanity'
import {MdLocalMovies} from 'react-icons/md'

export default defineType({
  icon: MdLocalMovies,
  name: 'movie',
  title: 'Films',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime'
    },
    {
      name: 'previewDates',
      title: 'Preview Date (Optional)',
      description: 'This date will override the visual representation of the date in the frontend',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'fileDownloads',
      title: 'File Downloads',
      type: 'array',
      of: [{ type: 'fileDownloads' }]
    },
    {
      name: 'clipDownloads',
      title: 'Clip Downloads',
      type: 'array',
      of: [{ type: 'fileDownloads' }]
    },
    {
      name: 'imagePreviews',
      title: 'Image Previews',
      type: 'array',
      description: 'These should ideally be web friendly, for any really high res images please put them in a download zip.',
      of: [{ type: 'image' }]
    }
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        { field: 'releaseDate.utc', direction: 'desc' }
      ]
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [
        { field: 'releaseDate.utc', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster'
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media
      }
    }
  }
})
