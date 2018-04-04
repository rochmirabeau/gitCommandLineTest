// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the NYTimes website
var scrape = function() {
  // Scrape the NYTimes website
  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
    // Make an empty array to save our article info
    var articles = [];
    console.log(res.data)
    return
    // Now, find and loop through each element that has the "theme-summary" class
    // (i.e, the section holding the articles)
   //roch setup react display page // $(".theme-summary").each(function(i, element) {
   //roch setup react display page //   // In each .theme-summary, we grab the child with the class story-heading

   //roch setup react display page //   // Then we grab the inner text of the this element and store it
   //roch setup react display page //   // to the head variable. This is the article headline
   //roch setup react display page //   var head = $(this)
   //roch setup react display page //     .children(".story-heading")
   //roch setup react display page //     .text()
   //roch setup react display page //     .trim();

   //roch setup react display page //   // Grab the URL of the article
   //roch setup react display page //   var url = $(this)
   //roch setup react display page //     .children(".story-heading")
   //roch setup react display page //     .children("a")
   //roch setup react display page //     .attr("href");

   //roch setup react display page //   // Then we grab any children with the class of summary and then grab it's inner text
   //roch setup react display page //   // We store this to the sum variable. This is the article summary
   //roch setup react display page //   var sum = $(this)
   //roch setup react display page //     .children(".summary")
   //roch setup react display page //     .text()
   //roch setup react display page //     .trim();

   //roch setup react display page //   // So long as our headline and sum and url aren't empty or undefined, do the following
   //roch setup react display page //   if (head && sum && url) {
   //roch setup react display page //     // This section uses regular expressions and the trim function to tidy our headlines and summaries
   //roch setup react display page //     // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
   //roch setup react display page //     var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
   //roch setup react display page //     var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

   //roch setup react display page //     // Initialize an object we will push to the articles array

   //roch setup react display page //     var dataToAdd = {
   //roch setup react display page //       headline: headNeat,
   //roch setup react display page //       summary: sumNeat,
   //roch setup react display page //       url: url
   //roch setup react display page //     };

   //roch setup react display page //     articles.push(dataToAdd);
   //roch setup react display page //   }
   //roch setup react display page // });
   //roch setup react display page // return articles;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;
