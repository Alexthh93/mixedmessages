/* Mixed Messages Game Plan

 create a list of topics - (Sports, Video-gaming, traveling, finance, animals)

 Create 3 arrays which defines start, middle, end. (5 inputs in each array of each topic)

 introductory list - array

 middle list - array

/ending list - array

function to loop through the arrays and randomly select an entry. 

 store each sentence into a variable and make sure to not replicate the same sentences. 

 after storing the result, create a function that prints X amount of sentences

 create a do...while loop that will go through the words array UNTIL they're different. /*

 /* if end === end
      it goes through the loop again until the results are different
    replicate this n (number) of times. */

const topics = ['travels', 'videogames', 'animals'];

const topicSelector = n => {
  let choice;
  switch (n) {
    case 1: 
      choice = topics[0];
      break;
    case 2:
      choice = topics[1];
      break;
    case 3:
      choice = topics[2];
      break;
    default:
      return `Insert a number from 1 to 3.`;
  }
  return choice;
}

