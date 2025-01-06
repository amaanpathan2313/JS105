 

// sentenceBuilder.buildSentence();
// Expected Output:
// "I am coding"

// Example 2:
// sentenceBuilder.updateProperty("verb", "am learning"); sentenceBuilder.buildSentence();
// Expected Output:
// "I am learning coding"

// Example 3:
// sentenceBuilder.updateProperty("subject", "The cat");
// sentenceBuilder.buildSentence();
// Expected Output:
// "The cat is learning coding"

// Example 4:

// sentenceBuilder.updateProperty("mood", "happy");
// Expected Output:
// "Invalid property"

// Example 5:

// sentenceBuilder.updateProperty("verb", ""); sentenceBuilder.buildSentence();
//Expected Output:
// "Incomplete sentence"

 
    let sentenceBuilder = {
         subject: "I",
         verb: "am",
         object: "coding",
         buildSentence: function(property, value) {    
            
            console.log(property)

                return (`${this.subject} ${this.verb} ${this.object}`);
         },
        //    buildSentence(property, value) {
        //     return (`${this.subject} ${this.verb} ${this.object}`);
        // },
     };
      
     let aa = sentenceBuilder.buildSentence();
     console.log(aa)