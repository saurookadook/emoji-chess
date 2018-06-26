From 'npm run build' command:

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  36.94 KB  build/static/js/main.a0b7d8d3.js
  299 B     build/static/css/main.c17080f1.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr




Flow:
  - index
    - App
      - NavBar (stateless)
      - GamesPage
        - GamesList
          - GamesListItem (stateless)
      - GameArea (pass state as props (default vs in session?))
        - GameArea
          - Board (receives current game state as props)
          - MoveLog (receives current game state as props)
          - PieceKey (stateless....for now)


(could put this in reducer for 'DEFAULT_BOARD')
BoardDefault = {
  0: [A8: BlRook, B8: BlKnight, C8: BlBishop, D8: BlQueen, E8: BlKing, F8: BlBishop, G8: BlKnight, H8: BlRook],
  1: [A7: BlPawn, B7: BlPawn, C7: BlPawn, D7: BlPawn, E7: BlPawn, F7: BlPawn, G7: BlPawn, H7: BlPawn],
  2: [A6: "", B6: "", 6C: "", D6: "", E6: "", F6: "", G6: "", H6: ""],
  3: [A5: "", B5: "", C5: "", D5: "", E5: "", F5: "", G5: "", H5: ""],
  4: [A4: "", B4: "", C4: "", D4: "", E4: "", F4: "", G4: "", H4: ""],
  5: [A3: "", B3: "", C3: "", D3: "", E3: "", F3: "", G3: "", H3: ""],
  6: [A2: WhPawn, B2: WhPawn, C2: WhPawn, D2: WhPawn, E2: WhPawn, F2: WhPawn, G2: WhPawn, H2: WhPawn],
  7: [A1: WhRook, B1: WhKnight, C1: WhBishop, D1: WhQueen, E1: WhKing, F1: WhBishop, G1: WhKnight, H1: WhRook]
}
