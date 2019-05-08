function scoreQuest(user, choice) {
    user.hp = user.hp + choice.hp;
    user.cs = user.cs + choice.cs;
    return user;
}

export default scoreQuest;