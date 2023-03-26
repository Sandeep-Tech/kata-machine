// problem:
// given two cystal balls that will break if dropped from high enough distance,
// determine the exact  spot in which it will break in the most optimised way

// // primeagen solution
// export default function two_crystal_balls(breaks: boolean[]): number {
//   const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  
//   let i = jmpAmount;
//   for (; i < breaks.length; i += jmpAmount) {
//     if (breaks[i]) {
//       break;
//     }
//   }

//   i -= jmpAmount;
//   for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
//     if (breaks[i]) {
//       return i;
//     }
//   }

//   return -1;
// }


// chatgpt solution
/**
 * Returns the index of the floor at which the crystal ball breaks, using a binary search algorithm.
 * @param floors An array of boolean values representing whether the crystal ball breaks when dropped from each floor.
 * @returns The index of the floor at which the crystal ball breaks, or -1 if the ball does not break from any floor.
 */
export default function two_crystal_balls(floors: boolean[]): number {
  let left = 0;
  let right = floors.length - 1;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (floors[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  // At this point, left and right point to the same index, which is the index of the first floor at which the crystal ball breaks.
  // If the crystal ball does not break from any floor, left and right will both be equal to floors.length.
  return floors[left] ? left : -1;
}
