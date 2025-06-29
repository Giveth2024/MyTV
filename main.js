const channels = [
  {
    id: "ArkTV.ug",
    logo: "https://i.imgur.com/yCHNZXD.png",
    name: "Ark TV (1080p)",
    url: "https://stream.hydeinnovations.com/arktv-international/index.fmp4.m3u8",
    group: "Religious",
      needsProxy: false  // or false depending on the channel
  },
  {
    id: "3ABNTVUganda.ug",
    logo: "https://i.imgur.com/mml9lI2.png",
    name: "3ABN TV Uganda (720p)",
    url: "https://3abn.bozztv.com/3abn/3abn_uganda_live/index.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "ABNAfrica.us",
    logo: "https://i.imgur.com/SLrX8Ef.png",
    name: "ABN Africa (480p)",
    url: "https://mediaserver.abnvideos.com/streams/abnafrica.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "ACWUGTV.ug",
    logo: "https://i.imgur.com/8pzEmcJ.jpeg",
    name: "ACW UG TV (480p)",
    url: "https://live.acwugtv.com/hls/stream.m3u8",
    group: "General;Music",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Africa24.fr",
    logo: "https://i.imgur.com/YWIJdai.png",
    name: "Africa 24 (540p)",
    url: "https://edge12.vedge.infomaniak.com/livecast/ik:africa24/manifest.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Africa24English.fr",
    logo: "https://i.imgur.com/YWIJdai.png",
    name: "Africa 24 English (1080p)",
    url: "https://edge17.vedge.infomaniak.com/livecast/ik:africa24sport/manifest.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "AfricanewsFrench.fr@SD",
    logo: "https://i.imgur.com/5UxU4zc.png",
    name: "Africanews French (720p)",
    url: "https://2767164d5ee04887b96812a9eea74d32.mediatailor.eu-west-1.amazonaws.com/v1/manifest/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6573/44d3df93-4a3e-43e0-990f-a5d196bbe3aa/5.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "AfroturkTV.tr",
    logo: "https://i.imgur.com/fWlLvRA.png",
    name: "Afroturk TV (1080p)",
    url: "https://edge.socialsmart.tv/naturaltv/bant1/playlist.m3u8",
    group: "General",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "BBCNews.uk",
    logo: "https://i.imgur.com/vSz2WEp.png",
    name: "BBC News (720p)",
    url: "https://vs-cmaf-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/iptv_hd_abr_v1.mpd",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "BloombergTV.us@EMEALiveEvent",
    logo: "https://i.imgur.com/OuogLHx.png",
    name: "Bloomberg TV EMEA Live Event (720p)",
    url: "https://bloomberg.com/media-manifest/streams/eu-event.m3u8",
    group: "Business",
    needsProxy: true  // or false depending on the channel
  },
  {
    id: "BTV.ug",
    logo: "https://i.imgur.com/rcHZ1al.png",
    name: "BTV (480p)",
    url: "https://streamfi-alphadgtl1.zettawiseroutes.com:8181/hls/stream.m3u8",
    group: "Entertainment",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "BukeddeTV1.ug",
    logo: "https://i.imgur.com/HFq5QlJ.png",
    name: "Bukedde TV 1 (576p)",
    url: "https://stream.hydeinnovations.com/bukedde1flussonic/index.m3u8",
    group: "General",
    needsProxy: false  // or false depending on the channel
  },
  // Add more channels here manually as needed
];

const container = document.getElementById('channel-list');


channels.forEach(channel => {
  const card = document.createElement('div');
  card.className = 'card';

  // Create the <a> element
  const link = document.createElement('a');
  link.href = 'player.html';
  link.onclick = () => {
    localStorage.setItem('selectedChannel', JSON.stringify(channel));
  };
  link.innerHTML = `
    <span id="heart">♡</span>
    <img src="${channel.logo}" alt="${channel.name}">
    <div class="info">
        <h4>${channel.name}</h4>
        <!-- <p>${channel.group}</p> -->
    </div>
  `;

  card.appendChild(link);
  container.appendChild(card);
});
