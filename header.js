//navbar and footer

nav = $("#nav");
navContainer = $('<div>').attr('class', 'container');
mainLink = $('<a>').attr('class', 'navbar-brand').attr('href', "index.html")
    .text('Canadaplates.ca');
navContainer.append(mainLink);
navButton = $('<button>')
    .attr('class', 'navbar-toggler collapsed')
    .attr('type', 'button')
    .attr('data-bs-toggle', 'collapse')
    .attr('data-bs-target', '#navbarsE')
    .attr('aria-controls', 'navbarsE')
    .attr('aria-expanded', 'false')
    .attr('aria-label', 'Toggle navigation');
navSpan = $('<span>').attr('class', 'navbar-toggler-icon')
navButton.append(navSpan);
navContainer.append(navButton);

navDiv = $('<div>')
    .attr('class', "navbar-collapse collapse text-center")
    .attr('id', 'navbarsE')
navUl = $('<ul>').attr('class', 'navbar-nav me-auto mb-2 mb-sm-0 text-center')
OneNavLi = $("<li>")
    .attr('class', 'nav-item')
OneNavA = $("<a>")
    .attr('class', 'nav-link')
    .attr('href', 'index.html')
    .text("Canadian Plates")
OneNavLi.append(OneNavA);
navUl.append(OneNavLi);
TwoNavLi = $("<li>")
    .attr('class', 'nav-item');
TwoNavA = $("<a>")
    .attr('class', 'nav-link disabled')
    .attr('style', 'color: rgb(184, 184, 184) !important')
    .text("American Plates - Coming Soon!");
TwoNavLi.append(TwoNavA);
navUl.append(TwoNavLi);
ThreeNavLi = $('<li>').attr('class', 'nav-item')
ThreeNavA = $('<a>').attr('class', 'nav-link')
    .attr('href', '/privacy.html')
    .text('Privacy')
ThreeNavLi.append(ThreeNavA)
navUl.append(ThreeNavLi)
navDiv.append(navUl)
navContainer.append(navDiv)
nav.append(navContainer)

footer = $("#footer")
footerContainer = $("<div>").attr('class', 'container')
mainFooter = $('<footer>').attr('class', 'py-3')
footerUL = $("<ul>").attr('class', 'nav justify-content-center border-bottom pb-3 mb-3')
footerUlListItemOne = $("<li>").attr('class', 'nav-item')
footerAnchorOne = $('<a>').attr('href', 'index.html').attr('class', 'nav-link px-2 text-muted').text('Home')
footerUlListItemOne.append(footerAnchorOne)
footerUL.append(footerUlListItemOne)
footerUlListItemTwo = $("<li>").attr('class', 'nav-item')
footerAnchorTwo = $("<a>").attr('href', '/privacy.html').attr('class', 'nav-link px-2 text-muted').text('Privacy')
footerUlListItemTwo.append(footerAnchorTwo)
footerUL.append(footerUlListItemTwo)
mainFooter.append(footerUL)

pLink = $('<p>').attr('class', 'text-center nav-link').text('A Project by Sy Constantin, 2023')
mainFooter.append(pLink)

footerRowDiv = $("<div>").attr('class', 'row')
footerColDiv = $('<div>').attr('class', 'col-12')
githubAnchor = $('<a>').attr('class', 'text-decoration-none').attr('href', "https://github.com/coolokawesome")
githubIcon = $('<i>').attr('class', 'github fab fa-github d-flex justify-content-center')
githubAnchor.append(githubIcon)
footerColDiv.append(githubAnchor)
footerRowDiv.append(footerColDiv)
mainFooter.append(footerRowDiv)
footerContainer.append(mainFooter)
footer.append(footerContainer)
