# The React, Redux, Responsive design Code Test

## Setup

```
npm install
npm run dev
```

## Objective

Create a web application that creates, reads and deletes contacts to/from a Firebase database.
This repository is already set up as a Next.js application, with Redux connected via the `withRedux` 
higher-order component. Skeleton.css is also included here, which is used throughout the designs.

Design screenshots can be found in the `designs/` folder. Mobile, tablet, and desktop designs are provided. 
On mobile, the contacts table is shown, with a button that toggles the visibility of the contact creation form. 
On tablet, both contacts table and contact creation form are shown in a single column. On desktop, the contacts table 
is shown on the right, and the contact creation form on the left.

## Requirements

- Basic form validation (required fields)
- Create a contact
- Read contacts
- Delete contact
- Empty state when listing contacts
- Usage of Redux for contacts
- Usage of Firebase database
- Responsive layout changes

## Brownie points

- Complete the beloved **CRUD** acronym with **updating** a contact, ideally on its own page
- Display a loader when retrieving/sending data from/to Firebase
- Server-side rendering of contacts
