function scoreCs(user) {
    if(user.cs === 0) {
        return 'useless';
    } else if(user.cs > 0 && user.cs <= 50) {
        return 'helpful';
    } else {
        return 'virtuous';
    }
}

export default scoreCs;