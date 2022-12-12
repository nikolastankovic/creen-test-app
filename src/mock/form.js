export const addControls = [
  {
    name: 'title',
    type: 'text',
    label: 'Title',
    required: true,
    readOnly: false,
  },
  {
    name: 'nameOfAuthor',
    type: 'text',
    label: 'Author',
    required: true,
    readOnly: false,
  },
  {
    name: 'dateOfBirthAuthor',
    type: 'date',
    label: '',
    required: true,
    readOnly: false,
  },
  {
    name: 'numberOfPages',
    type: 'number',
    label: 'Number of pages',
    required: true,
    readOnly: false,
  },
  {
    name: 'yearOfPublishing',
    type: 'number',
    label: 'Year of publishing',
    required: true,
    readOnly: false,
  },
  {
    name: 'quantity',
    type: 'number',
    label: 'Quanity',
    required: true,
    readOnly: false,
  },
  {
    name: 'coverPhoto',
    type: 'text',
    label: 'Cover Photo',
    required: false,
    readOnly: false,
  }
]

export const editControls = [
  {
    name: 'title',
    type: 'text',
    label: 'Title',
    required: false,
    readOnly: true,
  },
  {
    name: 'nameOfAuthor',
    type: 'text',
    label: 'Author',
    required: false,
    readOnly: true,
  },
  {
    name: 'dateOfBirthAuthor',
    type: 'date',
    label: '',
    required: false,
    readOnly: true,
  },
  {
    name: 'numberOfPages',
    type: 'number',
    label: 'Number of pages',
    required: false,
    readOnly: true,
  },
  {
    name: 'yearOfPublishing',
    type: 'number',
    label: 'Year of publishing',
    required: false,
    readOnly: true,
  },
  {
    name: 'quantity',
    type: 'number',
    label: 'Quanity',
    required: false,
    readOnly: false,
  },
  {
    name: 'coverPhoto',
    type: 'text',
    label: 'Cover Photo',
    required: false,
    readOnly: true,
  }
]
