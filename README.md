# React + TypeScript + Vite - Movie Rating App
## Description
Movie Rating App
A web application to rate movies you have watched, built with React and Vite, using the TMDB API for movie data and JSON Server for a mock backend.

## Features
Browse popular movies from TMDB
Search for movies
View information about a movie
Rate movies

## Installation
### Prerequisites
- Node.js
- npm or yarn
- JSON Server

## Setup
Clone the repository:
- git clone https://github.com/yourusername/movie-rating-app.git
- cd movie-rating-app

## Install dependencies:
- npm install
### or
 - yarn install

## Create a .env file in the root of the project and add your TMDB API key:
- VITE_TMDB_ACCESS_TOKEN=your_tmdb_access_token
- VITE_JSON_SERVER_API=http://localhost:12413/rated-movies

## Start JSON Server:
- npm json-server --watch db.json --port 12413

## Start the development server:
- npm run dev

## This project is created for learning purposes and feel free to do with it as you like:)
