function createQuestLink(quest) {
    const link = document.createElement('a');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = './quest-page.html?' + searchParams.toString();
    link.textContent = 'Burning Building';
    return link;
}

export default createQuestLink;