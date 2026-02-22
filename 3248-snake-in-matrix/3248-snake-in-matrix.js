/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
  let col = 0,row=0
    for(cmd of commands){
        if(cmd === "UP")row--
        if(cmd === "DOWN")row++
        if(cmd === "RIGHT")col++
        if(cmd === "LEFT")col--
    }
    return row*n+col
};