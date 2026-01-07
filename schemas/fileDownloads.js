import {defineType} from 'sanity'

export default defineType({
  title: 'File Downloads',
  name: 'fileDownloads',
  type: 'object',
  fields: [{
      name: 'fileTitle',
      title: 'File Title',
      type: 'string'
    },
    {
      name: 'displayTitle',
      title: 'File Display Title',
      description: 'This will be the name of the file as displayed on the front end.  If left blank, the title will default to the file title (above).',
      type: 'string'
    },
    {
      title: 'Dropbox/WeTransfer Link (Optional)',
      description: 'This link will override the required file upload field below',
      name: 'fileUrl',
      type: 'string'
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      validation: Rule => Rule.required()
    }, {
      name: 'vimeoId',
      title: 'Vimeo ID',
      type: 'string'
    }, {
      name: 'vimeoImage',
      title: 'Vimeo Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
})
