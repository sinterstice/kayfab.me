+++
title = 'Hire Me'
+++

So you'd like to hire me for your next project! Excellent! But before you reach out, to make sure your project is a good fit, let me spell out what I offer.

Things I can do for you:

- Build a website
- Build a custom web app (including database and backend services)
- Build a custom native app
- Provide affordable hosting and maintenance services for the above
- Write copy, edit copy, import content, create and manage backups
- Consult on performance tuning and bug fixing for existing applications (see [my work page](/projects) for a list of languages I am proficient in)
- Manage my own hours, scope work, and provide estimates

Things I *cannot* do for you:

- Provide project management services
- Provide graphic design services (you will need to contract with an actual designer)

With that in mind, if you would like to contract with me, send me an email at:

<button id="contact">Click to reveal email</button>
<script>
function rot10(str) {
    return Array.from(str).map((c) => String.fromCharCode(c.charCodeAt(0) + 10)).join('');
}

function derot10(str) {
    return Array.from(str).map((c) => String.fromCharCode(c.charCodeAt(0) - 10)).join('');
}

const el = document.getElementById('contact');

el.addEventListener('click', (e) => {
    e.preventDefault();

    const replaceEl = document.createElement('a');
    const email = derot10("ro\u0083Juk\u0083pkl8wo");
    replaceEl.innerText = email;
    replaceEl.href = `mailto:${email}`;

    el.parentNode.insertBefore(replaceEl, el);
    el.parentNode.removeChild(el);
});
</script>
