pragma solidity >= 0.5.0 < 0.7.0;

contract adoption {
  address[16]  public  adopters;
  function getAdopters() public view returns (address[16] memory ) {
    return adopters;
  }
  function adopt (uint petId) public returns (uint ){
    require(petId >= 0 && petId <= 15,
    "Pet ID invalid, pet doesnt exist");
    adopters[petId] = msg.sender; /// this links the adopter to the petId of the pet thats been adopted
    return petId;

  }
}
/// a public array is created with 16 addresses, getAdopters returns this array,
/// adopt(uint petId) this helps us adopt a pet by ID,i.e  id 8, subsequently
/// we link the address of the person who adopted set pet, to a spot in the array
/// with the same number as the petID , i.8 pet number 8 is adopted by address in the 8th position