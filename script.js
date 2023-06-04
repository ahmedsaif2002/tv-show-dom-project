//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();

function setup() {
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById('root');
  episodeList.forEach((episode) => {
  const episodeDiv = document.createElement('div');
  // episodeDiv.style.backgroundColor = 'white';
  episodeDiv.style.width = '250px';
  episodeDiv.style.height = '400px';

  const h1 = document.createElement('h1');
  h1.style.color = 'black';
  h1.textContent = episode.name;

  const img = document.createElement('img');
  img.src = episode.image.medium;
  
  const p = document.createElement('p');
  p.textContent = episode.summary;
  p.style.width ='250px'
  p.style.width = "250px";

const episodeCode = generateEpisodeCode(episode.season, episode.number);
const episodeCodeElem = document.createElement("p");
episodeCodeElem.textContent = episodeCode;

  episodeDiv.appendChild(h1);
  episodeDiv.appendChild(episodeCodeElem);
  episodeDiv.appendChild(img);
  episodeDiv.appendChild(p);
  rootElem.appendChild(episodeDiv);
});
}
function generateEpisodeCode(seasonNumber, episodeNumber) {
  const paddedSeason = seasonNumber.toString().padStart(2, "0");
  const paddedEpisode = episodeNumber.toString().padStart(2, "0");
  const episodeCode = `S${paddedSeason}E${paddedEpisode}`;
  return episodeCode;
}
window.onload = setup;
