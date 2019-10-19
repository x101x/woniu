// let arr = [1,2,3,4,5,6,7,8]

// var rotate = function(nums, k) {
    
//   const n = nums.length
// if(k%n==0){return nums}
// let t = null
// let cnt = Math.abs(k>0 ? k%n : n+(k%n))
// while (cnt--){
//   t = nums[n-1]
//   //右移一位
//   for (let i=n-1;i>0;i--){
//     nums[i]=nums[i-1]
//   }
//   nums[0]=t
// }
// return nums
// };
// console.log(rotate(arr,2));
let arr = [1,2]

function reverse(nums,start,end) {
  let t = null
  while (start < end) {
    t = nums[start]
    nums[start] = nums[end]
    nums[end] = t
    start++
    end--
  }

}

function rotate(nums,k){
  const n = nums.length
  if(k%n==0) return 
  reverse(nums,0,n-k-1)
  
  reverse(nums,n-k,n-1)
  reverse(nums,0,n-1)
  // let i = Math.abs(k>0 ? k%n : n+(k%n))
  // return nums.concat([...nums]).slice(n-i,2*n-i)
  return nums

}
console.log(rotate(arr,3));