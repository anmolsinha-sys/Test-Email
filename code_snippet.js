if (blogDate < sevenDaysAgo) {
  console.log("DATE LIMIT REACHED. Stopping scrape.");
  stopScraping = true;
  break;
}