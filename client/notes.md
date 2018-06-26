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
      - GameArea
        - Board
        - MoveLog
        - PieceKey (stateless)


BoardDefault = {
  0: [A8: BlRook, B8: BlKnight, C8],
      [A7 B7 C7 D7 E7 F7 G7 H7],
      [A6 B6 6C D6 E6 F6 G6 H6],
      [A5 B5 C5 D5 E5 F5 G5 H5],
      [A4 B4 C4 D4 E4 F4 G4 H4],
      [A3 B3 C3 D3 E3 F3 G3 H3],
      [A2 B2 C2 D2 E2 F2 G2 H2],
      [A1 B1 C1 D1 E1 F1 G1 H1]
}
