const TILE_SIZE = 50; // 50px X 50px
const wrapper = document.getElementById('tiles');

const colors = [
  'rgba(229, 57,53)',
  'rgba(253, 216, 53)',
  'rgba(244, 81,30)',
  'rgba(76, 175, 80)',
  'rgba(33, 150, 243)',
  'rgba(156, 39, 176)',
];

let clickCounter = 0;
const handleOnClick = (index, columns, rows) => {
  clickCounter = clickCounter + 1;

  const tileColor = colors[clickCounter % (colors.length - 1)];

  anime({
    targets: '.tile',
    easing: 'easeOutExpo',
    backgroundColor: tileColor,
    delay: anime.stagger(TILE_SIZE, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createTile = (index, onClick) => {
  const tile = document.createElement('div');
  tile.classList.add('tile');

  tile.onclick = () => onClick(index);

  return tile;
};

const createTiles = (elementWrapper, quantity, onClick) => {
  Array.from(Array(quantity)).map((_, index) => {
    elementWrapper.appendChild(createTile(index, onClick));
  });
};

const createGrid = (elementWrapper, tileSize) => {
  elementWrapper.innerHTML = '';

  const columns = Math.floor(document.body.clientWidth / tileSize);
  const rows = Math.floor(document.body.clientHeight / tileSize);

  elementWrapper.style.setProperty('--columns', columns);
  elementWrapper.style.setProperty('--rows', rows);

  const onClick = index => handleOnClick(index, columns, rows);
  createTiles(elementWrapper, columns * rows, onClick);
  console.log(`Grid created with ${columns} columns and ${rows} rows`);
};

window.onload = window.onresize = () => createGrid(wrapper, TILE_SIZE);
createGrid(wrapper, TILE_SIZE);
