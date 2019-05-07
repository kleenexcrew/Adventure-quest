function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.textContent = quest.title;
    return span;
}

export default createCompletedQuest;