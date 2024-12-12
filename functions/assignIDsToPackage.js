function assignIDsToPackages(packages){
    i = 0;
    packages.forEach((package)=>{
        package.id = i;
        i+=1;
    })
}
