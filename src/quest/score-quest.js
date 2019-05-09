function scoreQuest(user, choice, questId) {
    user.hp = user.hp + choice.hp;
    user.cs = user.cs + choice.cs;
    user.completed[questId] = true;
    return user;
}

export default scoreQuest;