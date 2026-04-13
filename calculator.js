function pick(val) {
            document.getElementById('k').value += val;
            playSound();
        }

        function clearDisplay() {
            document.getElementById('k').value = '';
        }

        function backspace() {
            let current = document.getElementById('k').value;
            document.getElementById('k').value = current.slice(0, -1);
        }

        function calculate() {
            try {
                let result = eval(document.getElementById('k').value);
                document.getElementById('k').value = result;
            } catch {
                alert('Invalid Expression');
                clearDisplay();
            }
        }

        function toggleMode() {
            document.body.classList.toggle('dark-mode');
        }

        
