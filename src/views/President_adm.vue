<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div class="view-1">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/location2.png" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Office Location</h5>
            <P class="text-slat-500 text-lg mt-3">Start from the main intrance dorm next to the main student caffe on the right side of the register office.</P>   
       </div>
    </div>

<div class="view-2">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/contact2.png" class=" w-60 h-30 pl-20" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">Office Contacts </h5>
            <P class="text-slat-500 text-lg mt-3">058771XXXX<br> Abebech Feleke secretary of the president office.</P>
            <P class="text-slat-500 text-lg mt-3">058771XXXX<br> Adisse Belay secondary ssecretary of the president office.</P>  
       </div>
    </div>
  
    <div class="view-1">
        <div class="p-5 flex flex-col">
            <div class="rounded-2xl overflow-hidden">
                <img src="../assets/dr-tafere-340x209.jpg" class="" alt=""/>
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3"> About President</h5>
            <P class="text-slat-500 text-lg mt-3">Dr. Melaku is the current president of Debre Markos University.He started his career as a high school teacher and rose through the ranks with his admirable work ethics and leadership development. He took the helm of Debre Markos University in 2010 and the university has enjoyed unparallel growth during his tenure. </P>
       </div>
    </div>

    <router-link to="/President_table_list" active-class="active" tag="button" type="submit" class="font-serif text-center  font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">
        <div class="link-container" >
           Read More
        </div>
    </router-link>
</div>
</template>