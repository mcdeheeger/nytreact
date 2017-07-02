// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
import cheerio from "cheerio";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

// scrape script
// =============
// This function will scrape the NYTimes website (cb is our callback)

    runScrape: (cb) => {

        then((response) => {

            console.log(response);
            return response.data.results[0].formatted;
        });
        // Use the request package to take in the body of the page's html
        return axios.get("http://www.nytimes.com").then((err, res, body) => {
            // body is the actual HTML on the page. Load this into cheerio

            // Saving this to $ creates a virtual HTML page we can minipulate and
            // traverse with the same methods we'd use in jQuery
            var $ = cheerio.load(body);

            // Make an empty array to save our article info
            var articles = [];

            // Now, find and loop through each element that has the "theme-summary" class
            // (i.e, the section holding the articles)
            $(".theme-summary").each(function (i, element) {

                // In each .theme-summary, we grab the child with the class story-heading
                // Then we grab the inner text of the this element and store it
                // to the head variable. This is the article headline
                var head = $(this).children(".story-heading").text().trim();

                // Then we grab any children with the class of summary and then grab it's inner text
                // We store this to the sum variable. This is the article summary
                var sum = $(this).children(".summary").text().trim();

                // So long as our headline and sum aren't empty or undefined, do the following
                if (head && sum) {

                    // This section uses regular expressions and the trim function to tidy our headlines and summaries
                    // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
                    var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                    var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                    // Initialize an object we will push to the articles array

                    var dataToAdd = {
                        headline: headNeat,
                        summary: sumNeat
                    };

                    articles.push(dataToAdd);
                }
            });
            // After our loop is complete, send back the array of articles to the callback function
            cb(articles);
        });
    }
};


// We export the helpers function (which contains getGithubInfo)
export default helpers;


