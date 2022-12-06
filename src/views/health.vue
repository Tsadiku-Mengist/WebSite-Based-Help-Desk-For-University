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
            <P class="text-slat-500 text-lg mt-3">Public Health</P>
            <P class="text-slat-500 text-lg mt-3">Pediatrics and child health Nursing</P>
            <P class="text-slat-500 text-lg mt-3">Nursing</P>
            <P class="text-slat-500 text-lg mt-3">Midwifery</P> 
            <P class="text-slat-500 text-lg mt-3">Pharmacy</P>
            <P class="text-slat-500 text-lg mt-3">Health Informatics</P>
            <P class="text-slat-500 text-lg mt-3">Human Nutrition and Food Science</P>
            <P class="text-slat-500 text-lg mt-3">Environmental Health</P>
             <P class="text-slat-500 text-lg mt-3">Medical Laboratory Science and Technology</P>
       </div>
    </div>
  
    <div class="view-1">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/contact1.png" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Contact To College</h5>
            <P class="text-slat-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing el</P>
       </div>
    </div>
    
    <router-link to="/Health_list_table" active-class="active" tag="button" type="submit" class="font-serif text-center  font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">
        <div class="link-container" >
           Read More
        </div>
    </router-link>
</div>
</template>