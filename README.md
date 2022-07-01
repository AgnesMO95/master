# Master thesis

This project is part of my master thesis, where the goal was to create a proof of concept for an application that count Osteoclasts by utilizing a deep learning algorithm. The project is created using the Next.js framework together with typescript.

## Table of content

- [Repository Structure](#repository-structure)
  - [Backend](#backend)
  - [Bomponents](#components)
  - [Pages](#pages)
  - [Public](#public)
  - [Redux](#redux)
  - [Styles](#styles)
- [Installation](#installation)
  - [Clone Repository](#clone-repository)
- [Run the application](#run-application)
- [Contribute](#contribute)

## Repository Structure

### Backend

This folder contains the backend code for this repository and is described further in the backend readme

### Components

This folder contains the different components in the project, such as the navigation bar, buttons and components for the different view

### Pages

This folder contains the different pages this application exist of

### Public

This folder contains the static files for this project

### Redux

This folder contains code for handling the Global state, that is implemented with Redux toolkit

### Styles

This folder contains the for the application wher Material UI v5 (MUI) is used

## Installation

In order to run the application the project needs to be cloned and the dependencies needs to be installed by a package manager, in the project npm is used. The application is only tested at windows.

### Clone Repository

In terminal of preference, go to directory you want the repository to be added. To clone the repository run the command:

```
git clone https://github.com/AgnesMO95/master.git
```

Direct into the folder oc_counter, and run:

```
npm install
```

## Run the application

In order to run the application both the back-end server and the front-end development server must run. How to start the back-end server is explained in the back-end readme.

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. In order to see the detailed view, the image used need to be uploaded in the public folder, as the application cannot handle the sie of the image in that viwe

## Contribute

In order to contribute to the application create a branch from develop, called the tasks name and commit with explainatory messages and request a merge to the development branch.
