"use strict";

const members = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },

];

for(let i = 0; i < members.length; i++){
    console.log(members[i]);
    const currentMember = members[i];
    const listItem = `
        <li>
            <p>${currentMember.firstName}<p>
            <p>${currentMember.lastName}<p>
            <p>${currentMember.role}<p>
            <p>${currentMember.image}<p>
        </li>
    `;

    document.getElementById("member-list").innerHTML += listItem;
}