/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  var people = [], index = 1;
  for (var i = 0; i < num_people; i++) {
    people[i] = 0;
  }

  if (num_people == 1) {
    people[0] = candies;
    return people;
  }

  while (candies > 0) {
    if (candies > index) {
      people[(index - 1) % num_people] += index; 
    } else {
      people[(index - 1) % num_people] += candies;
    }
    candies -= index;
    index++;
  }
  return people;
};

console.log(distributeCandies(7, 4));