function mincost(arr)
{ 
//write your code here
	Arrays.sort(arr);
	let a[];
	a[0]=a[0]+a[1];
	for(int i=2;i<arr.length;i++)
	{
		a[i-1]=a[i-2]+arr[i];
	}
	let mincost=a.reduce((acc,n)=> acc+n,0);
	return mincost;
// return the min cost
  
}

module.exports=mincost;
