function gemsToDiamond(friend1, friend2, friend3){
    const friend1GemsCapacity = friend1 * 21;
    const friend2GemsCapacity = friend2 * 32;
    const friend3GemsCapacity = friend3 * 43;
    const totalFriendGemsCapacity = (friend1GemsCapacity + friend2GemsCapacity + friend3GemsCapacity);
    if(totalFriendGemsCapacity <= 2000){
        return totalFriendGemsCapacity;
    }
    else{
        return totalFriendGemsCapacity - 2000;
    }
}
const friendsGemsCapacity = gemsToDiamond(100, 5, 1);
console.log(friendsGemsCapacity);