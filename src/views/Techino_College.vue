<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div class="view-1">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/location1.png" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">College Office  Location</h5>
            <P class="text-slat-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus nobis rem sequi vel temporibus illo, facere ipsa corporis reprehenderit commodi velit voluptatum cumque et incidunt debitis. Ad, reprehenderit magnam.</P>   
       </div>
    </div>

<div class="view-2">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/department.jpg" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Dipartment List</h5>
            <P class="text-slat-500 text-lg ">Civil Engineering</P> 
            <P class="text-slat-500 text-lg ">Electrical and Computer Engineering</P>
            <P class="text-slat-500 text-lg ">Mechanical Engineering</P>
            <P class="text-slat-500 text-lg ">Construction Technology and Management</P>
            <P class="text-slat-500 text-lg ">Information Technology</P>
            <P class="text-slat-500 text-lg ">Hydraulics and Water Resource Engineering</P>
            <P class="text-slat-500 text-lg ">Software Engineering</P>
            <P class="text-slat-500 text-lg ">Computer Science</P>
            <P class="text-slat-500 text-lg ">Aerospace Engineering</P>
            <P class="text-slat-500 text-lg ">Chemical Engineering</P>
            <P class="text-slat-500 text-lg ">Information System</P>
            <P class="text-slat-500 text-lg ">Industrial Engineering</P>
            <P class="text-slat-500 text-lg ">Architecture</P>
            <P class="text-slat-500 text-lg ">Biomedical Engineering</P>
       </div>
    </div>
  
    <div class="view-1">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/contact1.png" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Contact To College</h5>
            <P class="text-slat-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus nobis rem sequi vel temporibus illo, facere ipsa corporis reprehenderit commodi velit voluptatum cumque et incidunt debitis. Ad, reprehenderit magnam.</P>
       </div>
    </div>

    <router-link to="/Technology_table_list" active-class="active" tag="button" type="submit" class="font-serif text-center  font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">
        <div class="link-container" >
           Read More
        </div>
    </router-link>
</div>
</template>