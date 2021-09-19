const renderer = {
    heading(text, level) {
        return `
            <div class="m-header">
                <h${level} class="flag">#</${level}>
                <h${level}>${text}</${level}>
            </div>
        `;
    }
};

marked.use({ renderer })