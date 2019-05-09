function scoreHp(user) {
    if(user.hp <= 0) {
        return 'dead';
    } else if(user.hp < 50) {
        return 'crippled';
    } else {
        return 'healthy';
    }
}

export default scoreHp;