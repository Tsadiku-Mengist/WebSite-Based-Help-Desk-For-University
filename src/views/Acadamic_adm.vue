<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div class="view-1">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/location2.png" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Office Location</h5>
            <P class="text-slat-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus nobis rem sequi vel temporibus illo, facere ipsa corporis reprehenderit commodi velit voluptatum cumque et incidunt debitis. Ad, reprehenderit magnam.</P>   
       </div>
    </div>

<div class="view-2">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/contact2.png" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Office Contacts</h5>
            <P class="text-slat-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus nobis rem sequi vel temporibus illo, facere ipsa corporis reprehenderit commodi velit voluptatum cumque et incidunt debitis. Ad, reprehenderit magnam.</P> 
       </div>
    </div>
  
    <div class="view-1">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/responsibility.webp" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Responsibility </h5>
            <P class="text-slat-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus nobis rem sequi vel temporibus illo, facere ipsa corporis reprehenderit commodi velit voluptatum cumque et incidunt debitis. Ad, reprehenderit magnam.</P>
       </div>
    </div>

    
    <router-link to="/Acadamic_table_list" active-class="active" tag="button" type="submit" class="font-serif text-center  font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">
        <div class="link-container" >
           Read More
        </div>
    </router-link>
</div>
</template>