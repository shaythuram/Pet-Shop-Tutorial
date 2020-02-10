const adoption = artifacts.require("adoption");

contract("adoption", function(accounts) {
  describe('First group of tests' , () =>{
    let instance;
    
    before( async () => {
      instance = await adoption.deployed();
    });
  })

  it('User Should adopt pet' , async() =>{
    instance = await adoption.deployed();
    await instance.adopt.sendTransaction(8 , {from : accounts[0]}); ///8TH PET IS ADOPTED BY 0TH ACCOUNT
    let adopter = await instance.adopters.call(8); /// calls into the adopters array and returns the 8th position's address
    assert.equal(adopter, accounts[0], "Incorrect adopter"); /// checks whether the 8th object in the adopters array has an address equal to address[0] i.e the adopter
  });
  it('Should get adopter address by petId in array' , async()=>{
    instance = await adoption.deployed();
    let adopters = await instance.getAdopters.call(); ///
    assert.equal(adopters[8], accounts[0], "Owner of pet is not the same as adopter ");
  });

  it('Should throw error if invalid petID given' , async()=>{
   
    try{
      instance = await adoption.deployed();
      await instance.adopt.sendTransaction(17 , {from : accounts[0]});
      assert.fail(true, false,  "Function  did not throw");
    } catch (error){
      assert.include(String(error), "revert", `Expected "revert" but got ${error}`);
    }

/// basically if i give a number between 0 n 16 it will give me 
/// an error cos we want this function to fail, 
/// so if i give 188 it will return a green tick since the function fails 

  })

});
