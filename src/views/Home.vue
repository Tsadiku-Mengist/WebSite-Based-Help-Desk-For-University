<template>
<div id="Home">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 discription md:flex justify-between
                 items-center border-8 border-green-600 ... ">
        <div > 
<p class="  pt-10  pl-20 text-4xl text-black font-serif">እንኳን ደህና መጡ</p>
<p class=" pl-20  text-4xl text-black font-serif">ደብረ ማርቆስ ዩኒቨርሲቲ</p>
<p class=" pt-5 pl-20 text-5xl text-black font-serif">ምን ይፍልጋሉ? </p>
<p class=" pl-20 pt-2 text-xl text-black font-serif">ከላይ ካሉት ዝርዝሮች በመምርጥ <br>ስለ መርጡት ዝርዝር ሙሉ መርጃ ማግኘት ይችላሉ::     </p>
        </div>

          <div> 
<p class="  pt-10  pl-20 text-4xl text-black font-serif">Welcome To</p>
<p class=" pr-30  text-4xl text-black font-serif">Debre Markos University</p>
<p class=" pt-5 pr-10 text-5xl text-black font-serif">What Do You Went ? </p>
<p class=" pl-20  pt-2 text-xl text-black font-serif">Please Select From The Above Bar,<br> And Gate All Information About Selected.</p>
        </div>
    </div>
         <div class="  ">      
          <carousel :slides="slides" :interval="2000" controls indicators></carousel>
         </div>
           <div class="smd:flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2
                 items-center justify-around ">
                 <div class="border-4  border-green-600 ...">
                   <p class=" pl-40 text-4xl text-green-600  font-serif" >Mission </p>
                     <p class=" pl-5 pr-5 text-3xl font-serif">	Prepare knowledgeable, skilled, and attitudinally mature graduates in relevant disciplines to support peace, democracy and national development that can make the country internationally competitive.</p>
               </div>
                 
                 <div class=" border-4   border-green-600 ...">
                    <P class="text-4xl  text-green-600 pl-40  font-serif">Vision</P>
                    <p class="text-3xl pl-5 pr-5 text-black font-serif">Debre Markos University aspires to be a leading university by producing intellectuals who will boost growth and development of the nation and become competitive in Africa and the world by 2025 GC.</p>
                 </div>

                 <div class="border-4 border-green-600 ...">
                  <P class="text-4xl pl-40   text-green-600 font-serif">Goal</P>
                  <P class="text-3xl pl-5 pr-5  text-black font-serif">The goal of Debre Markos University is to develop as an autonomous and efficient academic and research institution with a competitive national and international quality and relevance standards in its overall endeavors.</P>
                 </div>
           </div>   
</div>
</template>










    <script>
import Carousel from "../components/carousel/Carousel.vue";

export default {
  name: "Home",
  components: { Carousel },
  data: () => ({
    slides: [
     
      'src/assets/dmu1.jpg',
      'src/assets/dmu2.jpg',
      'src/assets/dmu3.jpg',
      'src/assets/dmu4.jpg',
      'src/assets/dmu5.jpg',
     
    ],
  }),
};
</script>