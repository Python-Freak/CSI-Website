## CSI - Nirma Website

### Frontend

- **For now just the client (i.e the frontend) has been created**
- **You guys will be working under client folder for the backend**


#### General Instructions:

- Under the client folder a src/Pages subfolder is created. All the new pages will be added there.
- Please DON'T mess with **webpack.config.js** and **.babelrc** files, takes an eternity to setup
- Ignore any **warning** by webpack not **errors**.
- To run the development server run the following command inside the client folder
  **`npm run serve`**
  More info in package.json
- All the path to the assets should be absolute starting from **"/assets/[whatever]"**
- I have configured react-bootstrap so you can use any prebuilt component it provides.
- All the samples are available on the sample branch of this repo

#### Naming Instructions:

- The name of all pages should be in **PascalCase** and not in **camelCase**
- Variable names should be sensible and should follow **camelCase**

#### Guide to components:

- Each page can have multiple sub-components, so if a page has (Page-Specific) components each of the Page Folder should also have a Components Folder
- The one who creates a new page is responsible for adding it to the React-Router in the **src/App.js**.
- For the components that are reused between multiple pages a global Components folder has been **src/Components**.

#### Commiting changes and branching

- You will commit your changes to the **dev** branch
- The **main** and **dev** branches will be clean.
- To check which branch you are working in, type: **`git branch`**
- If you are working on the **main** branch, then switch to **sample** branch using the command **`git checkout sample`**
- Now, to add your contirbution in a branch with your name like this: **dev_name**
- Use command **`git checkout -b branch_name`** to create your branch

