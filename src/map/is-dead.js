function isDead(user) {
    if(user.hp <= 0) {
        return true;
    } else {
        return false;
    }
}

export default isDead;
