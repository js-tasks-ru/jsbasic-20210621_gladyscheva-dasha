function makeFriendsList(friends) {
  let unorderedList = document.createElement('ul');
   
   for (let friend of friends) {
     let friendName = `<li>${friend.firstName} ${friend.lastName}</li>`
     unorderedList.innerHTML += friendName;
   }
  
   return unorderedList;
}
