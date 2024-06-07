document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', () => {
        const rows = parseInt(document.getElementById('rows').value);
        const patternType = document.getElementById('patternType').value;
        generatePattern(rows, patternType);
    });

    const generatePattern = (rows, patternType) => {
        const patternContainer = document.getElementById('pattern');
        patternContainer.innerHTML = '';

        if (patternType === 'pyramid') {
            for (let i = 1; i <= rows; i++) {
                let line = '';

                // Add leading spaces
                for (let j = 1; j <= rows - i; j++) {
                    line += ' ';
                }

                // Add numbers
                for (let k = 1; k <= i; k++) {
                    line += `${k} `;
                }

                const lineElement = document.createElement('div');
                lineElement.className = 'line';
                lineElement.textContent = line;
                patternContainer.appendChild(lineElement);
            }
        } else if (patternType === 'reversePyramid') {
            for (let i = rows; i >= 1; i--) {
                let line = '';

                // Add leading spaces
                for (let j = 1; j <= rows - i; j++) {
                    line += ' ';
                }

                // Add numbers
                for (let k = 1; k <= i; k++) {
                    line += `${k} `;
                }

                const lineElement = document.createElement('div');
                lineElement.className = 'line';
                lineElement.textContent = line;
                patternContainer.appendChild(lineElement);
            }
        } else if (patternType === 'diamond') {
            // Upper part of the diamond
            for (let i = 1; i <= rows; i++) {
                let line = '';

                // Add leading spaces
                for (let j = 1; j <= rows - i; j++) {
                    line += ' ';
                }

                // Add numbers
                for (let k = 1; k <= i; k++) {
                    line += `${k} `;
                }

                const lineElement = document.createElement('div');
                lineElement.className = 'line';
                lineElement.textContent = line;
                patternContainer.appendChild(lineElement);
            }

            // Lower part of the diamond
            for (let i = rows - 1; i >= 1; i--) {
                let line = '';

                // Add leading spaces
                for (let j = 1; j <= rows - i; j++) {
                    line += ' ';
                }

                // Add numbers
                for (let k = 1; k <= i; k++) {
                    line += `${k} `;
                }

                const lineElement = document.createElement('div');
                lineElement.className = 'line';
                lineElement.textContent = line;
                patternContainer.appendChild(lineElement);
            }
        }
    };

    // Generate default pattern on load
    generatePattern(5, 'pyramid');
});
