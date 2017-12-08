1. Aarry
1.1 arrayEqual
/**
 * @description 判断两个数组是否相等
 * @param {array} arr1 
 * @param {arryy} arr2 
 * @return {Boolean}
 */

function arrayEquel(arr1, arr2) {
    if (arr1 === arr2) return true;
    if (arr1.length != arr2.length) return false;
    for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return ture;
}