function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        power: formData.get('power'),
        hp: 50,
        cs: 0
    };
    return user;
}

export default makeUser;