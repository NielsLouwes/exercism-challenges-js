/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer === 0) return "Lasagna is done.";
  if (!timer) return "You forgot to set the timer.";

  return "Not done, please wait.";
}

export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime;
}

export function quantities(layers) {
    let noodleCount = 0;
    let sauceCount = 0;
  
    layers.forEach((layer) => {
      if (layer === "noodles") noodleCount += 1;
      if (layer === "sauce") sauceCount += 1;
    });
  
    return {
      noodles: noodleCount * 50,
      sauce: sauceCount * 0.2,
    };
  }

export function addSecretIngredient(friendsList, myList) {
  const copyFriendsList = [...friendsList];
  const secretIngredient = copyFriendsList.pop();
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, numOfPortions) {
  if (!numOfPortions) {
    return recipe;
  }

  let scaledRecipe = {};
  for (let ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * numOfPortions;
  }

  return scaledRecipe;
}


