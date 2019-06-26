export default {
  title: 'File Downloads',
  name: 'fileDownloads',
  type: 'object',
  fields: [{
      name: 'fileTitle',
      title: 'File Title',
      type: 'string'
    }, {
      name: 'fileUrl',
      title: 'File URL',
      type: 'url'
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      validation: Rule => Rule.required()
    }
  ]
}