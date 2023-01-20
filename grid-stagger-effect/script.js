const TILE_SIZE = 50; // 50px X 50px
const wrapper = document.getElementById('tiles');

const createTile = index => {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  return tile;
};

const createTiles = (elementWrapper, quantity) => {
  Array.from(Array(quantity)).map((_, index) => {
    elementWrapper.appendChild(createTile(index));
  });
};

const createGrid = (elementWrapper, tileSize) => {
  elementWrapper.innerHTML = '';

  const columns = Math.floor(document.body.clientWidth / tileSize);
  const rows = Math.floor(document.body.clientHeight / tileSize);

  elementWrapper.style.setProperty('--columns', columns);
  elementWrapper.style.setProperty('--rows', rows);

  createTiles(elementWrapper, columns * rows);
  console.log(`Grid created with ${columns} columns and ${rows} rows`);
};

window.onload = window.onresize = () => createGrid(wrapper, TILE_SIZE);
createGrid(wrapper, TILE_SIZE);
