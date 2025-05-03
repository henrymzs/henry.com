const commandInput = document.getElementById('command-input');
const commandHistory = document.getElementById('command-history');
const quickLinks = document.getElementById('quick-links');

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const commandText = commandInput.value.trim().toLowerCase();
        commandInput.value = ''; // Deve limpar o campo de entrada
        if (commandText) {
            executeCommand(commandText);
        }
    }
});

function addOutput(text) {
    const outputLine = document.createElement('div');
    outputLine.className = 'command-history';
    outputLine.innerHTML = text;

    commandHistory.appendChild(outputLine);
}

function executeCommand(commandText) {
    
    if (commandText === "help") {
        addOutput(`
            <p><span class="command">help</span> - List all available commands</p> 
            <p><span class="command">clear</span> - Clear the terminal screen</p>
            <p><span class="command">about</span> - Show information about me</p>
            <p><span class="command">projects</span> - Show my projects</p>
            <p><span class="command">contact</span> - Show contact information</p>
            <p><span class="command">links</span> - Toggle quick navigation links</p>
            `);
    } else if (commandText === "clear") {
        commandHistory.innerHTML = '';
    } else if (commandText === "about") {
        addOutput(`
            <p>I'm a passionate developer creating digital experiences</p>
            <p>Specialized in web technologies.</p>
            `);
    } else if (commandText === "projects") {
        addOutput(`
            <p>1. <a class='link' href='https://github.com/henrymzs/henry.com'>Terminal Portfolio</a> - A CLI-style portfolio</p>
            <p>2. <a class='link' href='https://github.com/henrymzs/web-scraping'>Web Scraping</a> - Web scraping of amazon page</p>
            <p>3. <a class='link' href='https://github.com/henrymzs/discord-news-bot'>Bot Discord</a> - News bot for discord</p>
            <p>4. <a class='link' href='https://github.com/henrymzs/api-todolist'>API-todolist</a> - a todo list api</p>
            <p>5. <a class='link' href='https://github.com/henrymzs/capture-the-castle'>Capture The Castle</a> - A game inspired by rock, paper but to capture the castle</p>
            <p>6. <a class='link' href='https://github.com/henrymzs/contact-management'>Contact Management</a> - a simple contact manager made in Java</p>
            <p>7. <a class='link' href='https://github.com/henrymzs/book-catalog-manager'>Book Manager</a> - A CRUD to manage books</p>
            `);
    } else if (commandText === "contact") {
        addOutput(`
            <p>Email: henrykaua21@gmail.com</p>
            <p>Twitter: @henry81102</p>
            <p>Github: @henrymzs</p>
            `)
    } else if (commandText === "links") {
        if (quickLinks.style.display === "none" || quickLinks.style.display === "") {
            quickLinks.style.display = "flex"; 
        } else {
            quickLinks.style.display = "none";
        }

    } else {
        addOutput(`
            <span class="error">Command not found: ${commandText}. Type 'help' for available commands.</span>
            `);
    }

    commandHistory.scrollTop = commandHistory.scrollHeight;
}

// Deve exibir a lista de comandos disponíveis ao iniciar
executeCommand('help');

if (window.innerWidth <= 768) {
    quickLinks.style.display = "flex";
} 
