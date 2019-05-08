function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('completed-span');
    return span;
}

export default createCompletedQuest;