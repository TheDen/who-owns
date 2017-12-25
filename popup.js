function GetMapData(taburl) {

  var map = new Map();

  map.set("nytimes", "Owned by The New York Times Company, which is publicly traded but primarily controlled by the Ochs-Sulzberger family through a dual-class share structure. Sulzberger family (13%), Carlos Slim (17%)");
  map.set("foxnews", "Rupert Murdoch (chairman and CEO)<br>Acquired by Disney in 2017.");
  map.set("google", "Parent Company: Alphabet Inc.");
  map.set("wikipedia", "Wikimedia Foundation (non-profit).");
  map.set("wiktionary", "Wikimedia Foundation (non-profit).");
  map.set("wikibooks", "Wikimedia Foundation (non-profit).");
  map.set("wikisource", "Wikimedia Foundation (non-profit).");
  map.set("wikivoyage", "Wikimedia Foundation (non-profit).");
  map.set("wikiquote", "Wikimedia Foundation (non-profit).");
  map.set("wikimedia", "Wikimedia Foundation (non-profit).");
  map.set("wikinews", "Wikimedia Foundation (non-profit).");
  map.set("wikidata", "Wikimedia Foundation (non-profit).");
  map.set("wikiversity", "Wikimedia Foundation (non-profit).");
  map.set("gizmodo", "Gawker Media LLC.<br>Assets were purchased by Univision Communication (NYSE: UVN), which is owned by Broadcasting Media Partners, Inc. (Madison Dearborn Partners, Providence Equity Partners, TPG Capital, Thomas H. Lee Partners, and Saban Capital Group (each owning 20%)).");
  map.set("kotaku", "Gawker Media LLC.<br>Assets were purchased by Univision Communication (NYSE: UVN), which is owned by Broadcasting Media Partners, Inc. (Madison Dearborn Partners, Providence Equity Partners, TPG Capital, Thomas H. Lee Partners, and Saban Capital Group (each owning 20%)).");
  map.set("jalopnik", "Gawker Media LLC.<br>Assets were purchased by Univision Communication (NYSE: UVN), which is owned by Broadcasting Media Partners, Inc. (Madison Dearborn Partners, Providence Equity Partners, TPG Capital, Thomas H. Lee Partners, and Saban Capital Group (each owning 20%)).");
  map.set("jezebel", "Gawker Media LLC.<br>Assets were purchased by Univision Communication (NYSE: UVN), which is owned by Broadcasting Media Partners, Inc. (Madison Dearborn Partners, Providence Equity Partners, TPG Capital, Thomas H. Lee Partners, and Saban Capital Group (each owning 20%)).");
  map.set("deadspin", "Gawker Media LLC.<br>Assets were purchased by Univision Communication (NYSE: UVN), which is owned by Broadcasting Media Partners, Inc. (Madison Dearborn Partners, Providence Equity Partners, TPG Capital, Thomas H. Lee Partners, and Saban Capital Group (each owning 20%)).");
  map.set("lifehacker", "Gawker Media LLC.<br>Assets were purchased by Univision Communication (NYSE: UVN), which is owned by Broadcasting Media Partners, Inc. (Madison Dearborn Partners, Providence Equity Partners, TPG Capital, Thomas H. Lee Partners, and Saban Capital Group (each owning 20%)).");
  map.set("splinternews", "Gawker Media LLC.<br>Assets were purchased by Univision Communication (NYSE: UVN), which is owned by Broadcasting Media Partners, Inc. (Madison Dearborn Partners, Providence Equity Partners, TPG Capital, Thomas H. Lee Partners, and Saban Capital Group (each owning 20%)).");
  map.set("theonion", "Onion, Inc.<br>40% ownership by Fusion Media Group, which is co-owned by Univision Communications & Disney-ABC Television Group.");
  map.set("clickhole", "Onion, Inc.<br>40% ownership by Fusion Media Group, which is co-owned by Univision Communications & Disney-ABC Television Group.");
  map.set("avclub", "Onion, Inc.<br>40% ownership by Fusion Media Group, which is co-owned by Univision Communications & Disney-ABC Television Group.");
  map.set("onionstudios", "Onion, Inc.<br>40% ownership by Fusion Media Group, which is co-owned by Univision Communications & Disney-ABC Television Group.");
  map.set("aljazeera", "Chairman: Hamad bin Thamer Al Thani (a member of the ruling family of Qatar, the House of Thani).");
  map.set("jeemtv", "Chairman: Hamad bin Thamer Al Thani (a member of the ruling family of Qatar, the House of Thani).");
  map.set("baraem", " Chairman: Hamad bin Thamer Al Thani (a member of the ruling family of Qatar, the House of Thani).");
  map.set("ajplus", "Chairman: Hamad bin Thamer Al Thani (a member of the ruling family of Qatar, the House of Thani).");
  map.set("jetty", "Chairman: Hamad bin Thamer Al Thani (a member of the ruling family of Qatar, the House of Thani).");
  map.set("theblaze", "Owned by Mercury Radio Arts (Glenn Beck).");
  map.set("huffingtonpost", "Parent: Verizon Communications via Oath Inc.");
  map.set("buzzfeed", "Owned by BuzzFeed Inc. (private).<br>Co-founder and CEO: Jonah Peretti");
  map.set("mic", "Founders: Chris Altchek and Jake Horowitz");
  map.set("vice", "Vice Media LLC.<br>Ownership:<br>Shane Smith (20%)<br>21st Century Fox (5%)<br>The Walt Disney Company (10%)<br>A&E Networks (20%)");
  map.set("nowthisnews", "Parent: Group Nine Media (private)<br>Ben Lerer (CEO), Eric Ashman (President)");
  map.set("facebook", "Facebook, Inc.<br>Mark Zuckerberg (Chairman and CEO)");
  map.set("tbhtime", "Facebook, Inc.<br>Mark Zuckerberg (Chairman and CEO)");
  map.set("instagram", "Facebook, Inc.<br>Mark Zuckerberg (Chairman and CEO)");
  map.set("messenger", "Facebook, Inc.<br>Mark Zuckerberg (Chairman and CEO)");
  map.set("whatsapp", "Facebook, Inc.<br>Mark Zuckerberg (Chairman and CEO)"); 
  map.set("oculus", "Facebook, Inc.<br>Mark Zuckerberg (Chairman and CEO)");
  map.set("breitbart", "Breitbart News Network LLC<br>Steve Bannon (executive chair)");
  map.set("nypost", "News Corp. (Murdoch)");
  map.set("theaustralian", "News Corp. (Murdoch).");
  map.set("couriermail", "News Corp. (Murdoch).");
  map.set("cairnspost", "News Corp. (Murdoch).");
  map.set("goldcoastbulletin", "News Corp. (Murdoch).");
  map.set("dailytelegraph", "News Corp. (Murdoch).");
  map.set("heraldsun", "News Corp. (Murdoch).");
  map.set("newscorpaustralia", "News Corp. (Murdoch).");
  map.set("geelongadvertiser", "News Corp. (Murdoch).");
  map.set("adelaidenow", "News Corp. (Murdoch).");
  map.set("perthnow", "News Corp. (Murdoch).");
  map.set("themercury", "News Corp. (Murdoch).");
  map.set("ntnews", "News Corp. (Murdoch).");
  map.set("thesun", "News Corp. (Murdoch).");
  map.set("thetimes", "News Corp. (Murdoch).");
  map.set("the-tls", "News Corp. (Murdoch).");
  map.set("brooklynpaper", "News Corp. (Murdoch).");
  map.set("nypost", "News Corp. (Murdoch).");
  map.set("nine", "Nine Entertainment Company Holdings Ltd.<br> Peter Costello (Chairman), Hugh Marks (CEO)");
  map.set("9news", "Nine Entertainment Company Holdings Ltd.<br> Peter Costello (Chairman), Hugh Marks (CEO)");
  map.set("stan", "Owned by StreamCo, which is a joint venture of Nine Entertainment Co. and Fairfax Media");
  map.set("foxsports", "Fox Entertainment Group");
  map.set("nationalgeographic", "Fox Entertainment Group");
  map.set("fxnetworks", "Fox Entertainment Group");
  map.set("sky", "Fox Entertainment Group");
  map.set("hulu", "21st Century Fox<br>Comcast (30%)<br>The Walt Disney Company (30%)<br>Time Warner (10%)");
  map.set("youtube", "Subsidiary of Google");
  map.set("businessinsider", "Owned by Axel Springer SE ");
  map.set("washingtonpost", "WP Company LLC / Nash Holdings LLC (Jeff Bezos)");
  map.set("netflix", "Netflix, Inc.<br>As of 2017, Netflix shares are mainly held by institutional investors, including Capital Group Companies, The Vanguard Group, BlackRock and others.");
  map.set("forbes", "Forbes Media, LLC. (51%-Integrated Media; 49%-Forbes family)");
  map.set("bloomberg", "Bloomberg L.P.<br>Michael Bloomberg (88%)");
  map.set("fortune", "Time Inc.<br>In November 2017, competing publisher and media company Meredith Corporation announced that it would acquire Time Inc. for $2.8 billion (backed by the Koch brothers)");
  map.set("time", "Time Inc.<br>In November 2017, competing publisher and media company Meredith Corporation announced that it would acquire Time Inc. for $2.8 billion (backed by the Koch brothers)");
  map.set("reddit", "Reddit Inc.<br>Subsidiary of Cond&eacute; Nast (subsidiary of Advance Publications)<br>Reddit has 3 sets of shareholders: The largest shareholder is still Advance Publications. The second-largest set of shareholders are Reddit employees.");
  map.set("ycombinator", "Y Combinator LLC ");
  map.set("linkedin", "Owned by the Microsoft Corporation");

  taburlvalue = map.get(taburl)
  if (typeof taburlvalue != 'undefined' && taburlvalue) {
    document.getElementById("details").innerHTML = taburlvalue;
  }
  else {
    document.getElementById("details").innerHTML = 'No data for this page.<br>Please consider contributing information for this page by filling the form <a href="https://docs.google.com/forms/d/e/1FAIpQLSccu0IQW-9whheNJ8_IeQK36zMq3HkFz3rrd-VbhD6o1lJonQ/viewform?entry.1101366435=' + taburl + '&entry.1832190220" target="_blank">here</a> (takes one minute).';
  }
}

chrome.tabs.getSelected(null, function (tab) {
  taburl = (((new URL(tab.url)).hostname.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1]);
  document.getElementById("content").innerHTML = taburl;
  GetMapData(taburl);
});
