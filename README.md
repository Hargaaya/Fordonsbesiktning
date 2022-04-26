# Fordonsbesiktning

Web app that helps you with inspecting vehicles according to TSFS 2017:54

## Current problem & Purpose

Currently it is quite hard to find resources concerning vehicle inspections that are easy to use. My aim is to present the information regarding vehicle inspections in a simple way but also create a tool that can be used to inspect a vehicle according to the standard.

The information should be easy to find and understand (Information = Bilaga 1, TSFS 2017:54). Assisting the user to find the desired information there should be a easy navigation and a live search function, maybe even a auto-complete search.

For the tooling, there should be two tiers to it. The first tier should satisfy the requirements of a basic user while the second tier should satisfy the requirements of an advanced user.

### What does the tools help with?

The tool should be used to assist the inspection of a vehicle through step-by-step guide. The amount of details should be tailored to the tiers previously mentioned. For the advanced user there should be a way to note down the observations during the inspection according to the standards specified by TSFS 2017:54

## Workflow

- Assess the scope of the project
  - Assess the core functions
  - Set a timeframe 😂
- Create a simple design guide
  - Color, font & style
  - Wireframe draft
  - Prototype
- Build the application
  - Choose the tooling
    - Frontend
    - Backend
    - Database
    - Hosting solution
  - Build the application
  - Host the completed application 🥳

## Design Guide & Wireframe (May be changed in the near future)

### Design Guide

![Guideline](/Design/Guideline.png)

### Wireframe + Prototype

![Prototype](/Design/PrototypeDraft1.gif)

## Platforms/Framework/Tools (May be updated)

The premise of the project is to use the .NET framework to an extent that would be considered comprehensive. But also the ability to develop the frontend and backend separately. Therefore, the application will have a content delivery API coupled with a frontend application. ASP.NET Web API is undoubtedly the best choice for the backend in this situation, and that is what we are going with.

The .NET framework provides Blazor, which utilizes WASM for frontend applications. This implies that the page requires the entire .NET runtime together with the application DLL libraries to be downloaded to the browser before the initial render. In contrast, React and Vue are built on Javascript and require lightweight JS files, which translates to faster initial render and load times. Thus, I see no significant reason to choose Blazor over React or Vue other than to satisfy the initial premise of comprehensive .NET usage.

Because our application is mostly document-based, the only logical choice for a database would be a NoSQL one. There are numerous NoSQL alternatives available, but the most well-known ones are MongoDB, CouchDB, and RavenDB for documents. Without question, MongoDB is the most popular document store, with broad support and extensive documentation. Aside from its popularity, MongoDB offers a large toolbox that fits our needs.

**Frontend**: React
**Backend**: ASP.NET Core
**Database**: MongoDB, MSQL (Accounts)

## Completed product (In progress)
