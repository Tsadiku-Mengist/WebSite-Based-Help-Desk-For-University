import axios from "axios";
export class ContactService{
    static serverURL = `http://localhost:9000`; 

                    
             
             /*businessColleges Data Base acesses */
               
                    static getAllBusinessColleges (){
                        let dataURL=`${this.serverURL}/businessColleges`;
                        return axios.get(dataURL);}
                    
                        static getBusinessCollege(businessCollegeId){
                            let dataURL=`${this.serverURL}/businessColleges/${businessCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createBusinessCollege(businessCollege){
                                let dataURL = `${this.serverURL}/businessColleges/`;
                                return axios.post(dataURL,businessCollege);
                            }
                                
                                static updateBusinessCollege(businessCollege,businessCollegeId){
                                    let dataURL=`${this.serverURL}/businessColleges/${businessCollegeId}`;
                                    return axios.put(dataURL,businessCollege);}

                                    
                                    static deleteBusinessCollege(businessCollegeId){
                                        let dataURL=`${this.serverURL}/businessColleges/${businessCollegeId}`;
                                        return axios.delete(dataURL);}

                        
                                         /*agriculcuer Colleges Data Base acesses */
               
                    static getAllAgriculcherColleges (){
                        let dataURL=`${this.serverURL}/agriculcherColleges`;
                        return axios.get(dataURL);}
                    
                        static getAgriculcherCollege(agriculcherCollegeId){
                            let dataURL=`${this.serverURL}/agriculcherColleges/${agriculcherCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createAgriculcherCollege(agriculcherCollege){
                                let dataURL = `${this.serverURL}/agriculcherColleges/`;
                                return axios.post(dataURL,agriculcherCollege);
                            }
                                
                                static updateAgriculcherCollege(agriculcherCollege,agriculcherCollegeId){
                                    let dataURL=`${this.serverURL}/agriculcherColleges/${agriculcherCollegeId}`;
                                    return axios.put(dataURL,agriculcherCollege);}

                                    
                                    static deleteAgriculcherCollege(agriculcherCollegeId){
                                        let dataURL=`${this.serverURL}/agriculcherColleges/${agriculcherCollegeId}`;
                                        return axios.delete(dataURL);}

                                        
                                         /*law Colleges Data Base acesses */
                    static getAllLawColleges (){
                        let dataURL=`${this.serverURL}/lawColleges`;
                        return axios.get(dataURL);}
                    
                        static getLawCollege(lawCollegeId){
                            let dataURL=`${this.serverURL}/lawColleges/${lawCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createLawCollege(lawCollege){
                                let dataURL = `${this.serverURL}/lawColleges/`;
                                return axios.post(dataURL,lawCollege);
                            }
                                
                                static updateLawCollege(lawCollege,lawCollegeId){
                                    let dataURL=`${this.serverURL}/lawColleges/${lawCollegeId}`;
                                    return axios.put(dataURL,lawCollege);}

                                    
                                    static deleteLawCollege(lawCollegeId){
                                        let dataURL=`${this.serverURL}/lawColleges/${lawCollegeId}`;
                                        return axios.delete(dataURL);}

                                          
                                         /*medicine Colleges Data Base acesses */
                    static getAllMedicineColleges (){
                        let dataURL=`${this.serverURL}/medicineColleges`;
                        return axios.get(dataURL);}
                    
                        static getMedicineCollege(medicineCollegeId){
                            let dataURL=`${this.serverURL}/medicineColleges/${medicineCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createMedicineCollege(medicineCollege){
                                let dataURL = `${this.serverURL}/medicineColleges/`;
                                return axios.post(dataURL,medicineCollege);
                            }
                                
                                static updateMedicineCollege(medicineCollege,medicineCollegeId){
                                    let dataURL=`${this.serverURL}/medicineColleges/${medicineCollegeId}`;
                                    return axios.put(dataURL,medicineCollege);}

                                    
                                    static deleteMedicineCollege(medicineCollegeId){
                                        let dataURL=`${this.serverURL}/medicineColleges/${medicineCollegeId}`;
                                        return axios.delete(dataURL);}


                                          /*techinology Colleges Data Base acesses */
                    static getAllTechinologyColleges (){
                        let dataURL=`${this.serverURL}/techinologyColleges`;
                        return axios.get(dataURL);}
                    
                        static getTechinologyCollege(techinologyCollegeId){
                            let dataURL=`${this.serverURL}/techinologyColleges/${techinologyCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createTechinologyCollege(techinologyCollege){
                                let dataURL = `${this.serverURL}/techinologyColleges/`;
                                return axios.post(dataURL,techinologyCollege);
                            }
                                
                                static updateTechinologyCollege(techinologyCollege,techinologyCollegeId){
                                    let dataURL=`${this.serverURL}/techinologyColleges/${techinologyCollegeId}`;
                                    return axios.put(dataURL,techinologyCollege);}

                                    
                                    static deleteTechinologyCollege(techinologyCollegeId){
                                        let dataURL=`${this.serverURL}/techinologyColleges/${techinologyCollegeId}`;
                                        return axios.delete(dataURL);}
                                

                   /*health Colleges Data Base acesses */
                    static getAllHealthColleges (){
                        let dataURL=`${this.serverURL}/healthColleges`;
                        return axios.get(dataURL);}
                    
                        static getHealthCollege(healthCollegeId){
                            let dataURL=`${this.serverURL}/healthColleges/${healthCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createHealthCollege(healthCollege){
                                let dataURL = `${this.serverURL}/healthColleges/`;
                                return axios.post(dataURL,healthCollege);
                            }
                                
                                static updateHealthCollege(healthCollege,healthCollegeId){
                                    let dataURL=`${this.serverURL}/healthColleges/${healthCollegeId}`;
                                    return axios.put(dataURL,healthCollege);}

                                    
                                    static deleteHealthCollege(healthCollegeId){
                                        let dataURL=`${this.serverURL}/healthColleges/${healthCollegeId}`;
                                        return axios.delete(dataURL);}


                                         /*natural Colleges Data Base acesses */
                    static getAllNaturalColleges (){
                        let dataURL=`${this.serverURL}/naturalColleges`;
                        return axios.get(dataURL);}
                    
                        static getNaturalCollege(naturalCollegeId){
                            let dataURL=`${this.serverURL}/naturalColleges/${naturalCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createNaturalCollege(naturalCollege){
                                let dataURL = `${this.serverURL}/naturalColleges/`;
                                return axios.post(dataURL,naturalCollege);
                            }
                                
                                static updateNaturalCollege(naturalCollege,naturalCollegeId){
                                    let dataURL=`${this.serverURL}/naturalColleges/${naturalCollegeId}`;
                                    return axios.put(dataURL,naturalCollege);}

                                    
                                    static deleteNaturalCollege(naturalCollegeId){
                                        let dataURL=`${this.serverURL}/naturalColleges/${naturalCollegeId}`;
                                        return axios.delete(dataURL);}

                                         /*social scince and humanity Colleges Data Base acesses */
                    static getAllSocialColleges (){
                        let dataURL=`${this.serverURL}/socialColleges`;
                        return axios.get(dataURL);}
                    
                        static getSocialCollege(socialCollegeId){
                            let dataURL=`${this.serverURL}/socialColleges/${socialCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createSocialCollege(socialCollege){
                                let dataURL = `${this.serverURL}/socialColleges/`;
                                return axios.post(dataURL,socialCollege);
                            }
                                
                                static updateSocialCollege(socialCollege,socialCollegeId){
                                    let dataURL=`${this.serverURL}/socialColleges/${socialCollegeId}`;
                                    return axios.put(dataURL,socialCollege);}

                                    
                                    static deleteSocialCollege(socialCollegeId){
                                        let dataURL=`${this.serverURL}/socialColleges/${socialCollegeId}`;
                                        return axios.delete(dataURL);}


                                       /* College of land administration Data Base acesses */
                    static getAllLandAdmiColleges (){
                        let dataURL=`${this.serverURL}/landAdmiColleges`;
                        return axios.get(dataURL);}
                    
                        static getLandAdmiCollege(landAdmiCollegeId){
                            let dataURL=`${this.serverURL}/landAdmiColleges/${landAdmiCollegeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createLandAdmiCollege(landAdmiCollege){
                                let dataURL = `${this.serverURL}/landAdmiColleges/`;
                                return axios.post(dataURL,landAdmiCollege);
                            }
                                
                                static updateLandAdmiCollege(landAdmiCollege,landAdmiCollegeId){
                                    let dataURL=`${this.serverURL}/landAdmiColleges/${landAdmiCollegeId}`;
                                    return axios.put(dataURL,landAdmiCollege);}

                                    
                                    static deleteLandAdmiCollege(landAdmiCollegeId){
                                        let dataURL=`${this.serverURL}/landAdmiColleges/${landAdmiCollegeId}`;
                                        return axios.delete(dataURL);}

                                        
 
     /* liberary one Data Base acesses */
     static getAllLiberaryOnes (){
        let dataURL=`${this.serverURL}/liberaryOnes`;
        return axios.get(dataURL);}
    
        static getLiberaryOne(liberaryOneId){
            let dataURL=`${this.serverURL}/liberaryOnes/${liberaryOneId}`;
            return axios.get(dataURL);
        }
    
            static createLiberaryOne(liberaryOne){
                let dataURL = `${this.serverURL}/liberaryOnes/`;
                return axios.post(dataURL,liberaryOne);
            }
                
                static updateLiberaryOne(liberaryOne,liberaryOneId){
                    let dataURL=`${this.serverURL}/liberaryOnes/${liberaryOneId}`;
                    return axios.put(dataURL,liberaryOne);}

                    
                    static deleteLiberaryOne(liberaryOneId){
                        let dataURL=`${this.serverURL}/liberaryOnes/${liberaryOneId}`;
                        return axios.delete(dataURL);}


                        /* liberary two Data Base acesses */
     static getAllLiberaryTwos (){
        let dataURL=`${this.serverURL}/liberaryTwos`;
        return axios.get(dataURL);}
    
        static getLiberaryTwo(liberaryTwoId){
            let dataURL=`${this.serverURL}/liberaryOnes/${liberaryTwoId}`;
            return axios.get(dataURL);
        }
    
            static createLiberaryTwo(liberaryTwo){
                let dataURL = `${this.serverURL}/liberaryTwos/`;
                return axios.post(dataURL,liberaryTwo);
            }
                
                static updateLiberaryTwo(liberaryTwo,liberaryTwoId){
                    let dataURL=`${this.serverURL}/liberaryTwos/${liberaryTwoId}`;
                    return axios.put(dataURL,liberaryTwo);}

                    
                    static deleteLiberaryTwo(liberaryTwoId){
                        let dataURL=`${this.serverURL}/liberaryTwos/${liberaryTwoId}`;
                        return axios.delete(dataURL);}


                         /* liberary three Data Base acesses */
     static getAllLiberaryThrees (){
        let dataURL=`${this.serverURL}/liberaryThrees`;
        return axios.get(dataURL);}
    
        static getLiberaryThree(liberaryThreeId){
            let dataURL=`${this.serverURL}/liberaryThrees/${liberaryThreeId}`;
            return axios.get(dataURL);
        }
    
            static createLiberaryThree(liberaryThree){
                let dataURL = `${this.serverURL}/liberaryThrees/`;
                return axios.post(dataURL,liberaryThree);
            }
                
                static updateLiberaryThree(liberaryThree,liberaryThreeId){
                    let dataURL=`${this.serverURL}/liberaryThrees/${liberaryThreeId}`;
                    return axios.put(dataURL,liberaryThree);}

                    
                    static deleteLiberaryThree(liberaryThreeId){
                        let dataURL=`${this.serverURL}/liberaryThrees/${liberaryThreeId}`;
                        return axios.delete(dataURL);}

                          /*digital liberary one Data Base acesses */
     static getAllDigitalLiberaryOnes (){
        let dataURL=`${this.serverURL}/digitalLiberaryOnes`;
        return axios.get(dataURL);}
    
        static getDigitalLiberaryOne(digitalLiberaryOneId){
            let dataURL=`${this.serverURL}/digitalLiberaryOnes/${digitalLiberaryOneId}`;
            return axios.get(dataURL);
        }
    
            static createDigitalLiberaryOne(digitalLiberaryOne){
                let dataURL = `${this.serverURL}/digitalLiberaryOnes/`;
                return axios.post(dataURL,digitalLiberaryOne);
            }
                
                static updateDigitalLiberaryOne(digitalLiberaryOne,digitalLiberaryOneId){
                    let dataURL=`${this.serverURL}/digitalLiberaryOnes/${digitalLiberaryOneId}`;
                    return axios.put(dataURL,digitalLiberaryOne);}

                    
                    static deleteDigitalLiberaryOne(digitalLiberaryOneId){
                        let dataURL=`${this.serverURL}/digitalLiberaryOnes/${digitalLiberaryOneId}`;
                        return axios.delete(dataURL);}

 
                          /*digital liberary two Data Base acesses */

                          static getAllDigitalLiberaryTwos (){
                            let dataURL=`${this.serverURL}/digitalLiberaryTwos`;
                            return axios.get(dataURL);}
                        
                            static getDigitalLiberaryTwo(digitalLiberaryTwoId){
                                let dataURL=`${this.serverURL}/digitalLiberaryTwos/${digitalLiberaryTwoId}`;
                                return axios.get(dataURL);
                            }
                        
                                static createDigitalLiberaryTwo(digitalLiberaryTwo){
                                    let dataURL = `${this.serverURL}/digitalLiberaryTwos/`;
                                    return axios.post(dataURL,digitalLiberaryTwo);
                                }
                                    
                                    static updateDigitalLiberaryTwo(digitalLiberaryTwo,digitalLiberaryTwoId){
                                        let dataURL=`${this.serverURL}/digitalLiberaryTwos/${digitalLiberaryTwoId}`;
                                        return axios.put(dataURL,digitalLiberaryTwo);}
                    
                                        
                                        static deleteDigitalLiberaryTwo(digitalLiberaryTwoId){
                                            let dataURL=`${this.serverURL}/digitalLiberaryTwos/${digitalLiberaryTwoId}`;
                                            return axios.delete(dataURL);}


                                            /*digital liberary three Data Base acesses */

                          static getAllDigitalLiberarythrees (){
                            let dataURL=`${this.serverURL}/digitalLiberarythrees`;
                            return axios.get(dataURL);}
                        
                            static getDigitalLiberarythree(digitalLiberarythreeId){
                                let dataURL=`${this.serverURL}/digitalLiberarythrees/${digitalLiberarythreeId}`;
                                return axios.get(dataURL);
                            }
                        
                                static createDigitalLiberarythree(digitalLiberarythree){
                                    let dataURL = `${this.serverURL}/digitalLiberarythrees/`;
                                    return axios.post(dataURL,digitalLiberarythree);
                                }
                                    
                                    static updateDigitalLiberarythree(digitalLiberarythree,digitalLiberarythreeId){
                                        let dataURL=`${this.serverURL}/digitalLiberarythrees/${digitalLiberarythreeId}`;
                                        return axios.put(dataURL,digitalLiberarythree);}
                    
                                        
                                        static deleteDigitalLiberarythree(digitalLiberarythreeId){
                                            let dataURL=`${this.serverURL}/digitalLiberarythrees/${digitalLiberarythreeId}`;
                                            return axios.delete(dataURL);}

                                            /* Finance Office Data Base acesses */
 static getAllFinanceOffices (){
    let dataURL=`${this.serverURL}/financeOffices`;
    return axios.get(dataURL);}

    static getFinanceOffice(financeOfficeId){
        let dataURL=`${this.serverURL}/financeOffices/${financeOfficeId}`;
        return axios.get(dataURL);
    }

        static createFinanceOffice(financeOffice){
            let dataURL = `${this.serverURL}/financeOffices/`;
            return axios.post(dataURL,financeOffice);
        }
            
            static updateFinanceOffice(financeOffice,financeOfficeId){
                let dataURL=`${this.serverURL}/financeOffices/${financeOfficeId}`;
                return axios.put(dataURL,financeOffice);}

                
                static deleteFinanceOffice(financeOfficeId){
                    let dataURL=`${this.serverURL}/financeOffices/${financeOfficeId}`;
                    return axios.delete(dataURL);}


  /*Other Data Base acesses */
               
static getAllOthers (){
    let dataURL=`${this.serverURL}/others`;
    return axios.get(dataURL);}

    static getOther(otherId){
        let dataURL=`${this.serverURL}/others/${otherId}`;
        return axios.get(dataURL);
    }

        static createOther(other){
            let dataURL = `${this.serverURL}/others/`;
            return axios.post(dataURL,other);
        }
            
            static updateOther(other,otherId){
                let dataURL=`${this.serverURL}/others/${otherId}`;
                return axios.put(dataURL,other);}
   


                
                static deleteOther(otherId){
                    let dataURL=`${this.serverURL}/others/${otherId}`;
                    return axios.delete(dataURL);}
 
 
 
 
 
             /*Adiministratoin Office Data Base acesses */
               
                    static getAllPresidentOffices (){
                        let dataURL=`${this.serverURL}/presidentOffices`;
                        return axios.get(dataURL);}
                    
                        static getPresidentOffice(presidentOfficeId){
                            let dataURL=`${this.serverURL}/presidentOffices/${presidentOfficeId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createPresidentOffice(presidentOffice){
                                let dataURL = `${this.serverURL}/presidentOffices/`;
                                return axios.post(dataURL,presidentOffice);
                            }
                                
                                static updatePresidentOffice(presidentOffice,presidentOfficeId){
                                    let dataURL=`${this.serverURL}/presidentOffices/${presidentOfficeId}`;
                                    return axios.put(dataURL,presidentOffice);}

                                    
                                    static deletePresidentOffice(presidentOfficeId){
                                        let dataURL=`${this.serverURL}/presidentOffices/${presidentOfficeId}`;
                                        return axios.delete(dataURL);}

                        /*Acadamic affers Data Base acesses */
               
                    static getAllAcadamicAfferss (){
                        let dataURL=`${this.serverURL}/acadamicAfferss`;
                        return axios.get(dataURL);}
                    
                        static getAcadamicAffers(acadamicAffersId){
                            let dataURL=`${this.serverURL}/acadamicAfferss/${acadamicAffersId}`;
                            return axios.get(dataURL);
                        }
                    
                            static createAcadamicAffers(acadamicAffers){
                                let dataURL = `${this.serverURL}/acadamicAfferss/`;
                                return axios.post(dataURL,acadamicAffers);
                            }
                                
                                static updateAcadamicAffers(acadamicAffers,acadamicAffersId){
                                    let dataURL=`${this.serverURL}/acadamicAfferss/${acadamicAffersId}`;
                                    return axios.put(dataURL,acadamicAffers);}

                                    
                                    static deleteAcadamicAffers(acadamicAffersId){
                                        let dataURL=`${this.serverURL}/acadamicAfferss/${acadamicAffersId}`;
                                        return axios.delete(dataURL);}

                        
/*Continuing Director Office Data Base acesses */
               
static getAllContinuingDirectors (){
    let dataURL=`${this.serverURL}/continuingDirectors`;
    return axios.get(dataURL);}

    static getContinuingDirector(continuingDirectorId){
        let dataURL=`${this.serverURL}/continuingDirectors/${continuingDirectorId}`;
        return axios.get(dataURL);
    }

        static createContinuingDirector(continuingDirector){
            let dataURL = `${this.serverURL}/continuingDirectors/`;
            return axios.post(dataURL,continuingDirector);
        }
            
            static updateContinuingDirector(continuingDirector,continuingDirectorId){
                let dataURL=`${this.serverURL}/continuingDirectors/${continuingDirectorId}`;
                return axios.put(dataURL,continuingDirector);}
   


                
                static deleteContinuingDirector(continuingDirectorId){
                    let dataURL=`${this.serverURL}/continuingDirectors/${continuingDirectorId}`;
                    return axios.delete(dataURL);}



                    /*Corporate Director Office Data Base acesses */
               
static getAllCorporateDirectors (){
    let dataURL=`${this.serverURL}/corporateDirectors`;
    return axios.get(dataURL);}

    static getCorporateDirector(corporateDirectorId){
        let dataURL=`${this.serverURL}/corporateDirectors/${corporateDirectorId}`;
        return axios.get(dataURL);
    }

        static createCorporateDirector(corporateDirector){
            let dataURL = `${this.serverURL}/corporateDirectors/`;
            return axios.post(dataURL,corporateDirector);
        }
            
            static updateCorporateDirector(corporateDirector,corporateDirectorId){
                let dataURL=`${this.serverURL}/corporateDirectors/${corporateDirectorId}`;
                return axios.put(dataURL,corporateDirector);}
   


                
                static deleteCorporateDirector(corporateDirectorId){
                    let dataURL=`${this.serverURL}/corporateDirectors/${corporateDirectorId}`;
                    return axios.delete(dataURL);}



                    /*Register Data Base acesses */
               
static getAllRegisters (){
    let dataURL=`${this.serverURL}/registers`;
    return axios.get(dataURL);}

    static getRegister(registerId){
        let dataURL=`${this.serverURL}/registers/${registerId}`;
        return axios.get(dataURL);
    }

        static createRegister(register){
            let dataURL = `${this.serverURL}/registers/`;
            return axios.post(dataURL,register);
        }
            
            static updateRegister(register,registerId){
                let dataURL=`${this.serverURL}/registers/${registerId}`;
                return axios.put(dataURL,register);}
   


                
                static deleteRegister(registerId){
                    let dataURL=`${this.serverURL}/registers/${registerId}`;
                    return axios.delete(dataURL);}


                  /*Comment Data Base acesses */
               
static getAllComments (){
    let dataURL=`${this.serverURL}/comments`;
    return axios.get(dataURL);}

    static getComment(commentId){
        let dataURL=`${this.serverURL}/comments/${commentId}`;
        return axios.get(dataURL);
    }

        static createComment(comment){
            let dataURL = `${this.serverURL}/comments/`;
            return axios.post(dataURL,comment);
        }
            
            
   
                static deleteComment(commentId){
                    let dataURL=`${this.serverURL}/comments/${commentId}`;
                    return axios.delete(dataURL);}

        
                 
               
 
            
   
                  
                
  
                     
                     
                     
                     
                    
                     
                     
                     
                     
                     
                                              
                    
                     
                     
                     
                     
                    
                     
 
 
 

 
 
 
 
 
                          

 
 
 
 

 
 
 
                    
                     
                     
                     
                     
                    
                     
                     
                     
                     
                     
                                              
                    
                     
                     
                     
                     
                    
                     
 
 
 

 
 
 
 
 
                          

 
 
 
 

 
 
 
 
 
                              }  