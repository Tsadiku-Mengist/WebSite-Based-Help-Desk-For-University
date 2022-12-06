import { createWebHistory,createRouter } from "vue-router";
import Home from "../views/Home.vue";


const routes=[
   
    {
        path:'/',
        name:'Home',
        component:Home,
    },
   

    {
     path:'/administration',
     name:'Administration',
     component:()=>import('../views/Administration.vue'),
    },

    {path:'/Dashboard_A',
    name:'Dashboard_A',
    component:()=>import('../components/Dashboard_A.vue'),
   
          children:[
                 {
                  path: '/Acadamic_adm',
                  component:()=>import('../views/Acadamic_adm.vue'),
                  },

                  {
                   path: '/Continuing_adm',
                   component:()=>import('../views/Continuing_adm.vue'),
                   },
           
                   {
                      path: '/Corporate_adm',
                      component:()=>import('../views/Corporate_adm.vue'),
                   },

                   {
                      path: '/President_adm',
                      component:()=>import('../views/President_adm.vue'),
                   },
                         ] },

    {
     path:'/register',
     name:'Register',
     component:()=>import('../views/Register.vue'),
    },

    {
     path:'/colleges',
     name:'Colleges',
     component:()=>import('../views/Colleges.vue'),},

     {path:'/Dashboard_C',
     name:'Dashboard_C',
     component:()=>import('../components/Dashboard_C.vue'),

                  children:[
                    {
                     path: '/busness',
                     component:()=>import('../views/busness.vue'),
                     },
                    {
                      path: '/law',
                      component:()=>import('../views/law.vue'),
                      },
                     
                      {
                        path: '/Techino_College',
                       component:()=>import('../views/Techino_College.vue'),
                       },

                       {
                         path: '/medicne',
                         component:()=>import('../views/medicne.vue'),
                        },

                       {
                         path: '/agri',
                         component:()=>import('../views/agri.vue'),
                        },
    
                        {
                          path: '/land',
                          component:()=>import('../views/land.vue'),
                        },

                        {
                          path: '/natural',
                          component:()=>import('../views/natural.vue'),
                        },
                       
                        {
                           path: '/social',
                           component:()=>import('../views/social.vue'),
                         },

                         {
                            path: '/health',
                            component:()=>import('../views/health.vue'),
                         },
                          ]}, 
   
   {
    path:'/finance',
    name:'Finance',
    component:()=>import('../views/Finance.vue'),
   },

   {
    path:'/library',
    name:'Library',
    component:()=>import('../views/Library.vue'),
  },
  {
    path:'/abcd',
    name:'abcd',
    component:()=>import('../views/abcd.vue'),
  },
  {
  path:'/Dashboard_L',
  name:'Dashboard_L',
  component:()=>import('../components/Dashboard_L.vue'),

                  children:[
                                {
                            path: '/Library_1',
                            component:()=>import('../views/Library_1.vue'),
                            },

                           {
                           path: '/Library_2',
                           component:()=>import('../views/Library_2.vue'),
                           },

                           {
                           path: '/Library_3',
                           component:()=>import('../views/Library_3.vue'),
                           },

                          {
                           path: '/Digital_Library_1',
                           component:()=>import('../views/Digital_Library_1.vue'),
                            },

                           {
                             path: '/Digital_Library_2',
                             component:()=>import('../views/Digital_Library_2.vue'),
                            },

                           {
                           path: '/Digital_Library_3',
                           component:()=>import('../views/Digital_Library_3.vue'),
                            },
                                ]


                                 },
                                 
   {
    path:'/other',
    name:'Other',
    component:()=>import('../views/Other.vue'),
   },


   {
    path:'/admin',
    name:'Admin',
    component:()=>import('../views/Admin.vue'),
   },

   {
    path: '/Admin_home',
    name:'Admin_home',
    component:()=>import('../views/Admin_home.vue'),
},
 


{
  path: '/Agri_table_list',
  name:'Agri_table_list',
  component:()=>import('../components/Agri_table_list.vue'),
},

{
  path: '/Buss_eco_table_list',
  name:'Buss_eco_table_list',
  component:()=>import('../components/Buss_eco_table_list.vue'),
},


{
  path: '/Law_table_list',
  name:'Law_table_list',
  component:()=>import('../components/Law_table_list.vue'),
},

{
  path: '/Medicine_table_list',
  name:'Medicine_table_list',
  component:()=>import('../components/Medicine_table_list.vue'),
},

{
  path: '/Technology_table_list',
  name:'Technology_table_list',
  component:()=>import('../components/Technology_table_list.vue'),
},

{
  path: '/Health_list_table',
  name:'Health_list_table',
  component:()=>import('../components/Health_list_table.vue'),
},

{
  path: '/Nat_and_comp_table_list',
  name:'Nat_and_comp_table_list',
  component:()=>import('../components/Nat_and_comp_table_list.vue'),
},

{
  path: '/social_scince_and_list_table',
  name:'social_scince_and_list_table',
  component:()=>import('../components/social_scince_and_list_table.vue'),
},

{
  path: '/Land_admi_table_list',
  name:'Land_admi_table_list',
  component:()=>import('../components/Land_admi_table_list.vue'),
},

{
  path: '/Liberary1_table_list',
  name:'Liberary1_table_list',
  component:()=>import('../components/Liberary1_table_list.vue'),
},


{
  path: '/Liberary2_table_list',
  name:'Liberary2_table_list',
  component:()=>import('../components/Liberary2_table_list.vue'),
},

{
  path: '/Liberary3_table_list',
  name:'Liberary3_table_list',
  component:()=>import('../components/Liberary3_table_list.vue'),
},

{
  path: '/Digital_Library1_table_list',
  name:'Digital_Library1_table_list',
  component:()=>import('../components/Digital_Library1_table_list.vue'),
},

{
  path: '/Digital_Library2_table_list',
  name:'Digital_Library2_table_list',
  component:()=>import('../components/Digital_Library2_table_list.vue'),
},

{
  path: '/Digital_Library3_table_list',
  name:'Digital_Library3_table_list',
  component:()=>import('../components/Digital_Library3_table_list.vue'),
},

{
  path: '/President_table_list',
  name:'President_table_list',
  component:()=>import('../components/President_table_list.vue'),
},
{
  path: '/Acadamic_table_list',
  name:'Acadamic_table_list',
  component:()=>import('../components/Acadamic_table_list.vue'),
},

{
  path: '/Continuing_Education_table_list',
  name:'Continuing_Education_table_list',
  component:()=>import('../components/Continuing_Education_table_list.vue'),
},

{
  path: '/Corporate_communic_table_list',
  name:'Corporate_communic_table_list',
  component:()=>import('../components/Corporate_communic_table_list.vue'),
},


/*page note found*/
 {
  path:'/:PathMatch(.*)*',
  name:'PageNotFound',
  component:()=>import('../views/PageNotFound.vue'),
}, 

/*Business Colleges*/
{
  path:'/ContactBusinessColleges',
  name:'ContactBusinessColleges',
  component:()=>import('../views/ContactBusinessColleges.vue'),
},

{
  path:'/ContactBusinessColleges/add',
  name:'AddBusinessColleges',
  component:()=>import('../views/AddBusinessColleges.vue'),
},

{
  path:'/ContactBusinessColleges/edit:businessCollegeId',
  name:'EditBusinessColleges',
  component:()=>import('../views/EditBusinessColleges.vue'),
},

{
  path:'/ContactBusinessColleges/view:businessCollegeId',
  name:'ViewBusinessColleges',
  component:()=>import('../views/ViewBusinessColleges.vue'),
},



/*Agriculcher Colleges*/
{
  path:'/ContactAgriculcherColleges',
  name:'ContactAgriculcherColleges',
  component:()=>import('../views/ContactAgriculcherColleges.vue'),
},

{
  path:'/ContactAgriculcherColleges/add',
  name:'AddAgriculcherColleges',
  component:()=>import('../views/AddAgriculcherColleges.vue'),
},

{
  path:'/ContactAgriculcherColleges/edit:agriculcherCollegeId',
  name:'EditAgriculcherColleges',
  component:()=>import('../views/EditAgriculcherColleges.vue'),
},

{
  path:'/ContactAgriculcherColleges/view:agriculcherCollegeId',
  name:'ViewAgriculcherColleges',
  component:()=>import('../views/ViewAgriculcherColleges.vue'),
},


/*law Colleges*/
{
  path:'/ContactLawColleges',
  name:'ContactLawColleges',
  component:()=>import('../views/ContactLawColleges.vue'),
},

{
  path:'/ContactLawColleges/add',
  name:'AddContactLawColleges',
  component:()=>import('../views/AddLawColleges.vue'),
},

{
  path:'/ContactLawColleges/edit:lawCollegeId',
  name:'EditContactLawColleges',
  component:()=>import('../views/EditLawColleges.vue'),
},

{
  path:'/ContactLawColleges/view:lawCollegeId',
  name:'ViewContactLawColleges',
  component:()=>import('../views/viewLawColleges.vue'),
},

/*medicine Colleges*/
{
  path:'/ContactMedicineColleges',
  name:'/ContactMedicineColleges',
  component:()=>import('../views/ContactMedicineColleges.vue'),
},

{
  path:'/ContactMedicineColleges/add',
  name:'AddContactMedicineColleges',
  component:()=>import('../views/AddMedicineColleges.vue'),
},

{
  path:'/ContactMedicineColleges/edit:medicineCollegeId',
  name:'EditContactMedicineColleges',
  component:()=>import('../views/EditMedicineColleges.vue'),
},

{
  path:'/ContactMedicineColleges/view:medicineCollegeId',
  name:'ViewContactMedicineColleges',
  component:()=>import('../views/ViewMedicinColleges.vue'),
},

/*techinology Colleges*/
{
  path:'/ContactInstituteTechinologyColleges',
  name:'/ContactInstituteTechinologyColleges',
  component:()=>import('../views/ContactTechinologyColleges.vue'),
},

{
  path:'/ContactInstituteTechinologyColleges/add',
  name:'AddContactInstituteTechinologyColleges',
  component:()=>import('../views/AddTechinologyColleges.vue'),
},

{
  path:'/ContactInstituteTechinologyColleges/edit:techinologyCollegeId',
  name:'EditContactInstituteTechinologyColleges',
  component:()=>import('../views/EditTechinologyColleges.vue'),
},

{
  path:'/ContactInstituteTechinologyColleges/view:techinologyCollegeId',
  name:'ViewContactInstituteTechinologyColleges',
  component:()=>import('../views/ViewTechinologyColleges.vue'),
},


/*health Colleges*/
{
  path:'/ContactHealthColleges',
  name:'ContactHealthColleges',
  component:()=>import('../views/ContactHealthColleges.vue'),
},

{
  path:'/ContactHealthColleges/add',
  name:'AddContactHealthColleges',
  component:()=>import('../views/AddHelathColleges.vue'),
},

{
  path:'/ContactHealthColleges/edit:healthCollegeId',
  name:'EditContactTechinologyColleges',
  component:()=>import('../views/EditHealthColleges.vue'),
},

{
  path:'/ContactHealthColleges/view:healthCollegeId',
  name:'viewContactTechinologyColleges',
  component:()=>import('../views/ViewHealthColleges.vue'),
},

/*natural scince Colleges*/
{
  path:'/ContactNaturalAndComputationalColleges',
  name:'ContactNaturalAndComputationalColleges',
  component:()=>import('../views/ContactNaturalColleges.vue'),
},

{
  path:'/ContactNaturalAndComputationalColleges/add',
  name:'AddContactNaturalAndComputationalColleges',
  component:()=>import('../views/AddNaturalColleges.vue'),
},

{
  path:'/ContactNaturalAndComputationalColleges/edit:naturalCollegeId',
  name:'EditContactNaturalAndComputationalColleges',
  component:()=>import('../views/EditNaturalColleges.vue'),
},

{
  path:'/ContactNaturalAndComputationalColleges/view:naturalCollegeId',
  name:'ViewContactNaturalAndComputationalColleges',
  component:()=>import('../views/ViewNaturalColleges.vue'),
},


/*social scince Colleges*/
{
  path:'/ContactSocialScinceAndHumanityColleges',
  name:'ContactSocialScinceAndHumanityColleges',
  component:()=>import('../views/ContactSocialColleges.vue'),
},

{
  path:'/ContactSocialScinceAndHumanityColleges/add',
  name:'AddContactSocialScinceAndHumanityColleges',
  component:()=>import('../views/AddSocialColleges.vue'),
},

{
  path:'/ContactSocialScinceAndHumanityColleges/edit:socialCollegeId',
  name:'EditContactSocialScinceAndHumanityColleges',
  component:()=>import('../views/EditSocialColleges.vue'),
},

{
  path:'/ContactSocialScinceAndHumanityColleges/view:socialCollegeId',
  name:'ViewContactSocialScinceAndHumanityColleges',
  component:()=>import('../views/ViewSocialColleges.vue'),
},
/*land administration Colleges*/
{
  path:'/ContactLandAdmiColleges',
  name:'ContactLandAdmiColleges',
  component:()=>import('../views/ContactLandAdmiColleges.vue'),
},

{
  path:'/ContactLandAdmiColleges/add',
  name:'AddContactLandAdmiColleges',
  component:()=>import('../views/AddLandAdmiColleges.vue'),
},

{
  path:'/ContactLandAdmiColleges/edit:landAdmiCollegeId',
  name:'EditContactLandAdmiColleges',
  component:()=>import('../views/EditLandAdmiColleges.vue'),
},

{
  path:'/ContactLandAdmiColleges/view:landAdmiCollegeId',
  name:'ViewContactLandAdmiColleges',
  component:()=>import('../views/ViewLandAdmiColleges.vue'),
},


/*liberary One*/
{
  path:'/ContactLiberaryOnes',
  name:'ContactLiberaryOnes',
  component:()=>import('../components/ContactLiberaryOnes.vue'),
},

{
  path:'/ContactLiberaryOnes/add',
  name:'AddContactLiberaryOnes',
  component:()=>import('../components/AddLiberaryOne.vue'),
},

{
  path:'/ContactLiberaryOnes/edit:liberaryOneId',
  name:'EditContactLiberaryOnes',
  component:()=>import('../components/EditLiberaryOne.vue'),
},
 
/*liberary two*/
{
  path:'/ContactLiberaryTwos',
  name:'ContactLiberaryTwos',
  component:()=>import('../components/ContactLiberaryTwo.vue'),
},

{
  path:'/ContactLiberaryTwos/add',
  name:'AddContactLiberaryTwos',
  component:()=>import('../components/AddLiberaryTwo.vue'),
},

{
  path:'/ContactLiberaryTwos/edit:liberaryTwoId',
  name:'EditContactLiberaryTwos',
  component:()=>import('../components/EditLiberaryTwo.vue'),
},

/*liberary three*/
{
  path:'/ContactLiberaryThrees',
  name:'ContactLiberaryThrees',
  component:()=>import('../components/ContactLiberaryThrees.vue'),
},

{
  path:'/ContactLiberaryThrees/add',
  name:'AddContactLiberaryThrees',
  component:()=>import('../components/AddLiberaryThrees.vue'),
},

{
  path:'/ContactLiberaryThrees/edit:liberaryThreeId',
  name:'EditContactLiberaryTwos',
  component:()=>import('../components/EditLiberaryThrees.vue'),
},
/* digital liberary one*/
{
  path:'/ContactDigitalLiberaryOnes',
  name:'ContactDigitalLiberaryOnes',
  component:()=>import('../components/ContactDigitalLiberaryOnes.vue'),
},

{
  path:'/ContactDigitalLiberaryOnes/add',
  name:'AddContactDigitalLiberaryOnes',
  component:()=>import('../components/AddDigitalLiberaryOnes.vue'),
},

{
  path:'/ContactDigitalLiberaryOnes/edit:digitalLiberaryOneId',
  name:'EditContactDigitalLiberaryOnes',
  component:()=>import('../components/EditDigitalLiberaryOnes.vue'),
},
/* digital liberary tow*/
{
  path:'/ContactDigitalLiberaryTwos',
  name:'ContactDigitalLiberaryTwos',
  component:()=>import('../components/ContactDigitalLiberaryTwos.vue'),
},

{
  path:'/ContactDigitalLiberaryTwos/add',
  name:'AddContactDigitalLiberaryTwos',
  component:()=>import('../components/AddDigitalLiberaryTwos.vue'),
},

{
  path:'/ContactDigitalLiberaryTwos/edit:digitalLiberaryTwoId',
  name:'EditContactDigitalLiberaryTwos',
  component:()=>import('../components/EditDigitalLiberaryTwos.vue'),
},

/* digital liberary three*/
{
  path:'/ContactDigitalLiberaryThrees',
  name:'ContactDigitalLiberaryThrees',
  component:()=>import('../components/ContactDigitalLiberaryThrees.vue'),
},

{
  path:'/ContactDigitalLiberaryThrees/add',
  name:'AddContactDigitalLiberaryThrees',
  component:()=>import('../components/AddDigitalLiberaryThrees.vue'),
},

{
  path:'/ContactDigitalLiberaryThrees/edit:digitalLiberarythreeId',
  name:'EditContactDigitalLiberaryThrees',
  component:()=>import('../components/EditDigitalLiberaryThrees.vue'),
},

/*see more Buss_eco_table_list */
{
  path:'/SeeMoreBuss_eco_table_list:businessCollegeId',
  name:'SeeMoreBuss_eco_table_list',
  component:()=>import('../components/SeeMoreBuss_eco_table_list.vue'),
  },
/*see more Agri_table_List */
{
  path:'/SeeMoreAgri_table_List:agriculcherCollegeId',
  name:'SeeMoreAgri_table_List',
  component:()=>import('../components/SeeMoreAgri_table_List.vue'),
  },

/*see more Law_table_List */
{
  path:'/SeeMoreLaw_table_list:lawCollegeId',
  name:'SeeMoreLaw_table_list',
  component:()=>import('../components/SeeMoreLaw_table_list.vue'),
  },
 
/*see more  SeeMoreMedicine_table_list */
{
  path:'/SeeMoreMedicine_table_list:medicineCollegeId',
  name:' SeeMoreMedicine_table_list',
  component:()=>import('../components/SeeMoreMedicine_table_list.vue'),
  },
/*see more  SeeMoreHealth_list_table */
{
  path:'/SeeMoreHealth_list_table:healthCollegeId',
  name:' SeeMoreHealth_list_table',
  component:()=>import('../components/SeeMoreHealth_list_table.vue'),
  },

  /*see more  SeeMoreNat_and_comp_table */
{
  path:'/SeeMoreNat_and_comp_table:naturalCollegeId',
  name:'SeeMoreNat_and_comp_table',
  component:()=>import('../components/SeeMoreNat_and_comp_table.vue'),
  },

  
  /* SeeMoreSocial_scince_table */
{
  path:'/SeeMoreSocial_scince_table:socialCollegeId',
  name:'SeeMoreSocial_scince_table',
  component:()=>import('../components/SeeMoreSocial_scince_table.vue'),
  },

  /* SeeMoreLand_admi_table_list */
  {
    path:'/SeeMoreLand_admi_table_list:landAdmiCollegeId',
    name:'SeeMoreLand_admi_table_list',
    component:()=>import('../components/SeeMoreLand_admi_table_list.vue'),
    },
 /* SeeMoreTechnology_table_list */
 {
  path:'/SeeMoreTechnology_table_list:techinologyCollegeId',
  name:'SeeMoreTechnology_table_list',
  component:()=>import('../components/SeeMoreTechnology_table_list.vue'),
  },

    /*database on adminstraiton president*/
{
  path:'/ContactAdministration',
  name:'ContactAdministration',
  component:()=>import('../views/ContactAdministration.vue'),
},

{
  path:'/ContactAdministration/add',
  name:'AddAdministration',
  component:()=>import('../views/AddAdministration.vue'),
},

{
  path:'/ContactAdministration/edit:presidentOfficeId',
  name:'EditAdministration',
  component:()=>import('../views/EditAdministration.vue'),
},

/*database on acadamic affers*/

{
  path:'/ContactAcadamicAffers',
  name:'ContactAcadamicAffers',
  component:()=>import('../views/ContactAcadamicAffers.vue'),
},

{
  path:'/ContactAcadamicAffers/add',
  name:'AddAcadamicAffers',
  component:()=>import('../views/AddAcadamicAffers.vue'),
},

{
  path:'/ContactAcadamicAffers/edit:acadamicAffersId',
  name:'EditAcadamicAffers',
  component:()=>import('../views/EditAcadamicAffers.vue'),
},

/*database on Continuing Director*/

{
  path:'/ContactContinuingDirector',
  name:'ContactContinuingDirector',
  component:()=>import('../views/ContactContinuingDirector.vue'),
},

{
  path:'/ContactContinuingDirector/add',
  name:'AddContinuingDirector',
  component:()=>import('../views/AddContinuingDirector.vue'),
},

{
  path:'/ContactContinuingDirector/edit:continuingDirectorId',
  name:'EditContinuingDirector',
  component:()=>import('../views/EditContinuingDirector.vue'),
},

/*database on Corporate Director*/

{
  path:'/ContactCorporateDirector',
  name:'ContactCorporateDirector',
  component:()=>import('../views/ContactCorporateDirector.vue'),
},

{
  path:'/ContactCorporateDirector/add',
  name:'AddCorporateDirector',
  component:()=>import('../views/AddCorporateDirector.vue'),
},

{
  path:'/ContactCorporateDirector/edit:corporateDirectorId',
  name:'EditCorporateDirector',
  component:()=>import('../views/EditCorporateDirector.vue'),
},

/*database on register*/

{
  path:'/ContactRegister',
  name:'ContactRegister',
  component:()=>import('../views/ContactRegister.vue'),
},

{
  path:'/ContactRegister/add',
  name:'AddRegister',
  component:()=>import('../views/AddRegister.vue'),
},

{
  path:'/ContactRegister/edit:registerId',
  name:'EditRegister',
  component:()=>import('../views/EditRegister.vue'),
},
/*database on others*/

{
  path:'/ContactOther',
  name:'ContactOther',
  component:()=>import('../views/ContactOther.vue'),
},

{
  path:'/ContactOther/add',
  name:'AddOther',
  component:()=>import('../views/AddOther.vue'),
},

{
  path:'/ContactOther/edit:otherId',
  name:'EditOther',
  component:()=>import('../views/EditOther.vue'),
},
 
/*database on finance*/

{
  path:'/ContactFinanceOffice',
  name:'ContactFinanceOffice',
  component:()=>import('../views/ContactFinanceOffice.vue'),
},

{
  path:'/ContactFinanceOffice/add',
  name:'AddFinanceOffice',
  component:()=>import('../views/AddFinanceOffice.vue'),
},

{
  path:'/ContactFinanceOffice/edit:FinanceOfficeId',
  name:'EditFinanceOffice',
  component:()=>import('../views/EditFinanceOffice.vue'),
},
/*database on comment*/

{
  path:'/ContactComment',
  name:'ContactComment',
  component:()=>import('../views/ContactComment.vue'),
},

{
  path:'/ContactComment/add',
  name:'AddComment',
  component:()=>import('../views/AddComment.vue'),
},

















































];


const router=createRouter({
 history:createWebHistory(),
 routes,   
});

export default router;

