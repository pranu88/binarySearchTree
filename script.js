let nums3 = []
let merge = function(nums1, nums2) { 
   
       nums3 = nums1.splice(0,3) 
    //   console.log(nums3) 
     let mergedArray = [...nums3,...nums2]
     return mergedArray.sort()
     
    };
    console.log(merge([1,2,3,0,0,0],[2,4,6]))