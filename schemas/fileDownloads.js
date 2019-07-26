export default {
  title: 'File Downloads',
  name: 'fileDownloads',
  type: 'object',
  fields: [{
      name: 'fileTitle',
      title: 'File Title',
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
}