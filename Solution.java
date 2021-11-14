class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int mPointer = 0;
        int nPointer = 0;
        
        int[] merged = new int[m + n];
        int mergedPointer = 0;
        
        while(mPointer < m && nPointer < n) {
    
            if(nums1[mPointer] < nums2[nPointer]) {
                merged[mergedPointer] = nums1[mPointer];
                mPointer += 1;
            } else {
                merged[mergedPointer] = nums2[nPointer];
                nPointer += 1;
            }
            mergedPointer += 1;
        }
        
        while(mPointer < m) {
            merged[mergedPointer] = nums1[mPointer];
            mergedPointer += 1;
            mPointer += 1;
        }
        
        while(nPointer < n) {
            merged[mergedPointer] = nums2[nPointer];
            mergedPointer += 1;
            nPointer += 1;
        }

        //Function returns void and takes nums1 as answer, so nums1[] must be assigned values of merged[]
        for (int i = 0; i < m+n; i++) {
            nums1[i] = merged[i];
        }
    }
}