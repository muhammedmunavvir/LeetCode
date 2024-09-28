/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
   for (let i = 0; i < image.length; i++) {
        // Step 1: Reverse the row
        image[i].reverse();

        // Step 2: Invert the values in the row
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) {
                image[i][j] = 1; // Change 0 to 1
            } else {
                image[i][j] = 0; // Change 1 to 0
            }
        }
    }
    return image;
};