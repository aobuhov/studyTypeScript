enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Premium;
console.log(membership);

const membershipReverse = Membership[1];
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FB',
    INSTAGRAM = 'INST'
}
const sm = SocialMedia.VK;
console.log(sm);